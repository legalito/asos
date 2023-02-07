import React, { Component, useState } from 'react'
import styles from './connexion.module.css'
import Navbar from '@/component/navbar/navbar'
import Footer from '@/component/footer/footer'
import axios from 'axios'
export class index extends Component {
  render() {
    const [token, setToken] = useState('');

    function submit (e){
      e.preventDefault();
      console.log("test")
      
      axios.post('http://localhost:3000/auth/login',{
        username:"anna",
        password:"anna"
      })
      .then(response=> {
        console.log(response.data);
        saveToken(response.data); 
      })
      .catch(error => {
        console.log(error);
      }) 
    }
    
    return (
      <>
        <div className={styles.containerLog}>
          <Navbar/>
        <div className={styles.loginWrapper}>
          <h1>Please Log In</h1>
          
              <label className={styles.label}><p>Username</p></label>
              <input type="text" placeholder="username" />
              <label className={styles.label}><p>Password</p></label>
              <input type="password" placeholder="password" />
              <div>
                <button onClick={submit}>sub</button>
              </div>
        
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