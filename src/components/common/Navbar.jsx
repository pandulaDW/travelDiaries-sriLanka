import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    file(name: { eq: "logo" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Navbar = () => {
  const { file } = useStaticQuery(query);
  return (
    <NavBarWrapper>
      <Image fluid={file.childImageSharp.fluid} className="logo-img" />
      <ul>
        <li>Tours</li>
        <li>Hotels</li>
        <li>Locations</li>
        <li>Contact Us</li>
      </ul>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  .logo-img {
    width: 10rem;
    height: 10rem;
  }

  ul {
    display: flex;
    list-style: none;
    margin-left: auto;
    margin-right: 4rem;

    li {
      padding: 0 1.2rem;
      font-size: 2.4rem;
      color: white;
      cursor: pointer;
      border-left: 1px solid rgba(255, 255, 255, 0);
      border-right: 1px solid rgba(255, 255, 255, 0);
      transition: all 0.4s ease-in;

      &:hover {
        transform: translateY(-1.1px);
        border-left: 1px solid rgba(255, 255, 255, 0.8);
        border-right: 1px solid rgba(255, 255, 255, 0.8);
      }
    }
  }
`;

export default Navbar;
