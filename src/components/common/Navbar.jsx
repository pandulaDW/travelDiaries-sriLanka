import React, { useState } from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { AiOutlineMenuFold } from "react-icons/ai";

import styles from "../../sass/navbar.module.scss";

const query = graphql`
  query {
    file(name: { eq: "logo" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Navbar = () => {
  const [isOpen, setNav] = useState(false);

  const toggleNav = () => {
    setNav(isOpen => !isOpen);
  };

  const { file } = useStaticQuery(query);
  return (
    <nav className={styles.navContainer}>
      <div className={styles.menuContainer}>
        <Image fluid={file.childImageSharp.fluid} className={styles.logoImg} />
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks} ${styles.hideNav}`
          }
        >
          <li>Tours</li>
          <li>Hotels</li>
          <li>Locations</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <AiOutlineMenuFold className={styles.menuIcon} onClick={toggleNav} />
    </nav>
  );
};

export default Navbar;
