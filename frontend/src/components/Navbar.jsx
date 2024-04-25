import React from 'react'
import { MdOutlineAddBox } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-sky-400 py-8 px-8 flex justify-between'>
        <h1 className='font-["Aquire"] text-4xl'>BOOK STORE</h1>
        <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
    </div>
  )
}

export default Navbar