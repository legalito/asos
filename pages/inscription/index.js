import React, { Component } from 'react'
import styles from './inscription.module.css'
import Navbar from '@/component/navbar/navbar'
import Footer from '@/component/footer/footer'
import axios from 'axios'



export class index extends Component {
  render() {
    function submit (e){
      e.preventDefault();
      console.log("test")
      
      axios.post('http://localhost:3000/user',{
        pseudo:"michel",
        password:"abionna",
        mail:"anssna@gmail.com"
      })
      .then(response=> {
        console.log(response.data);
      })
      .catch(error => { 
        console.log(error);
      }) 
    }
    return (
      <>
      <div className={styles.containerLog}>
        <Navbar />
      <div className={styles.singupWrapper}>
        <h1>inscription</h1><div className={styles.loginWrapper}>
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
            <button onClick={submit} type="login">Login</button>
            </div>
        </div>  
      </div>
      </div>
      <Footer/>
      </>
    )
  }
}

export default index
