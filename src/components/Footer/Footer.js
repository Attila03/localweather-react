import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  background: rgba(0,0,0, 0.7);
  text-align: center;
  height: 40px;
  position: absolute;
  bottom: 0;
  width: 100%;

  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    line-height: 40px;
  }
`


const footer =  (props) => {
  return (
    <StyledFooter>
      <a href='https://darksky.net/poweredby/' target='_blank'>Powered By Dark Sky</a>
    </StyledFooter>
  )
}

export default footer;