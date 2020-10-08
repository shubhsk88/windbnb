import React from 'react'
import Card from '../../components/Card'
import data from '../../mocks/stays.json'
import { Container } from './style'
import Navbar from '../../components/Navbar/index'
const Home = () => {
  return (
    <Container>
      <Navbar />
      {data.map(apt => (
        <Card apt={apt} key={apt.title} />
      ))}
    </Container>
  )
}

export default Home
