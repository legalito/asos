import React, { Component } from 'react'
import Navbar from '@/component/navbar/navbar'
import styles from './panier.module.css'

export class panier extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <div className={styles.title}><h1>panier</h1></div>
          <div className={styles.trait_dessus}>
          <p>article</p></div>
          <div className={styles.trait_dessous}></div>
        </div>
      </div>
    )
  }
}
export default panier