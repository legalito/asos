import React, { Component } from 'react'
import styles from './panier.module.css'

export class index extends Component {
  render() {
    return (


      <div className={ styles.containerPanier }>

        <table className={ styles.table }>
            <thead>
                <tr><th></th><th>Article</th><th>Prix</th><th>Quantité</th><th>Total</th></tr>
                <tr><th></th><th>Article</th><th>Prix</th><th>Quantité</th><th>Total</th></tr>
            </thead>
        </table>

        <div className={ styles.toPay }>
            <p>À payer : </p>
        </div>


        <button className={ styles.button }>Passer la commande</button>
        
      </div>


    )
  }
}

export default index
