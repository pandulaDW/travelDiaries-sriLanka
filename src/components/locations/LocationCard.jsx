import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";

import { randomIntFromInterval } from "../../utils";

const LocationCard = props => {
  const { image, title, description, corner } = props;
  return (
    <CardWrapper corner={corner}>
      <div className="image-content">
        <Image fluid={image.fluid} className="image" />
      </div>
      <div className="text-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--color-grey-light-0);
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.32);
  grid-gap: 5rem;

  .image-content {
    height: 30rem;
    clip-path: ${props =>
      props.corner
        ? `polygon(0 0, ${randomIntFromInterval(90, 95)}% 0, 100% 100%, 0 100%)`
        : `polygon(${randomIntFromInterval(
            5,
            10
          )}% 0, 100% 0, 100% 100%, 0 100%)`};
    grid-column: ${props => (props.corner ? "1 / 2" : "2 / 3")};
    transition: all 0.5s ease-out;
  }

  @media screen and (max-width: 800px) {
    .image-content {
      height: 40rem;
    }
  }

  .image-content:hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  .image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    transition: all 0.5s ease-out;

    &:hover {
      height: 110%;
    }
  }

  .text-content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: ${props =>
      props.corner ? "2rem 6rem 2rem 0rem" : "2rem 0rem 2rem 6rem"};
    grid-row: 1 /2;
    grid-column: ${props => (props.corner ? "2 / 3" : "1 / 2")};

    h1 {
      font-size: 2.2rem;
      padding-bottom: 1rem;
      text-transform: capitalize;
      border-bottom: 1px solid rgba(170, 170, 170, 0.4);
    }

    p {
      font-size: 1.3rem;
    }
  }
`;

export default LocationCard;
