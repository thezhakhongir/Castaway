import aboutArrow from "./../../store/img/arrow.png";
import aboutPhoto from "./../../store/img/about-photo.png";
import "./About.css";
export const About = () => {
  return (
    <section id="about" className="section about_section">
      <div className="about">
        <img src={aboutArrow} alt="" />
        <p className="about_meet">Meet your host</p>
        <p className="about_name">Jacob Paulaner</p>
        <p className="about_info">
          Jacob has a background in audio engineering, and has been podcasting
          since the early days.
        </p>
        <p className="about_text">
          He’s here to help you level up your game by sharing everything he’s
          learned along the way.
        </p>
      </div>
      <div className="about_img">
        <img src={aboutPhoto} alt="about" />
      </div>
    </section>
  );
};
