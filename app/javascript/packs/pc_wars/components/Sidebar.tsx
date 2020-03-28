import React, { Children, MouseEvent, PropsWithChildren, useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='bg-gray-900 shadow-lg h-16 bottom-0 md:relative md:h-screen z-10 w-full md:w-48'>
      <div className='md:w-48 md:left-0 content-center md:content-start text-left justify-between'>
        <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
          <li className="mr-3 flex-1">
            <Link to={'/pc_wars'} className='block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500'>Dashboard</Link>
          </li>
          <li className="mr-3 flex-1">
            <Link to={'/pc_wars/auction_house'} className='block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500'>Auction House</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}