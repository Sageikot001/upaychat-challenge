import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
// import { StyledButton } from "../../common/Button/styles";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(78, 229, 74);

`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: rgb(78, 229, 74);
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.55);
  transition: color 0.2s ease-in;
  margin: 0.5rem 1rem;
  font-weight: 600;
  
  &:hover {
    color: #000;
  };


  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Box = styled("div")`
display: flex;
align-items: center;
justify-content: center;

`;
// margin-right: 100px;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Button = styled("button")<{ color?: string }>`
background: ${(p) => p.color || "white"};
border: none;
font-weight: 600;
`;
// color: ${(p) => (p.color ? "#2E186A" : "#fff")};
  
export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: rgb(78, 229, 74);
    text-underline-position: under;
    text-decoration: rgb(78, 229, 74) wavy underline;
  }
`;
