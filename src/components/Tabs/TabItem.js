import React from 'react';

import styled from 'styled-components';

const TabItemContainer = styled.a.attrs({
  tabname:  props => props.tabname,
  title: props => props.title
})`
  display: inline-block;
  box-sizing: border-box;
  width: ${props => (100/props.itemsLength).toString() + '%'};
  padding: 10px;
  background: ${props => props.active  ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'};
  color: ${props => props.active  ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)' };
  border-radius: 5px 5px 0 0;
  &:hover {
    cursor: pointer;
  }
`

const tabitem = props => {
  return (
    <TabItemContainer 
      title={props.title} 
      itemsLength={props.itemsLength} 
      onClick={props.clicked} 
      active={props.active} 
      tabname={props.tabname}>
      {props.children}
    </TabItemContainer>
  )
}

export default tabitem;
