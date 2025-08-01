import { useState, useEffect } from 'react'
import Monetization from './components/monetization/Monetization'
import MonkeyClickerApp from './components/MonkeyClickerApp'

function App() {

  return (
    <Monetization>
      <MonkeyClickerApp />
    </Monetization>
  )
}

export default App