import React, { Component } from 'react';

import styled from 'styled-components';
import TabItem from './TabItem';

const TabContainer = styled.div`
  box-sizing: border-box;
  padding: 0;
  width: 100%;
  text-align: center;
`

const TabItemContainer = styled.div`
  /* background: rgba(0,0,0,0.7) */
`

class Tab extends Component {

  state = {
    activeTabName: this.props.activeTabName
  }

  onTabChangeHandler = (event) => {
    this.setState({activeTabName: event.target.attributes.tabname.value})
  }

  render () {

    const tabItems = this.props.children.filter(tabChild => {
      // console.log(tabChild)
      return tabChild.type.name === 'tabitem'
    })

    const contentItems  = this.props.children.filter(tabChild => {
      return tabChild.type.name === 'tabcontent'
    })

    const finalContent = contentItems.filter(contentItem => {
      return contentItem.props.tabname === this.state.activeTabName;
    })

    const itemsLength = tabItems.length;
    const finalTabItems = tabItems.map((tabItem, index) => {
      return <TabItem 
              itemsLength={itemsLength} 
              key={tabItem.props.tabname}
              title={tabItem.props.title} 
              tabname={tabItem.props.tabname}
              active={this.state.activeTabName === tabItem.props.tabname}
              clicked={this.onTabChangeHandler}>
                {tabItem.props.children}
              </TabItem>
    })

    return (
      <TabContainer>
        <TabItemContainer>
          {finalTabItems}
        </TabItemContainer>
        {finalContent[0]}
      </TabContainer>
    )
  }
}

export default Tab;