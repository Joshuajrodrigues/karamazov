import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <div className=' w-full h-10 bg-white text-rose-600 flex justify-between items-center'>
        <h1 className='mx-2 font-bold text-lg'>KARAMAZOV</h1>
        <div >
        <Button size={"sm"} variant={"link"} className='mx-2'>Login</Button>
        <Button size={"sm"} variant={"link"} className='mr-2'>Sign up</Button>
        </div>
    </div>
  )
}

export default Header