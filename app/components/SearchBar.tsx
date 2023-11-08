import React from 'react'
import {BiSearch} from 'react-icons/bi'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div className='flex items-center bg-gray-100 p-2 rounded-full max-md:hidden'>
        <button><BiSearch size={20} className=''/></button>
        <input 
        type="text"
        className='outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-red-300 tex=[16px]'
        placeholder='Search'
        autoComplete='false'
        />
    </div>
  )
}

export default SearchBar