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

export const Content = styled.div`
  float: right;
  width: 100%;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
`;

// Content Filter
export const ContentFilter = styled.div`
  width: 100%;

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
  margin-top: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const CardAccountants = styled.div`
  width: 200px;
  background-color: white;
  border-radius: 5px;
  padding: 0 10px;
  box-shadow: 0 2px 10px rgba(177, 177, 177, 0.3);

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
`;

export const Accountants = styled.span`
  width: 100%;
  font-size: 1.5rem;
  text-align: left;
  padding: 5px;
`;

// Content appointments and Doctors
export const ContentDoctorAppointments = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 5px;

  display: flex;

  gap: 10px;
`;

export const WAppointments = styled.div`
  width: 70%;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  padding: 5px;

  display: flex;
  flex-direction: column;
`;

export const HeaderAppointments = styled.div`
  width: 100%;
  padding: 5px;

  display: flex;
`;

export const TitleHeaderAppointments = styled.span`
  width: 80%;
  padding-right: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const WFilter = styled.div`
  width: 30%;
  height: 100%;
  cursor: pointer;
  margin: 0 5px;
  margin-left: 20px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  border: 1px solid rgba(177, 177, 177, 0.5);
`;

export const WOrder = styled.div`
  width: 30%;
  height: 100%;
  cursor: pointer;
  border-radius: 5px;

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
      padding: 5px 10px;
      border: 0;
      background-color: white;
      font-size: 1rem;
      font-weight: normal;

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

export const WDoctors = styled.div`
  width: 30%;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  padding: 5px;

  display: flex;
  flex-direction: column;
`;

export const HeaderDoctors = styled.div`
  width: 100%;
  padding: 5px;

  display: flex;
`;

export const TitleHeaderDoctors = styled.span`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 5px;
`;

export const WListDoctors = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(177, 177, 177, 0.5);
  }

  /* border: 1px solid red; */
`;

export const SeeAll = styled.span`
  width: 9rem;
  color: gray;
  cursor: pointer;

  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;
`;
