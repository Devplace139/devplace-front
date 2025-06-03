/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

// Contents

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const ContentAppointments = styled.div`
  width: 100%;
  height: 50%;

  background-color: #06b250;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WAppointments = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const STitle = styled.span`
  font-size: 1.9rem;
  font-weight: 500;
  color: white;
`;

export const SSubTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
`;

export const SLinkBtn = styled(Link)`
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: #f9b40c;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const ContentQualities = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const WQualities = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const ItemQuality = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #057a3c;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QTitle = styled.span`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  color: black;
`;

export const QSubTitle = styled.span`
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 0.8rem;
  color: gray;
`;

// Content Footer

export const Footer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #06b250;

  display: flex;
  justify-content: center;
`;

export const WFooter = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FText = styled.span`
  color: white;
`;
