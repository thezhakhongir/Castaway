import React from "react";
import styles from "./FormComment.module.css";

const FormComment = () => {
  return (
    <div className={styles.form_comment}>
      <div>
        <p style={{ color: "rgba(17, 141, 168, 1)" }}>Email Newsletter</p>
        <p
          style={{
            color: "rgba(255, 255, 255, 1)",
            fontSize: "72px",
            width: "431px",
          }}
        >
          Subscribe for updates
        </p>
      </div>
      <div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormComment;
