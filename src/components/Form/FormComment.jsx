import React, { useState } from "react";
import classes from "./FormComment.module.css";
import { Button } from "../UI/Button";

const FormComment = ({ addNewComment }) => {
  const [userComment, setUserComment] = useState({ title: "", userName: "" });
  const addUserComment = (e) => {
    const newComment = {
      title: userComment.title,
      userName: userComment.userName,
      id: Date.now(),
    };
    e.preventDefault();
    if (
      userComment.title.trim().length !== 0 &&
      userComment.userName.trim().length !== 0
    ) {
      addNewComment(newComment);
    }

    setUserComment({ title: "", userName: "" });
  };
  return (
    <section className={classes.comment_section}>
      <div className={classes.comment_text}>
        <p className={classes.comment_uppertitle}>Thank you</p>
        <h2 className={classes.comment_title}>Your impressions of the site</h2>
      </div>
      <form className={classes.comment_form} onSubmit={addUserComment}>
        <input
          required
          value={userComment.title}
          onChange={(e) =>
            setUserComment({ ...userComment, title: e.target.value })
          }
          type="text"
          placeholder="Comment"
        />
        <input
          required
          value={userComment.userName}
          onChange={(e) =>
            setUserComment({ ...userComment, userName: e.target.value })
          }
          type="text"
          placeholder="Name"
        />
        <Button>Submit</Button>
      </form>
    </section>
  );
};

export default FormComment;
