import React from "react";
import styled from "styled-components";

const Heading = ({ heading }) => {
  return (
    <HeadingWrapper>
      <h1>{heading}</h1>
    </HeadingWrapper>
  );
};

const HeadingWrapper = styled.div`
  text-align: center;

  h1 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 3.5rem;
    background-image: linear-gradient(
      to right,
      var(--color-primary-light),
      var(--color-primary)
    );
    display: inline-block;
    -webkit-background-clip: text;
    background-clip: text;
    letter-spacing: 0.2rem;
    color: transparent;
  }
`;

export default Heading;
