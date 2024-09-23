import React from 'react'
import { Outlet } from 'react-router-dom' 
import Header from './header'
import Footer from './footer'
import { useSelector } from 'react-redux'

const Layout = () => {
    const statusTabCart = useSelector(store => store.cart.statusTab);
  return (
    <div className='bg-zinc-200'>
        <main className={`w-[1110px] max-w-full m-auto px-5 pt-5 transform transition-transform duration-500`}>
            <Header />
            <Outlet />
            <Footer />
        </main>
    </div>
  )
}

export default Layout