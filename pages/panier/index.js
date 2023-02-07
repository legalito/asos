import React, { Component } from 'react'
import Navbar from '@/component/navbar/navbar'
import styles from './panier.module.css'
import Footer from '@/component/footer/footer'
import Product from '@/component/productPanier/product'

export class panier extends Component {
  render() {
    return (
      <>
        <Navbar />
          <div className={styles.panier}>
            <h1>Panier:</h1>
            <div className={styles.articleList}>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                
                </div>
            <div className={styles.recap}>
              <h2>Récapitulatif</h2>
                <div className={styles.recapArticle}></div>
                  <p>Article</p>
                  <p>0€</p>
                <div className={styles.totalPrice}>
                  <p>Total</p>
                  <p>0€</p>
                </div>

                <div className={styles.btn}>
                  <button>Valider le panier</button>
                </div>
              </div>
          </div>
        <div className={styles.Footer}><Footer /></div>
      </>
    )
  }
}
export default panier