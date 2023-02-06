import React, { Component } from 'react'
import styles from './footer.module.css'
export class footer extends Component {
  render() {
    return (
      <>
         <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p className={styles.footerText}>&copy; 2023, Mon site de commerce électronique</p>
                <nav className={styles.footerNav}>
                    <a href="#about" className={styles.footerLink}>À propos</a>
                    <a href="#contact" className={styles.footerLink}>Contact</a>
                    <a href="#terms" className={styles.footerLink}>Conditions d'utilisation</a>
                    <a href="#privacy" className={styles.footerLink}>Politique de confidentialité</a>
                </nav>
            </div>
         </footer>
      </>
    )
  }
}

export default footer