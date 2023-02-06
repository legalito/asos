import React, { Component } from 'react'
import Card from '@/component/card/card'
import styles from './shop.module.css'
import Navbar from '@/component/navbar/navbar'
import Footer from '@/component/footer/footer'

export class index extends Component {
  render() {
    return (
      
      <div className={styles.content}>
        <Navbar/>
        <div className={styles.shop}>
        <div className={styles.filterMenu}>

        </div>
        <div className={styles.cardDisplay}>
          <div className={styles.card}>
            <Card title={"hello"}/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div> 
        </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default index