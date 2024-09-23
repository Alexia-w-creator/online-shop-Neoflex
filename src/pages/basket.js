import React from 'react' 
import { useSelector, useDispatch } from 'react-redux' 
import CartItem from '../components/cartItem';
import { headphones, wireless } from '../products'

const Basket = () => {
    const carts = useSelector(store => store.cart.items);
    // const total = () => {
    //     const products = headphones.concat(wireless);
    //     let totalSum = 0;
    //     for (const product in products){
    //         totalSum += product.price*product.quantity;
    //     }
    //     console.log(totalSum);
    //     return totalSum;
    // }
  return (
    <div className='min-h-[550px]'>
        <h2 className='text-gray-900 text-xl font-semibold'>Корзина</h2>
        <div className='flex justify-between'>
            <div className='w-[633px]'>
                {carts.map((item, key) => 
                    <CartItem key={key} data={item}/>
                )}
            </div>
            <div className='max-h-[120px] w-[350px] min-w-16 bg-white py-2 my-3 rounded-[30px] shadow-lg relative'>
                <div className='flex justify-between mx-5 mt-4 text-base font-semibold'>
                    <h4 className='uppercase'>Итого</h4>
                    <p>total₽</p>
                </div>
                <button className='absolute inset-x-0 bottom-0 h-16 bg-gray-950 rounded-[20px] shadow-lg
                text-white text-base font-semibold'>
                    Перейти к оформлению
                </button>
            </div>
        </div>

    </div>
  )

}

export default Basket



