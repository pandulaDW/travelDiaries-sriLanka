import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { graphql, useStaticQuery } from "gatsby";

import Heading from "../common/Heading";
import LocationCard from "./LocationCard";
import { makeSeq } from "../../utils";

const query = graphql`
  query {
    locations: allContentfulLocations(
      filter: {
        description: { description: { ne: null } }
        mainImage: { title: { ne: null } }
      }
    ) {
      edges {
        node {
          title
          description {
            description
          }
          mainImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const LocationList = () => {
  const { locations } = useStaticQuery(query);
  let oddOrEven = makeSeq(locations.edges.length);
  oddOrEven = oddOrEven.map(el => (el % 2 === 1 ? true : false));

  return (
    <ContentWrapper>
      <Heading heading="places to visit" />
      <p className="page-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sed
        illum consequatur corrupti soluta quisquam laudantium rem at incidunt
        excepturi perspiciatis optio, dolorem porro obcaecati animi libero
        doloremque saepe eos.
      </p>
      <div className="images">
        {locations.edges.map(({ node }, id) => (
          <LocationCard
            key={uuidv4()}
            image={node.mainImage}
            title={node.title}
            description={node.description.description}
            corner={oddOrEven[id]}
          />
        ))}
      </div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  background-color: var(--color-grey-light-1);
  padding: 10rem;

  .page-description {
    padding: 5rem 10rem;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 5rem;
  }

  .images > * {
    margin-bottom: 5rem;
  }
`;

export default LocationList;
