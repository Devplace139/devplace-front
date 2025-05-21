/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 93vh;
  margin: 0 auto;
  padding: 0px 20px;

  display: flex;
  flex-direction: column;

  border: 1px solid black;
`;

export const Content = styled.div`
  float: right;
  width: 100%;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  border: 1px solid black;

  a {
    font-size: 1rem;
    background: #33cc95;
    border-radius: 6px;
    text-decoration: none;
    color: #fff;
    justify-content: center;
    padding: 5px 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
`;

export const STitlePage = styled.span`
  font-size: 1.5rem;
  font-weight: 500;

  border: 1px solid black;
`;

// Content Filter
export const ContentFilter = styled.div`
  width: 100%;
  padding: 5px 0;

  border: 1px solid black;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const STitle = styled.span`
  color: gray;
`;

export const SFilter = styled.span`
  width: 6rem;
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
`;

// Content Metrics Accountants
export const ContentAccountants = styled.div`
  width: 100%;
  height: 100px;
  padding: 5px 0;
  margin-top: 5px;

  border: 1px solid black;

  display: flex;
  align-items: center;
  gap: 20px;
`;

export const WAccountants = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
`;

export const TitleAccountants = styled.span`
  display: flex;
  align-items: center;
  padding: 5px 0;

  display: flex;
  align-items: center;
  gap: 5px;

  /* border: 1px solid black; */
`;

export const Accountants = styled.span`
  width: 100%;
  /* border: 1px solid black; */
  font-size: 1.5rem;
  text-align: left;
  padding: 5px;
`;
