import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Menu from './Components/Menu'
import About from './Components/About'
import Products from './Components/Product'
const App = () => {
  return (
    <div>
      <Navbar/>
      
      <main>
       <div id="home">
         <Home/>
       </div>
       <div id="menu">
        <Menu/>
       </div>
       <div id="about">
        <About/>
       </div>
       <div id="products">
        <Products/>
       </div>
      </main>
    </div>
  )
}

export default App
