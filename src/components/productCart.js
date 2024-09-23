import React from 'react' 
import iconRate from '../assets/images/iconRate.png'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const ProductCart = (props) => {
    const {id, name, price, image, rate} = props.data;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    }
    return (
    <div className='relative max-w-[350px] h-[407px] bg-white p-5 rounded-[30px] shadow-lg'>
        <img src={image} alt='' className='content-center m-auto' />
        <div className='mb-8 mx-5 content-between absolute inset-x-0 bottom-0 '>
            <div className='flex justify-between items-center'>
                <h3 className='productName text-base font-semibold py-3 text-left'>{name}</h3>
                <p>
                    <span className='text-2xl text-base font-semibold text-orange-400'>{price}₽</span>
                </p>
                
            </div>
            <div className='flex justify-between items-center'>
                <span className='text-base font-semibold text-gray-400 inline-flex'>
                    <img src={iconRate} alt='' className='w-23 h-23 mr-2.5'/>{rate}
                </span>
                <button className='text-base font-semibold hover:text-gray-400 active:text-gray-600' onClick={handleAddToCart}>
                    Купить
                </button>
            </div>
        </div>

        
    </div>
  )
}

export default ProductCart