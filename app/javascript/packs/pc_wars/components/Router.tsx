import React, { useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import IndexScreen from '../screens/IndexScreen'
import AuctionHouseScreen from '../screens/AuctionHouseScreen'

export default function Router() {
  return (
    <>
      <Switch>
        {/* Basic Content */}
        <Route exact path="/pc_wars/index">
          <IndexScreen />
        </Route>

        {/* Auction House */}
        <Route exact path="/pc_wars/auction_house">
          <AuctionHouseScreen />
        </Route>

        {/* 404 */}
        <Route path="*">
          Not Found
        </Route>
      </Switch>
    </>)
}