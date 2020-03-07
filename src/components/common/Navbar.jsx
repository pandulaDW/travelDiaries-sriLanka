import React, { useState } from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { AiOutlineMenuFold } from "react-icons/ai";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { v4 as uuidv4 } from "uuid";

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
        <AniLink fade to="/">
          <Image
            fluid={file.childImageSharp.fluid}
            className={styles.logoImg}
          />
        </AniLink>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks} ${styles.hideNav}`
          }
        >
          <li key={uuidv4()}>Tours</li>
          <li key={uuidv4()}>Hotels</li>
          <li key={uuidv4()}>
            <AniLink fade to="/locations">
              Locations
            </AniLink>
          </li>
          <li key={uuidv4()}>Contact Us</li>
        </ul>
      </div>
      <AiOutlineMenuFold className={styles.menuIcon} onClick={toggleNav} />
    </nav>
  );
};

export default Navbar;
