

import React, { Component } from 'react'
import styles from './product.module.css'



const product = (props) => {
 
                return (
                        <>
                                <div className={styles.article}>
                
                                        <div className={styles.productImg}>
                                        <img id={styles.image} src={props.img} alt=""/>
                                        </div>
                                        <div className={styles.productDescription}>
                                                <p>{props.name}</p>
                                                <p>{props.price}€</p>
                                        </div>
                                </div>
                             
                        </>
                
                )
}

export default product