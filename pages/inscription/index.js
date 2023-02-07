import React, { Component } from 'react'
import styles from './inscription.module.css'
import Navbar from '@/component/navbar/navbar'
import Footer from '@/component/footer/footer'

export class index extends Component {
  render() {
    return (
      <>
      <div className={styles.containerLog}>
        <Navbar />
        <div className={styles.signUpWrapper}>
            <h1>Inscription</h1><div className={styles.loginWrapper}>
            <form className={styles.form}>
              <label className={styles.label1}><p>Email</p></label>
              <input type="email" placeholder="email" />
              <label className={styles.label}><p>Username</p></label>
              <input type="text" placeholder="username" />
              <label className={styles.label}><p>Password</p></label>
              <input type="password" placeholder="password" />
              <label className={styles.label}><p>Confirm Password</p></label>
              <input type="password" placeholder="password" />
              <div>
                <button className={styles.label}type="submit">Inscription</button>
              </div>

            </form>
            </div>
        </div>
      </div>
    <Footer/>
    </>
    )
  }
}

export default index