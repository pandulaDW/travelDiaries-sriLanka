import React from "react";
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
  const { file } = useStaticQuery(query);
  return (
    <nav className={styles.navContainer}>
      <Image fluid={file.childImageSharp.fluid} className={styles.logoImg} />
      <ul>
        <li>Tours</li>
        <li>Hotels</li>
        <li>Locations</li>
        <li>Contact Us</li>
      </ul>
      <AiOutlineMenuFold className={styles.menuIcon} />
    </nav>
  );
};

export default Navbar;
