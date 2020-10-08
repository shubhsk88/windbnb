import React from 'react'
import Card from '../../components/Card'
import data from '../../mocks/stays.json'
import { Container } from './style'
const Home = () => {
  return (
    <Container>
      {data.map(apt => (
        <Card apt={apt} key={apt.title} />
      ))}
    </Container>
  )
}

export default Home
