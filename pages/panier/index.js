import React, { Component } from 'react'
import Navbar from '@/component/navbar/navbar'
import styles from './panier.module.css'
import Footer from '@/component/footer/footer'

export class panier extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <div className={styles.title}><h1>Panier</h1></div>
          <div className={styles.trait_dessus}>
            <p>article</p>
            <div className={styles.quantite}>
              <select>
                <option>quantité</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select></div></div>
          <div className={styles.box}>
            <div className ={styles.title2}> <p>Commande :</p></div>
            <div className={styles.box2}>
              <p>quantité produit</p>
              <div className={styles.trait_dessous2}></div>
              <p>Total produit</p>
              <div className={styles.trait_dessous2}></div>
              <p>prix livraison :</p>
              <div className={styles.trait_dessous2}></div>
              <p>Total : 687 $</p>
            </div>
          </div>
          <div className={styles.trait_dessous}></div>
        </div>
        <div className={styles.Footer}><Footer /></div>
      </div>
    )
  }
}
export default panier