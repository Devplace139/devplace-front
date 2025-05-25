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
`;

export const STitlePage = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 10px;
`;

export const HeaderAppointments = styled.div`
  width: 100%;
  margin-top: 15px;
  padding: 5px;

  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;
`;

export const WFilter = styled.div`
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  border: 1px solid rgba(177, 177, 177, 0.5);
`;

export const WOrder = styled.div`
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  border: 1px solid rgba(177, 177, 177, 0.5);
`;

export const WListAppointments = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(177, 177, 177, 0.5);
  }
`;

export const TableContainer = styled.section`
  margin-top: 5px;
  border-radius: 5px 5px 0 0;

  table {
    width: 100%;
    border-spacing: 0 6px;

    th {
      color: rgba(0, 0, 0, 0.6);
      background-color: rgba(177, 177, 177, 0.1);
      font-weight: 600;
      padding: 15px 10px;
      text-align: left;
      font-size: 1rem;
      line-height: 0px;
    }

    td {
      height: 60px;
      padding: 5px 10px;
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

    td > svg {
      cursor: pointer;
    }

    td:first-child {
      border-radius: 5px 0 0 5px;
    }

    td:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
`;

export const Status = styled.span`
  width: 130px;
  color: green;
  background-color: rgb(225, 255, 221);
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
