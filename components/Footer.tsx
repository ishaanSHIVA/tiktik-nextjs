import Link from 'next/link'
import React from 'react'

import { footerList2,footerList3,footerList1 } from "../utils/constants"

const Footer = () => {
  return (
    <div className="hidden mt-6 xl:block ">
        <div className="flex flex-wrap gap-2 mt-5">
            {footerList1.map(item => (
                <p key={item} className="text-sm text-gray-400 hover:underline">
                    {item}
                </p>
            ))}
        </div>
    </div>
  )
}

export default Footer