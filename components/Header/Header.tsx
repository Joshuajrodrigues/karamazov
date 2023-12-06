import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <header className=' w-full h-16 bg-white text-rose-600 flex justify-between items-center'>
        <h1 className='mx-3 font-bold text-lg'>KARAMAZOV</h1>
        <div >
        <Link href={'/login'} className='mx-3'>Login</Link>
        <Link href={'/signup'}  className='mr-3'>Sign up</Link>
        </div>
    </header>
  )
}

export default Header