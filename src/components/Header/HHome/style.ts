/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
`;

export const WHeader = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    mix-blend-mode: multiply;
    transform: scale(1.5);
  }
`;

export const WMenu = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SLinkMenu = styled(Link)`
  font-size: 0.9rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;
