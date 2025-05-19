/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { IActived } from "../../../interfaces/IUsers";

export const Container = styled.div<IActived>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(224, 224, 224, 0.6);

  display: ${({ isOn }) => (isOn ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  width: 40%;
  height: 50%;
  background-color: white;
  border-radius: 8px;
  padding: 5px;

  display: flex;
  flex-direction: column;
`;

export const ContentHeader = styled.div`
  width: 100%;
  border: 1px solid black;
  padding: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const Close = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentForm = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  margin: 15px 0;
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

export const BtnSave = styled.button`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  background: var(--green);
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
