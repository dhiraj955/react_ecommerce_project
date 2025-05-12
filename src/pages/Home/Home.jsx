import React from 'react'
import Hero from './Hero'
import Product from '../product/Product'
import TopSelling from '../product/TopSelling'
import DressStyle from './DressStyle'
import NewsLetter from './NewsLetter'

function Home() {
  return (
    <div>
      <Hero/>
      <Product/>
    <TopSelling/>
    <DressStyle/>
    <NewsLetter/>
    </div>
  )
}

export default Home
