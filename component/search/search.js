import React, { Component } from 'react'
import Navbar from '@/component/navbar/navbar'
import styles from './Search.module.css'

export class search extends Component {
  render() {
    return (
        <>
        <div className="searchBar">
            <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Rechercher"/>
        </div>
        <div className="searchBar-results">
            <div className="search-results"></div>
        </div>
        </>
        )
    }
}

export default search
