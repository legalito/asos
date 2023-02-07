import  Search  from '@/component/search/search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
              <Link href="/">Accueil</Link>
              <Link href="/shop">Shop</Link>
              <Search/>

              <div>
                <Link className={styles.Link} href="/inscription"><button>Inscription</button></Link>
                <Link className={styles.Link} href="/connexion"><button>Connexion</button></Link>
                <Link href="/panier"><ShoppingCartIcon /></Link>
                
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
export default navbar