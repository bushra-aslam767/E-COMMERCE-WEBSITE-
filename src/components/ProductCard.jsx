import React from "react";
import styles from "./ProductCard.module.css";

function ProductCard({ product, cart, setCart }) {
  const inCart = cart.find((item) => item.id === product.id);

  const handleAdd = () => {
    if (inCart) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const handleDecrease = () => {
    if (inCart.quantity === 1) {
      setCart((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      {inCart ? (
        <div className={styles.quantityControl}>
          <button onClick={handleDecrease}>-</button>
          <span>{inCart.quantity}</span>
          <button onClick={handleAdd}>+</button>
        </div>
      ) : (
        <button onClick={handleAdd}>Add to Cart</button>
      )}
    </div>
  );
}

export default ProductCard;
