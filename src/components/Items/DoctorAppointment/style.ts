/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px 5px;

  display: flex;
`;

export const WDoctor = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;
`;

export const SName = styled.span``;

export const SSpecialty = styled.span`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
`;

export const WTotalAppointments = styled.span`
  width: 30%;

  display: flex;
  justify-content: end;
  align-items: center;
`;
