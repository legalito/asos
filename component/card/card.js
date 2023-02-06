import React, { Component } from 'react'
import styles from './card.module.css'



export class Card extends Component {
        render(props) {
                return (
                        <>
                                <div className={styles.card}>
                                        <div className={styles.card__page}>
                                                <div className={styles.card__img}>
                                                       <img id={styles.image} src="" alt=""/> 
                                                </div>
                                                <div className={styles.card__content}>
                                                        <h3 id={styles.card__title}>Title</h3>
                                                        <p id={styles.card__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                                                        <h3 id={styles.card__price}>price$</h3>
                                                        <div className={styles.card__btn}>
                                                                <button id={styles.btn}>Add to cart</button>
                                                        </div>
                                                </div>
                                        </div>
                                 </div>
                        </>
                )
        }
}

export default card