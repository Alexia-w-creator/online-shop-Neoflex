import React, { useState, useEffect} from 'react' 
import { Link } from 'react-router-dom'
import iconCart from '../assets/images/iconCart.png' 
import iconFavourite from '../assets/images/iconFavourite.png'
import { useSelector, useDispatch } from 'react-redux' 

const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts])
  return (
    <header className='flex justify-between items-center mb-5'>
        <Link to="/" className='text-2xl font-bold'>QPICK</Link>
        <div className='inline-flex'>
            <Link to="/favourite" className='mr-8 w-6 h-6 flex justify-center items-center relative'>
                <img src={iconFavourite} alt='' className='w-6'/>
                <span className='absolute -top-1 -right-1 bg-orange-400 text-white text-xs text-center
                w-4 h-4 rounded-full flex justify-center items-center'>0</span>
            </Link>
            <Link to="/basket" className='w-6 h-6 flex justify-center items-center relative'>
                <img src={iconCart} alt='' className='w-6'/>
                <span className='absolute -top-1 -right-1 bg-orange-400 text-white text-xs text-center
                w-4 h-4 rounded-full flex justify-center items-center'>{totalQuantity}</span>
            </Link>
        </div>
    </header>
  )
}

export default Header