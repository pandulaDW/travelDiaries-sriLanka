import React from "react";
import BackgroundImage from "gatsby-background-image";

import styles from "../../sass/hero.module.scss";
import Title from "../common/Title";
import Navbar from "../common/Navbar";

const HeroHeader = ({ img, height, title, subtitle, children }) => {
  return (
    <header
      className={styles.header}
      style={{
        height: height || "60vh",
      }}
    >
      <BackgroundImage
        fluid={img}
        style={{
          position: "absolute",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: "1 !important",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <Navbar />
      <Title title={title} subtitle={subtitle} />
      {children}
    </header>
  );
};

export default HeroHeader;
