import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import {GoogleOAuthProvider} from '@react-oauth/google'

const MyApp = ({ Component, pageProps }: AppProps) => {

  // return           <Component {...pageProps} />


  const [isSSR,setisSSR] = useState(true)

  useEffect (() => {
    setisSSR(false)
  },[])

  if(isSSR) {
    return null
  }

  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_CLIENT_ID}`}>
      <Navbar></Navbar>
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          <Sidebar></Sidebar>
        </div>
        <div className="flex flex-col flex-1 h-[88vh] gap-10 mt-4 overflow-auto videos">
          <Component {...pageProps} />

        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default MyApp
