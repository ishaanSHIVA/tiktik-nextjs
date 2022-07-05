import React, { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { GoogleLogin } from 'react-google-login'
import { AiOutlineMenu, AiFillHome } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'
import Discover from './Discover'
import SuggestedAccounts from './SuggestedAccounts'
import Footer from './Footer'

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true)

  const userProfile = false;

  const normalLink = `flex items-center gap-3 hover:bg-primary p-3 
  justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded` 

  return (
    <div>
      <div className="">
        <div className="block m-2 mt-3 ml-4 text-xl " onClick={() => setShowSidebar(prev => !prev)}>
          {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
        </div>
        {showSidebar && (
          <div className="flex flex-col justify-start w-20 p-3 mb-10 border-r-2 border-gray-100 xl:w-400 xl:border-0">
            <div className="border-gray-200 xl:border-b-2 xl:pb-4">
                <Link href="/">
                  <div className={normalLink}>
                    <p className="text-2xl">
                      <AiFillHome />
                    </p>
                    <span className="hidden text-xl xl:block ">
                      For You
                    </span>
                  </div>
                </Link>
            </div>
            {!userProfile && (
            <div className="hidden px-2 py-4 xl:block">
              <p className="text-gray-400">Log in to like and comment on videos
              <div className="pr-4">
                  <GoogleLogin render={(renderProps) => (
                    <button
                      className="text-lg cursor-pointer   bg-white w-full font-semibold mt-3 px-6 py-3 rounded-md outline-none text-[#F51997] border-[1px] border-[#F51997] hover:text-white hover:bg-[#F51997] "
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Log In
                    </button>
    
                  )} clientId="" onSuccess={() =>{}} onFailure={() =>{}} cookiePolicy={"single_host_origin"}/>
              </div>
              </p>
            </div>
          )}
          <Discover />
          <SuggestedAccounts />
          <Footer />
          </div>
          
        )}
      </div>
    </div>
    
  )
}

export default Sidebar