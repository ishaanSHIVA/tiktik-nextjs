import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { GoogleLogin,googleLogout } from '@react-oauth/google'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { IoMdAdd  } from 'react-icons/io'
import Logo from "../utils/tiktik-logo.png"
import Link from 'next/link'
// import { createOrGetUser } from '../utils'


const Navbar = () => {
  const [user, setuser] = useState('')
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 border-b-2 border-gray-200">
        <Link href="/">
            <div className="w-[100px] md:w-[130px]">
                <Image className="cursor-pointer" src={Logo} layout="responsive"></Image>
            </div>
        </Link>

        <div className="">
          <div className="">SEARCH</div>

          <div className="">
            {user ? (
              <div className="">Logged In</div>
            ) : (
              <GoogleLogin 
                onSuccess={(response) => console.log(response)}
                onError={() => console.log("erro")}
              />
            )}
          </div>
        </div>
    </div>
  )
}

export default Navbar