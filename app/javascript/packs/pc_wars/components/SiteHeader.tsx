import React, { Children, MouseEvent, PropsWithChildren, useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function SideHeader() {
  return (
    <header>
      <nav className="bg-gray-900 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20">
        <div className="flex flex-wrap items-center">
          <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
            <a href="#">
              <span className="text-xl pl-2">
                <FontAwesomeIcon icon={faCoffee} color='white' />
              </span>
            </a>
          </div>
          <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li className="flex-1 md:flex-none md:mr-3">
                <a className="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
              </li>
              <li className="flex-1 md:flex-none md:mr-3">
                <a className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}