import React from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import tshirt from "../assets/image/t-shirt.png";
import Sneaker from "../assets/image/Sneaker.png";
import Jeans from "../assets/image/Jeans.png";
import Watch from "../assets/image/Watch.png";
import Hat from "../assets/image/Hat.png";
import Bag from "../assets/image/Bag.png";
import Lipoil from "../assets/image/Lipoil.png";
import Bottle from "../assets/image/Bottle.png";

const productsData = [
  { id: 1, name: "T-Shirt", price: 20, category: "Clothing", image: tshirt },
  { id: 2, name: "Sneakers", price: 50, category: "Footwear", image: Sneaker },
  { id: 3, name: "Jeans", price: 40, category: "Clothing", image: Jeans },
  { id: 4, name: "Watch", price: 100, category: "Accessories", image: Watch },
  { id: 5, name: "Hat", price: 15, category: "Accessories", image: Hat },
  { id: 6, name: "Bag", price: 45, category: "Accessories", image: Bag },
  { id: 7, name: "Lipoil", price: 25, category: "Accessories", image: Lipoil },
  { id: 8, name: "Bottle", price: 60, category: "Accessories", image: Bottle },
];

function ProductList({ cart, setCart }) {
  return (
    <>
      <div id="products" className={styles.container}>
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>

      <div className={styles.thanks}>
        <h2>✨ Thanks for your shopping! ✨</h2>
        <p>We hope to see you again soon 💖</p>
      </div>
    </>
  );
}

export default ProductList;
