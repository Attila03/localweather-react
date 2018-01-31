import React from 'react';

import styled from 'styled-components';
import logo from '../../assets/logo/weather.ico'

const HeaderContainer = styled.div`
  background: black;
  opacity: 0.7;
  text-align: center;
`

const Title = styled.h1`
  font-size: 30px;
  color: green;
  display: inline-block;
  margin-top: 5px;
`

const Logo = styled.img`
  height: auto;
  width: 50px;
  display: inline-block;
  position: relative;
  top: 15px;
  left: 10px;
`


const header =  (props) => {
  return (
    <HeaderContainer>
      <Title>Local Weather App</Title>
      <Logo src={logo}></Logo>
    </HeaderContainer>
  )
}


export default header;