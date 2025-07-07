import React from 'react'
import gsap from 'gsap/all'
import { SplitText, ScrollTrigger } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
    </main>
  )
}

export default App