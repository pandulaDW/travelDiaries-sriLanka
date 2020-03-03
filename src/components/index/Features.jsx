import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { FaHotel, FaMap, FaMountain, FaUserFriends } from "react-icons/fa";

import styles from "../../sass/features.module.scss";

const query = graphql`
  query {
    backgroundImage: contentfulAsset(
      title: { eq: "sigirya-long-distance-view" }
    ) {
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
      <div className={styles.featureContainer}>
        <div className={styles.featureCard}>
          <FaMap className={styles.featureCardIcon} />
          <h1>Custom or Readymade Tours</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            voluptate facere! Nisi quisquam quo cupiditate eos earum fugiat
            sapiente ut ducimus ad.
          </p>
        </div>
        <div className={styles.featureCard}>
          <FaHotel className={styles.featureCardIcon} />
          <h1>Best Hotel Recommendations</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            voluptate facere! Nisi quisquam quo cupiditate eos earum fugiat
            sapiente ut ducimus ad.
          </p>
        </div>
        <div className={styles.featureCard}>
          <FaUserFriends className={styles.featureCardIcon} />
          <h1>Experienced and friendly guides</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            voluptate facere! Nisi quisquam quo cupiditate eos earum fugiat
            sapiente ut ducimus ad.
          </p>
        </div>
        <div className={styles.featureCard}>
          <FaMountain className={styles.featureCardIcon} />
          <h1>Explore unseen Sri Lanka</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            voluptate facere! Nisi quisquam quo cupiditate eos earum fugiat
            sapiente ut ducimus ad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
