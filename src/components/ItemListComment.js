import React from "react";
import styles from "./ItemListComment.module.css";
import ItemComment from "./ItemComment";

const ItemListComment = () => {
  return (
    <ul className={styles.item_container}>
      <ItemComment />
      <ItemComment />
      <ItemComment />
      <ItemComment />
      <ItemComment />
      <ItemComment />
    </ul>
  );
};

export default ItemListComment;
