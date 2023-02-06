import React, { Component } from 'react'
import styles from './card.module.css'



const card = (props) => {
 
                return (
                        <>
                                <div className={styles.card}>
                                        <div className={styles.card__page}>
                                                <div className={styles.card__img}>
                                                       <img id={styles.image} src={props.link} alt=""/> 
                                                </div>
                                                <div className={styles.card__content}>
                                                        <h3 id={styles.card__title}>{props.title}</h3>
                                                        <p id={styles.card__text}>{props.description}</p>
                                                        <h3 id={styles.card__price}>{props.price}€</h3>
                                                        <form className={styles.card__btn} action="" method="post">
                                                                <input id={styles.btn} type="submit" value="Add to cart"/>
                                                        </form>
                                                </div>
                                        </div>
                                 </div>
                        </>
                
                )
}

export default card