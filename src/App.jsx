import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Expierences from './components/Expierences'
import data from './data'

function App() {
  const cards = data.map(item => {
    return <Expierences
      key={item.id}
      {...item}
    />
  });

  return (
    <div className="container">
      <Header />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
