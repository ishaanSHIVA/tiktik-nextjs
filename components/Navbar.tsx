import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { GoogleLogin,GoogleLogout } from 'react-google-login'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { IoMdAddon } from 'react-icons/io'
import Logo from "../utils/tiktik-logo.png"
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 border-b-2 border-gray-200">
        <Link href="/">
            <div className="w-[100px] md:w-[130px]">
                <Image className="cursor-pointer" src={Logo} layout="responsive"></Image>
            </div>
        </Link>
    </div>
  )
}

export default Navbar