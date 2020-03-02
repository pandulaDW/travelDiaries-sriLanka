import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { FaHotel, FaMap, FaMountain } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

import styles from "../../sass/features.module.scss";

const query = graphql`
  query {
    backgroundImage: contentfulAsset(title: { eq: "hill-country-evening" }) {
      fluid(quality: 100) {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
  }
`;

const Features = () => {
  const { backgroundImage } = useStaticQuery(query);
  return (
    <section className={styles.sectionFeatures}>
      <BackgroundImage
        fluid={backgroundImage.fluid}
        style={{
          position: "absolute",
          backgroundPosition: "center",
          backgroundSize: "cover",
          top: 0,
          left: 0,
          opacity: "1 !important",
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
    </section>
  );
};

export default Features;
