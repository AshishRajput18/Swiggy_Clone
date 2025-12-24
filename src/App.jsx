import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Category from './components/Category'
import TopRest from './components/TopRest'
import OnlineDelivery from './components/OnlineDelivery'
import Footer from './components/Footer'
import BestPlaces from './components/BestPlaces'
import BestCuisines from './components/BestCuisines'
import ExploreNearMe from './components/ExploreNearMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Category/>
      <TopRest/>
      <OnlineDelivery/>
      <BestPlaces/>
      <BestCuisines/>
      <ExploreNearMe/>
      <Footer/>
    </>
  )
}

export default App
