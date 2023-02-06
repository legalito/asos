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
        <h1>Please Log In</h1>
        <form className={styles.form}>
            <label className={styles.label}><p>Username</p></label>
            <input type="text" />
            <label className={styles.label}><p>Password</p></label>
            <input type="password" />
            <div>
              <button type="submit">Submit</button>
            </div>
        </form>
        </div>
        <Footer/>
      </div>
        
      </>
    )
  }
}

export default index