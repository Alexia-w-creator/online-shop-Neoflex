import React, { useState, useEffect} from 'react' 
import { Link } from 'react-router-dom'
import iconLang from '../assets/images/iconLang.png' 
import VK from '../assets/images/VK.png' 
import Telegram from '../assets/images/Telegram.png' 
import Whatsapp from '../assets/images/Whatsapp.png' 
import { useSelector, useDispatch } from 'react-redux' 
import { toggleStatusTab } from '../stores/cart'

const Footer = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts])
  return (
    <footer className='min-h-[150px] flex bg-white shadow-lg justify-between mt-6 rounded-t-[30px]'>
        <Link to="/" className='mt-[30px] ml-[30px] text-2xl font-bold'>QPICK</Link>
        <div className='my-8 ml-16 grid grid-rows-3 items-left'>
            <Link to="/favourite" className='text-base font-normal'>Избранное</Link>
            <Link to="/basket" className='text-base font-normal'>Корзина</Link>
            <Link to="/contacts" className='text-base font-normal'>Контакты</Link>
            
        </div>
        <div className='my-8 grid grid-rows-2 items-left'>
            <Link to="/terms" className='text-base font-normal'>Условия сервиса</Link>
            <div className='inline-flex'>
                <img src={iconLang} alt='' className='w-5 h-5 mr-4'/>
                <span className='text-sm text-orange-400 font-bold mr-4 hover:cursor-pointer'>Рус</span>
                <span className='text-sm font-medium hover:cursor-pointer'>Eng</span>
            </div>
        </div>
        <div className='inline-flex m-8'>
            <img src={VK} alt='' className='w-8 h-5 mt-1 hover:cursor-pointer'/>
            <img src={Telegram} alt='' className='w-8 h-8 mx-[18px] hover:cursor-pointer'/>
            <img src={Whatsapp} alt='' className='w-8 h-8 hover:cursor-pointer'/>
        </div>
    </footer>
  )
}

export default Footer