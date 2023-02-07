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
      <div className={styles.singupWrapper}>
        <h1>inscription</h1><div className={styles.loginWrapper}>
        <form className={styles.form}>
            <label>
            <p>email</p>
            <input type="text" placeholder="email" />
            </label>
            <label>
            <p>Username</p>
            <input type="text" placeholder="username" />
            </label>
            <label>
            <p>Password</p>
            <input type="text" placeholder="username" />
            </label>
            <label>
            <p>Confirm Password</p>
            <input type="text" placeholder= "confirm password" />
            </label>
            <div>
            <button type="login">Login</button>
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
