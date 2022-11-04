import React from "react";
import classes from "./Footer.module.css";
import { Logo, instagram, twitter, facebook } from "../../store/icons/icons";
import { MusicIcons } from "../UI/MusicIcons";
import { Navigation } from "../Header/Navigation";

const Footer = () => {
  return (
    <footer id="contact">
      <div className={classes.first_column}>
        {Logo}
        <div className={classes.footer_icon}>
          {instagram}
          {twitter}
          {facebook}
        </div>
      </div>
      <Navigation
        style={{
          flexDirection: "column",
          rowGap: "10px",
          width: "20%",
        }}
      />
      <ul className={classes.third_column}>
        <li>Style Guide</li>
        <li>Instructions</li>
        <li>Changelog</li>
        <li>Credit</li>
        <li>Powered by Webflow</li>
        <li>Licenses</li>
      </ul>
      <MusicIcons style={{ width: "35%" }} />
    </footer>
  );
};

export default Footer;
