import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  const scrollToProducts = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <h1>Welcome to Our Store</h1>
      <p>Find the best products here</p>
      <button className={styles.shopBtn} onClick={scrollToProducts}>
        Shop Now
      </button>
    </section>
  );
}

export default Hero;
