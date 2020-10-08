import React from 'react'
import { Container, Input, Logo } from './style'
import image from '../../assets/logo.png'
const Navbar = () => {
  return (
    <Container>
      <Logo src={image}/>
      <Input />
    </Container>
  )
}

export default Navbar
