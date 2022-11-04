import React from "react";
import styles from "./ItemComment.module.css";

const ItemComment = () => {
  return (
    <>
      <li className={styles.item_box}>
        <div style={{ display: "flex", gap: "5px" }}>
          <input type='radio' />
          <input type='radio' />
          <input type='radio' />
          <input type='radio' />
          <input type='radio' />
        </div>
        <p>I can't recomment this podcast enough</p>
        <span>Betty Lacey</span>
      </li>
    </>
  );
};

export default ItemComment;
