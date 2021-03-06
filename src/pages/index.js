import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/common/layout";
import HeroHeader from "../components/common/HeroHeader";
import About from "../components/index/About";
import Features from "../components/index/Features";

export default ({ data }) => (
  <Layout>
    <HeroHeader
      img={data.backgroundImage.fluid}
      height="90vh"
      title="the pearl"
      subtitle="of the indian ocean awaits you"
    />
    <About />
    <Features />
  </Layout>
);

export const query = graphql`
  query {
    backgroundImage: contentfulAsset(title: { eq: "Beach Veritcal" }) {
      title
      fluid(quality: 100) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`;
