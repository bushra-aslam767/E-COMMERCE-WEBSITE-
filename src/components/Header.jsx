import React from "react";
import styles from "./Header.module.css";

function Header({ cartCount, totalPrice }) {
  return (
    <header className={styles.header}>
      <h1>MyShop</h1>
      <div>
        Items: {cartCount} | Total: ${totalPrice.toFixed(2)}
      </div>
    </header>
  );
}

export default Header;


