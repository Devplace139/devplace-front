/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;
  padding: 0px 20px;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  float: right;
  width: 100%;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;

  a {
    font-size: 1rem;
    background: #33cc95;
    border-radius: 6px;
    text-decoration: none;
    color: #fff;
    justify-content: center;
    padding: 5px 10px;

    display: flex;
    align-items: center;
    overflow: hidden;
  }
`;

export const STitlePage = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const WSearch = styled.div`
  width: 100%;
  margin-top: 25px;

  display: flex;
  justify-content: space-between;
`;

export const SSearch = styled.div`
  width: 50%;
  border: 1px solid green;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background: #e7e9ee;
  padding: 0 7px;

  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 60px;
    padding: 5px 10px;
    background-color: #e7e9ee;
    border: 0;
    font-weight: 400;
    font-size: 1rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #7d7d79;
    }

    & + input {
      margin-top: 2rem;
    }
  }
`;

export const BtnAdd = styled.button`
  font-size: 1rem;
  background: #33cc95;
  border-radius: 6px;
  text-decoration: none;
  color: #fff;
  justify-content: center;
  padding: 5px 30px;
  border: 0;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TableContainer = styled.section`
  margin-top: 20px;
  border-radius: 5px 5px 0 0;

  table {
    width: 100%;
    border-spacing: 0 6px;

    th {
      color: rgba(0, 0, 0, 0.6);
      font-weight: 600;
      padding: 15px 32px;
      text-align: left;
      font-size: 1rem;
      line-height: 0px;
    }

    td {
      height: 60px;
      padding: 5px 32px;
      border: 0;
      background-color: white;
      font-size: 1rem;
      font-weight: normal;
      color: #969cb3;

      button {
        background-color: transparent;
        border: none;
      }

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }
    }

    td:first-child {
      border-radius: 5px 0 0 5px;
    }

    td:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
`;

export const SAction = styled.td`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`;
