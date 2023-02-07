import React, { Component } from 'react'
import Card from '@/component/card/card'
import styles from './shop.module.css'
import Navbar from '@/component/navbar/navbar'
import Footer from '@/component/footer/footer'

export default function index()  {

 
 
  const articles = [
    {
      title: "Vêtements",
      link:"../sneakers.jpg",
      description:"lrorem",
      price:"10"
    },
    {
      title: "Vêtements",
      link:"../sneakers.jpg",
      description:"lrorem",
      price:"10"
    },
    {
      title: "Vêtements",
      link:"../sneakers.jpg",
      description:"lrorem",
      price:"10"
    },
    {
      title: "Vêtements",
      link:"../sneakers.jpg",
      description:"lrorem",
      price:"10"
    },
    {
      title: "Vêtements",
      link:"../sneakers.jpg",
      description:"lrorem",
      price:"10"
    },
    {
      title: "Vêtements",
      link:"../sneakers.jpg",
      description:"lrorem",
      price:"10"
    },
  ];

    return (

      <div className={styles.content}>
        <Navbar/>
        <div className={styles.shop}>
        <div className={styles.filterMenu}>

        </div>
        <div className={styles.cardDisplay}>
          <div className={styles.card}>
          {articles.map(article => (
                    <Card
                      key={article.id}
                      link={article.link}
                      title={article.title}
                      description={article.description}
                      price={article.price}
                    />
                  ))}
          </div> 
        </div>
        </div>
        <Footer/>
      </div>
    )

}