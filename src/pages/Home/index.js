import React from 'react'
import Card from '../../components/Card'
import data from '../../mocks/stays.json'
import { Container,Header,Listing } from './style'
import Navbar from '../../components/Navbar/index'
const Home = () => {
  return (
    <Container>
      <Navbar />
      <Header>
        <header>
          Stays in Finland

        </header>
        <div className="count-room">
          <p>{data.length}+ stays</p>
        </div>
      </Header>
        
      <Listing>
      {data.map(apt => (
        <Card apt={apt} key={apt.title} />
      ))}

      </Listing>

      
    </Container>
  )
}

export default Home
