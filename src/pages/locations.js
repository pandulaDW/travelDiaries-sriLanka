import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/common/layout";
import HeroHeader from "../components/common/HeroHeader";
import LocationList from "../components/locations/LocationList";

const locations = ({ data }) => {
  return (
    <Layout>
      <HeroHeader
        img={data.backgroundImage.fluid}
        height="90vh"
        title="serenity"
        subtitle="captured in one tiny island"
      />
      <LocationList />
    </Layout>
  );
};

export const query = graphql`
  query {
    backgroundImage: contentfulAsset(title: { eq: "99-acres" }) {
      title
      fluid(quality: 100) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`;

export default locations;
