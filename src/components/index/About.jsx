import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import styles from "../../sass/about.module.scss";
import Heading from "../common/Heading";

const query = graphql`
  query {
    images: allContentfulAsset(
      filter: {
        title: {
          in: [
            "top-down-view-paddy-field"
            "standing-fishermen"
            "two-elephants"
          ]
        }
      }
    ) {
      edges {
        node {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`;

const About = () => {
  const { images } = useStaticQuery(query);
  return (
    <section className={styles.sectionAbout}>
      <Heading heading="Touring Sri Lanka" />
      <div className={styles.aboutContainer}>
        <div className={styles.aboutInformation}>
          <div className={styles.aboutInformationPara}>
            <h3>It is so tiny!!</h3>
            <p>
              Sri Lanka is paradise for sightseeing, you name it, we have it!
              And in <span>close proximity</span> too! Within a tiny area of
              65,610 sq.km. is a package of varied interests. From Colombo on
              the West Coast you may travel to the salubrious hill country
              through breathtaking scenery in 3 to 5 hours. Each turns unfolding
              a different visual tapestry.
            </p>
          </div>
          <div className={styles.aboutInformationPara}>
            <h3>A feast for the sore eyes</h3>
            <p>
              The world renowned photographer Roloff Beny once said that he had
              never seen such a variations of greens anywhere in the world. Sri
              Lanka is often called the <span>Emerald Isle</span>.
            </p>
          </div>
          <div className={styles.aboutInformationPara}>
            <h3>A rich cultural history</h3>
            <p>
              It is not only the scenery which would captivate you... Sri
              Lanka's ancient cities with stupendous monuments, sculpture,
              cravings and huge man-made lakes; landscpaed gardens... have taken
              pride of place among the treasures of the ancient world.
              <span>
                Seven of these listed in UNESCO's World Heritage Sites
              </span>
              . And above all, a smiling, simple, hospitable people are a
              delight to any visitor to our shores.
            </p>
          </div>
        </div>
        <div className={styles.aboutImages}>
          {images.edges.map(({ node }, id) => {
            const className = `image` + parseInt(id + 1);
            return (
              <div className={styles[className]}>
                <Image key={id} fluid={node.fluid} className={styles.image} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
