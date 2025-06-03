/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100%;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #057a3c;
`;

export const CSubTitle = styled.span`
  margin-top: 10px;
  color: gray;
`;

export const Form = styled.div`
  width: 50%;

  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  padding: 15px;
`;

export const SInput = styled.input`
  width: 100%;
  padding: 0 1.5rem;
  height: 3rem;
  border-radius: 0.25rem;

  border: 1px solid #d7d7d7;
  background: #e7e9ee;

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--text-body);
  }

  & + input {
    margin-top: 0.5rem;
  }
`;

export const SSelect = styled.div`
  margin-top: 0.5rem;
`;

export const ContentBtns = styled.div`
  width: 100%;
  margin-top: 35px;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
`;

export const BtnBack = styled.button`
  color: #057a3c;
  border: 1px solid #057a3c;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
`;

export const BtnConfirm = styled.button`
  color: white;
  background-color: #057a3c;
  border: 1px solid #057a3c;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
`;
