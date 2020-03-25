import React, { Fragment, PropsWithChildren, ReactNode } from 'react'
import Sidebar from './Sidebar'

export default function Screen({ children }) {
  return (
    <div>
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  )
}