/* eslint-disable prettier/prettier */
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #000075;
  padding: 10px 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SLogo = styled(Link)`
  color: rgb(48, 48, 170);
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: white;

  &:hover {
    cursor: pointer;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const NavItem = styled.li`
  margin-right: 20px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: normal;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: rgb(48, 48, 170);
    font-weight: bold;
  }
`;
