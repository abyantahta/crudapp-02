import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between bg-slate-700 px-12 py-3 text-white'>
        <Link className='font-bold' href='/'>AbyanCode</Link>
        <Link className='bg-slate-100 text-slate-500 py-3 px-6' href='/addTopic'>Add Topic</Link>
    </nav>
  )
}
