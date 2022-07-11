import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { Video } from '../types'

import VideoCard from '../components/VideoCard'
import NoResults from '../components/NoResults'
import { useRouter } from 'next/router'
import { BASE_URL } from '../utils'
import { useEffect } from 'react'

interface IProps {
  videos:Video[]
}

const Home: NextPage<IProps> = ({ videos }) => {

  useEffect(() => {
    const func  = async () => {
      const { data } = await axios.post(`${BASE_URL}/api/profile`,{
        id:'106259769714971591941'
    },{
      headers: {
    'Content-Type': 'application/json'
    }

    })
            console.log(data)

  }
  func()
  },[])

  return (
    <div className="flex flex-col h-full gap-10 videos">
     {videos?.length ? videos.map((video:Video) => (
       <VideoCard post={video} key={video._id} />
     )) : (
       <NoResults text={`No videos found`}/>
     )}
    </div>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/post`)
  console.log(data)
    return {
        props: {
          videos:data
        }
    }
}

export default Home


