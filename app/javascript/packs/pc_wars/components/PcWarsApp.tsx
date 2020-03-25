import React, { useEffect, useMemo, useReducer, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

export default function PcWarsApp() {
  return (
    <BrowserRouter>
      <div>
        <Router />
      </div>
    </BrowserRouter>
  )
}