import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import CarouselEffect from './components/Carousel/Carousel'
import Catagory from "./components/Cartagory/Catagory"
import Product from './components/Product/Product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <CarouselEffect/>
      <Catagory/>
      <Product/>
    </>
  )
}

export default App
