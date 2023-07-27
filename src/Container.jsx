import React from 'react'
import Header from '../src/Components/Header'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Contact from './Components/Contact'


const Container = () => {
  return (
    <section>
      <Header/>
      <Hero/>
      <Services/>
      <Contact/>
    </section>
  )
}

export default Container