import React from "react";
import styles from "./Footer.module.css";
import img1 from "../../store/img/1.svg";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <ul className={styles.footer_nav}>
        <li
          style={{
            width: "448px",
            height: "222px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <p>Castaway</p>
          <ul style={{ display: "flex", gap: "10px" }}>
            <li>
              <img
                style={{ width: "40px", height: "35px" }}
                src={img1}
                alt=""
              />
            </li>
            <li>
              <img
                style={{ width: "40px", height: "35px" }}
                src={img1}
                alt=""
              />
            </li>
            <li>
              <img
                style={{ width: "40px", height: "35px" }}
                src={img1}
                alt=""
              />
            </li>
          </ul>
        </li>
        <li style={{ width: "178px", height: "222px" }}>
          <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <li>Home</li>
            <li>About</li>
            <li>Episodes</li>
            <li>Contact</li>
          </ul>
        </li>
        <li style={{ width: "178px", height: "222px" }}>
          <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <li>Style Guide</li>
            <li>Instructiond </li>
            <li>Changelog</li>
            <li>Credit</li>
            <li>Credit</li>
            <li>Powered by Webflow</li>
            <li>Licenses</li>
          </ul>
        </li>
        <li style={{ width: "448px", height: "222px" }}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
