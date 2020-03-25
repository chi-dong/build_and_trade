import React, { Children, MouseEvent, PropsWithChildren, useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
      <Link to={'/pc_wars/index'}>Dashboard</Link>
      <Link to={'/pc_wars/auction_house'}>Auction House</Link>
    </div>
  )
}