import React from 'react'
import { headphones, wireless } from '../products'
import ProductCart from '../components/productCart'
const Home = () => {
  return (
    <div>
        <h1 className='text-xl text-gray-500 font-semibold my-5'>Наушники</h1>
        <div className='grid grid-cols-3 gap-7'>
            {headphones.map((product, key) => 
                <ProductCart key={key} data={product}/>
            )}
        </div>
        <h1 className='text-xl text-gray-500 font-semibold my-5'>Беспроводные наушники</h1>
        <div className='grid grid-cols-3 gap-7'>
            {wireless.map((product, key) => 
                <ProductCart key={key} data={product}/>
            )}
        </div>
    </div>
  )
}

export default Home