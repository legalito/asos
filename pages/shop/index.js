import React, { Component } from 'react'
import Card from '@/component/card/card'
import styles from './shop.module.css'

export class index extends Component {
  render() {
    return (
      <div className={styles.card}>
        <Card/>
        
      </div>
    )
  }
}

export default index