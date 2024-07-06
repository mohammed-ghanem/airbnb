import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/app/assets/svg/logo.svg"

const Header = () => {
    return (
        <header>
            <Link href="/">
                <Image src={logo} alt="logo" width={200} height={200}/>

            </Link>
        </header>
    )
}

export default Header