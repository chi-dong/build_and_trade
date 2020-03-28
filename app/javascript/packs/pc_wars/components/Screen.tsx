import React, { Fragment, PropsWithChildren, ReactNode } from 'react'
import Sidebar from './Sidebar'
import SiteHeader from './SiteHeader'

export default function Screen({ children }) {
  return (
    <div className="bg-gray-900 font-sans leading-normal tracking-normal">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">{children}</div>
      </div>
    </div>
  )
}