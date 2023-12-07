import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <header className=' w-full h-16 bg-foreground text-primary flex justify-between items-center'>
        <h1 className='mx-3 font-bold text-lg'>Whoiswho.In</h1>
       
    </header>
  )
}

export default Header