import React, { Component } from 'react'
import Navbar from '@/component/navbar/navbar'
import styles from './panier.module.css'
import Footer from '@/component/footer/footer'
import Product from '@/component/productPanier/product'

export default function panier() {
  const articles = [
    {
      name: "Chaussure",
      Link:"./sneakers.jpg"
    },
    {
      name: "Vêtements",
      Link:"./sneakers.jpg"
    },
    {
      name: "bijoux",
      Link:"./sneakers.jpg"
    },
    {
      name: "bijoux",
      Link:"./sneakers.jpg"
    }
  ];
  
    return (
      <>
        <Navbar />
          <div className={styles.panier}>
           <div className={styles.title}> <h1>Panier:</h1></div>
            <div className={styles.articleList}>
            {articles.map(article => (
                    <Product
                      key={article.id}
                      img={article.img}
                      name={article.name}
                      price={article.price}
                    /> 
                  ))
                 }
                
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