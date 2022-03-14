

import React from 'react'
import BasicPage from '../templates/basic-page'

export default class Home extends React.Component {
 
  
  render () {
    const page = this.props.object
    return <BasicPage page={page}/>
  }
}