import React, { Component } from 'react'
import styles from './inscription.module.css'
import Navbar from '@/component/navbar/navbar'
import footer from '@/component/footer/footer'



export class index extends Component {
  render() {
    return (
      <>
      <div className={styles.containerLog}>
      <div className={styles.singupWrapper}>
        <h1>inscription</h1>
        <form className={styles.form}>
            <label>
            <p>email</p>
            <input type="email" />
            </label>
            <label>
            <p>Username</p>
            <input type="text" />
            </label>
            <label>
            <p>Password</p>
            <input type="password" />
            </label>
            <div>
            <button type="login">Login</button>
            </div>
        </form>
        </div>
      </div>
        
      </>
    )
  }
}

export default index
