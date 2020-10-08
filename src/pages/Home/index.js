import React from 'react'
import Card from '../../components/Card'
import data from '../../mocks/stays.json'
import { Container,Listing } from './style'
import Navbar from '../../components/Navbar/index'
const Home = () => {
  return (
    <Container>
      <Navbar />
      <header >
        Stays in Finland
      </header>
      <Listing>
      {data.map(apt => (
        <Card apt={apt} key={apt.title} />
      ))}

      </Listing>

      
    </Container>
  )
}

export default Home
