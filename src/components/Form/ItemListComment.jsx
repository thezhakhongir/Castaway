import React from "react";
import classes from "./ItemListComment.module.css";
import ItemComment from "./ItemComment";

const ItemListComment = ({ comments, onDelete }) => {
  return (
    <section className={classes.item_container}>
      <ul className={classes.item_list}>
        {comments.map((comment) => {
          return (
            <ItemComment
              key={comment.id}
              comment={comment}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ItemListComment;
