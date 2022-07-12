import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
        <Link href={"/data"}>
            <h1>GO to data</h1>
        </Link>
    </div>
  )
}

export default index