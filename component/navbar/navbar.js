import Link from 'next/link'
import React, { Component } from 'react'

import styles from './navbar.module.css'



export class navbar extends Component {
  render() {
    return (
      <>
            <nav>
                <div className={styles.navbar}>
                    <div>
                        <p>Accueil</p>
<<<<<<< HEAD:component/navbar.js
                        <p>Accueil</p>
                        <p>Accueil</p>
                        <p>panier</p>
=======
                        <p>Shop</p>
                        <p>Accueil</p>
>>>>>>> main:component/navbar/navbar.js
                        <div>
                            <Link className={styles.Link} href="/inscription"><button>Inscription</button></Link>
                            <Link className={styles.Link} href="/connexion"><button>Connexion</button></Link>
                        </div>
                    </div>
                </div>
            </nav>
      </>
    )
  }
}

export default navbar