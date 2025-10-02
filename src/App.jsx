import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ThingsILikeCarousel from './components/ThingsILikeCarousel.jsx'
import Anime from './components/Anime.jsx';
function App() {

  return (
    <>
    <Header />
    <Hero />
    <ThingsILikeCarousel />
    <Anime />
    </>
  )
}

export default App
