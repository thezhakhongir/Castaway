import React from "react";
import classes from "./ItemComment.module.css";
import trash from "../../store/icons/trash.svg";

const ItemComment = ({ comment, onDelete }) => {
  return (
    <li className={classes.item_box}>
      <p className={classes.item_comment}>{comment.title}</p>
      <p className={classes.item_name}>{comment.userName}</p>
      <img
        src={trash}
        alt=""
        className={classes.trash_icon}
        onClick={() => onDelete(comment.id)}
      />
    </li>
  );
};

export default ItemComment;
