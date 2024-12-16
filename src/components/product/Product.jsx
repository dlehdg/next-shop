"use client";
import useFetchCollection from "@/hooks/useFetchCollection";
import React from "react";
import Loader from "../loader/Loader";
import styles from "./Product.module.scss";

const Product = () => {
  // const { data, isLoading } = useFetchCollection("products");

  // console.log(data);

  return (
    <section className={styles.product}>
      <aside className={styles.filter}></aside>
      <div className={styles.content}>
        <div>product</div>
      </div>
    </section>
  );
};

export default Product;
