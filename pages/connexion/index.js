import React, { Component } from 'react'
import styles from './connexion.module.css'
import Navbar from '@/component/navbar/navbar'
import Footer from '@/component/footer/footer'

export class index extends Component {
  render() {
    return (
      <>
      <div className={styles.containerLog}>
        <Navbar/>
        <div className={styles.loginWrapper}>
          <h1>Connexion</h1>
          <form className={styles.form}>
              <label className={styles.label1}><p>Username</p></label>
              <input type="text" placeholder="username" />
              <label className={styles.label}><p>Password</p></label>
              <input type="password" placeholder="password" />
              <div>
                <button className={styles.label}type="submit">Connexion</button>
              </div>
          </form>
          </div>
       
        </div>
          <div className={styles.footer}>
          <Footer/>
        </div>
      </>
    )
  }
}

export default index