import React, { Component } from 'react'
import styles from './card.module.css'



const card = (props) => {
 
                return (
                        <>
                                <div className={styles.card}>
                                        <div className={styles.cardpage}>
                                                <div className={styles.cardimg}>
                                                       <img id={styles.image} src={props.link} alt=""/> 
                                                </div>
                                                <div className={styles.cardcontent}>
                                                        <h3 id={styles.cardtitle}>{props.title}</h3>
                                                        <p id={styles.cardtext}>{props.description}</p>
                                                        <p id={styles.cardprice}>{props.price}€</p>
                                                        <button>Add to cart</button>
                                                </div>
                                        </div>
                                 </div>
                        </>

                )
}
export default card