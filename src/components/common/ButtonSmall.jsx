import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const ButtonSmall = ({ text, link }) => {
  return (
    <StyledButton>
      <AniLink fade to={link}>
        {text}
      </AniLink>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(
    to right,
    var(--color-primary-light),
    var(--color-primary)
  );

  transition: all 0.3s;
  position: relative;
  z-index: 1;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
  }

  &::before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-primary-light)
    );
    border-radius: 8px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s linear;
  }

  &:hover {
    padding-right: 2rem;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export default ButtonSmall;
