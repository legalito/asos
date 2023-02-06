import React, { Component } from 'react'
import styles from './connexion.module.css'
import Navbar from '@/component/navbar/navbar'
import footer from '@/component/footer/footer'
export class index extends Component {
  render() {
    return (
      <>
      <div className={styles.containerLog}>
      <div className={styles.loginWrapper}>
        <h1>Please Log In</h1>
        <form className={styles.form}>
            <label>
            <p>Username</p>
            <input type="text" />
            </label>
            <label>
            <p>Password</p>
            <input type="password" />
            </label>
            <div>
            <button type="submit">Submit</button>
            </div>
        </form>
        </div>
      </div>
        
      </>
    )
  }
}

export default index