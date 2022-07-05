import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {

  const [isSSR,setisSSR] = useState(true)

  useEffect (() => {
    setisSSR(false)
  },[])

  if(isSSR) {
    return null
  }

  return (
    <div className="">
      Navbar 
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          Sidebar
        </div>
        <div className="flex flex-col h-1 gap-10 mt-4 overflow-auto videos">
          <Component {...pageProps} />

        </div>
      </div>
    </div>
  )
}

export default MyApp
