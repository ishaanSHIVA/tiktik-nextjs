import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { GoVerified } from 'react-icons/go'
import NoResults from '../../components/NoResults'
import VideoCard from '../../components/VideoCard'

import { IUser,Video } from '../../types'
import { BASE_URL } from '../../utils'

interface IProps {
    data: {
        user:IUser,
        userVideos:Video[],
        userLikedVideos:Video[],
    }
}

const Profile = ({ data }:IProps) => {
    console.log(data)
  return (
    <div className="w-full">
        <div className="flex w-full gap-6 mb-4 bg-white md:gap-10">
            <div className="flex gap-3 p-2 font-semibold rounded cursor-pointer hover:bg-primary">
                    <div className="w-16 h-16 md:w-32 md:h-32 ">
                      <Image className="rounded-full" layout="responsive" src={data.user.image} width={120} height={120} />
                    </div>

                    <div className="flex flex-col justify-center">
                        <p className="flex items-center justify-center gap-1 tracking-wider text-md md:text-2xl text-primary lower">
                          {data.user.userName.replaceAll(" ", "").toLowerCase()}
                          <GoVerified className="text-blue-400"></GoVerified>
                        </p>
                        <p className="text-gray-400 capitalize md:text-xl">
                          {data.user.userName}
                        </p>
                    </div>
                  </div>
        </div>
    </div>
  )
}


export const getServerSideProps = async ({ params:{id} }:{ params:{ id:string} }) => {
    const { data } = await axios.get(`${BASE_URL}/api/profile/${id}`)
    return {
        props: { 
            data
        }
    }
}

export default Profile