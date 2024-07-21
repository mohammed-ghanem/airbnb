import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/app/assets/svg/logo.svg"
import SearchBar from './SearchBar'
import NavLinks from './NavLinks'

const Header = () => {
    return (
        <header className='shadow-sm'>
            <nav className='container py-3 text-white md:grid grid-cols-3 sm:space-y-3 space-y-1'>
                <Link href="/">
                    <Image src={logo} alt="logo" width={150} height={150} />
                </Link>
                <SearchBar />
                <NavLinks />
            </nav>
        </header>
    )
}

export default Header