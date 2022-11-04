import { MusicIcons } from "../UI/MusicIcons";
import profilePhoto from "./../../store/img/profile-photo.png";
import "./Home.css";

export const Home = () => {
  return (
    <section className="section home_section">
      <div className="home_left">
        <img src={profilePhoto} alt="profile" />
      </div>
      <div className="home_right">
        <p className="title">
          Take your podcast to the <span className="next_text">next</span>{" "}
          <b>level</b>
        </p>
        <div>
          <p className="subtitle">Listen on</p>
          <MusicIcons />
        </div>
      </div>
    </section>
  );
};
