import React from 'react'
import gsap from 'gsap/all'
import { SplitText, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div className='text-amber-600 text-3xl'>App</div>
  )
}

export default App