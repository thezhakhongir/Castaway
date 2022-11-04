import { Button } from "../UI/Button";
import classes from "./EpisodesItem.module.css";
import episodesImg from "./../../store/img/episodes1.png";

export const EpisodesItem = () => {
  return (
    <div className={classes.episode}>
      <div className={classes.episodes_img}>
        <img src={episodesImg} alt="" />
      </div>
      <div className={classes.episodes_descr}>
        <p className={classes.tags}>Gear</p>
        <p className={classes.episodes_number}>Episode 3</p>
        <h2 className={classes.episodes_title}>
          Should you get outboard audio gear?
        </h2>
        <p className={classes.episodes_subtitle}>
          Is hardware really worth it when it comes to podcasting? The answer
          is...it depends. Here's our reasons on why you might want to consider
          picking something up.
        </p>
        <Button>View Episode Details</Button>
      </div>
    </div>
  );
};
