import './index.css'

import { Navbar, Hero, About, Product, Service, Testimonials, Footer } from './components';


function App() {

  return (
    <>
      <Navbar/>
        <Hero/>
        <About/>
        <Service/>
        <Product/>
        <Testimonials/>
        <Footer/>
    </>
  )
}

export default App
