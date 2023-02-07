import React, { Component } from 'react'
import styles from './product.module.css'

class Product extends Component {
  state = {
    value: 0
  };

  incrementValue = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };

  decrementValue = () => {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  };

  render() {
    return (
      <>
        <div className={styles.article}>
          <div className={styles.productImg}>
            <img id={styles.image} src={this.props.img} alt="" />
          </div>
          <div className={styles.productDescription}>
            <p>{this.props.name}</p>
            <p>{this.props.price}€</p>
          </div>
          <div className={styles.btn}>
            <input
              type="text"
              id="valueInput"
              value={this.state.value}
              readOnly
            />
            <button id="decrementButton" onClick={this.decrementValue}>
              -
            </button>
            <button id="incrementButton" onClick={this.incrementValue}>
              +
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
