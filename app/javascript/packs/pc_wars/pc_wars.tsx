import React from 'react'
import ReactDOM from 'react-dom'
import PcWarsApp from './components/PcWarsApp'

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <PcWarsApp />,
    document.getElementById('pc_wars'),
  )
})
