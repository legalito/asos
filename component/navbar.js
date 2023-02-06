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
                        <p>Accueil</p>
                        <p>Accueil</p>
                        <p>Accueil</p>
                        <div>
                            <button>Inscription</button>
                            <button>connexion</button>
                        </div>
                    </div>
                </div>
            </nav>
      </>
    )
  }
}

export default navbar