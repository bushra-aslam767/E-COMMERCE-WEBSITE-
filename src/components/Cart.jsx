import React from "react";
import styles from "./Cart.module.css";

function Cart({ cart, setCart }) {
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>🛒 Your Cart</h3>
      {cart.length === 0 ? (
        <p className={styles.empty}>Your cart is empty 😢</p>
      ) : (
        <ul className={styles.cartList}>
          {cart.map((item) => (
            <li key={item.id} className={styles.cartItem}>
              <span>
                {item.name} - ${item.price.toFixed(2)} x {item.quantity} = $
                {(item.price * item.quantity).toFixed(2)}
              </span>
              <button
                className={styles.removeBtn}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h4 className={styles.total}>Total: ${total.toFixed(2)}</h4>
    </div>
  );
}

export default Cart;
