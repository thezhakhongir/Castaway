import { Button } from "../UI/Button";
import classes from "./EpisodesItem.module.css";

export const EpisodesItem = ({ data }) => {
  return (
    <div className={classes.episode}>
      <div className={classes.episodes_img}>
        <img src={data.img} alt="" />
      </div>
      <div className={classes.episodes_descr}>
        <p className={classes.tags}>{data.titleName}</p>
        <p className={classes.episodes_number}>{data.number}</p>
        <h2 className={classes.episodes_title}>{data.title}</h2>
        <p className={classes.episodes_subtitle}>{data.text}</p>
        <Button>View Episode Details</Button>
      </div>
    </div>
  );
};
