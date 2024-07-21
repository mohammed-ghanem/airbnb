// import Image from 'next/image'
// import searchIcon from '@/app/assets/svg/searchIcon.svg'
import { SearchIcon } from "@heroicons/react/solid"



const SearchBar = () => {
    return (
        <div className='  relative flex items-center border border-gray-300 rounded-full bg-gray-50 p-2 text-sm md:shadow-sm'>
            <input className='block w-full text-gray-900 bg-transparent dark:placeholder-gray-400 dark:text-whit outline-0 p-1'
                type="text" placeholder="start your search" />
            <SearchIcon className=' absolute hidden md:inline-flex right-2 bg-red-400 rounded-full w-7 h-7 p-1 font-bold cursor-pointer' />
        </div>
    )
}

export default SearchBar