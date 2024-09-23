import React, {useState, useEffect} from 'react' 
import { headphones, wireless } from '../products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';
import minus from '../assets/images/minus.png';
import plus from '../assets/images/plus.png'
import iconDelete from '../assets/images/iconDelete.png'

const CartItem = (props) => {
    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        let products = headphones.concat(wireless);
        const findDetail = products.filter(product => product.id === productId)[0];
        console.log(products);
        setDetail(findDetail);
    }, [productId])
    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }));
    }
    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }));
    }
    const deleteItem = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: 0
        }));
    }
  return (
    <div className='flex justify-between items-center bg-white text-gray-900 py-2 my-3 rounded-[30px] shadow-lg'>
        <div className='flex items-center'>
            <div className='place-content-center mx-5'>
                <img src={detail.image} alt="" className='w-36 mb-5'/>
                <div className='mx-auto mb-4 w-[119px] flex justify-between gap-6 items-center'>
                    <button className='bg-orange-300 rounded-full w-7 h-7' onClick={handleMinusQuantity}>
                        <img src={minus} alt='' className='m-auto'/>
                    </button>
                    <span className='text-base font-semibold'>{quantity}</span>
                    <button className='bg-orange-300 rounded-full w-7 h-7' onClick={handlePlusQuantity}>
                        <img src={plus} alt='' className='m-auto'/>
                    </button>
                </div>
            </div>
            <div>
                <h3 className='text-base font-medium mb-2.5'>{detail.name}</h3>
                <h4 className='text-sm font-semibold text-gray-400'>{detail.price}₽</h4>
            </div>
        </div>
        <div className='mr-7 items-right'>
            <button className='mb-36' onClick={deleteItem}>
                <img src={iconDelete} alt='' className='w-5 h-5 ml-5'/>
            </button>
            <p className='text-sm font-semibold'>{detail.price * quantity}₽</p>
        </div>
        

    </div>
  )
}

export default CartItem