import React from "react";
import styled from "styled-components";

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h1>
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </h1>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-transform: uppercase;
  font-size: 2.3rem;
  text-align: center;
  color: #fff;

  .title {
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3rem;
  }

  .subtitle {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1rem;
  }

  @media (min-width: 560px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`;

export default Title;
