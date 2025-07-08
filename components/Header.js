import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className=' flex justify-between bg-black text-white items-center px-10'>
        <div>
            <Image src="/Logo.png" alt='No Logo Found' width={100} height={100} className='w-40'/>
        </div>

        <div>
            <ul className='flex  space-x-10'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/'>Solutions</Link></li>
            <li><Link href='/'>Resources</Link></li>
            <li><Link href='/'>Blog</Link></li>
            <li><Link href='/'>Contact Us</Link></li>
        </ul>
        </div>
        <div className='border-[1px] p-2 rounded-xl'>

            <Link href='/'>Let's talk</Link>

        </div>
    </div>
  )
}

export default Header