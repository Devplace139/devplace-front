/* eslint-disable prettier/prettier */
import {
  Container,
  Content,
  ContentFilter,
  STitle,
  STitlePage,
  SFilter,
  ContentAccountants,
  CardAccountants,
  TitleAccountants,
  Accountants,
  ContentDoctorAppointments,
  WAppointments,
  WDoctors,
  HeaderAppointments,
  HeaderDoctors,
  TitleHeaderDoctors,
  SeeAll,
  WListDoctors,
  TitleHeaderAppointments,
  WFilter,
  WOrder,
  WListAppointments,
  TableContainer,
} from "./style";

import { LuCalendarDays } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { RiStethoscopeLine, RiArrowUpDownLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaRegHospital } from "react-icons/fa";
import { GoFilter } from "react-icons/go";

import { DoctorAppointment } from "../../../components/Items/DoctorAppointment";
import Header from "../../../components/Header/HDashboard";

const listAppointments = [
  {
    patient: "Maria Siqueira",
    date: "22/05/2025",
    doctor: "Dr. Paulo Silva",
    status: "confirmado",
  },
  {
    patient: "Carlos Pontes",
    date: "22/05/2025",
    doctor: "Dr. Paulo Silva",
    status: "confirmado",
  },
  {
    patient: "Pérola Silva",
    date: "22/05/2025",
    doctor: "Dr. Carminha Mendes",
    status: "confirmado",
  },
];

const ListDoctorsAppointments = [
  {
    doctor: "Dr. Paulo Silva",
    specialty: "Cardiologista",
    totalAppointment: 25,
  },
  {
    doctor: "Dr. Carminha Mendes",
    specialty: "Ginecologista",
    totalAppointment: 55,
  },
  {
    doctor: "Dr. Lucas Lima",
    specialty: "Ortopedista",
    totalAppointment: 32,
  },
];

export function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <STitlePage>Dashboard</STitlePage>

          {/* Content Header */}
          <ContentFilter>
            <STitle>
              Acesse uma visão geral detalhada das principais métricas
            </STitle>
            <SFilter>
              <LuCalendarDays size={15} /> Maio <IoIosArrowDown size={15} />
            </SFilter>
          </ContentFilter>
        </Content>

        {/* Metrics Accountants */}
        <ContentAccountants>
          <CardAccountants>
            <TitleAccountants>
              <LuCalendarDays size={15} />
              Agendamentos
            </TitleAccountants>
            <Accountants>200</Accountants>
          </CardAccountants>

          <CardAccountants>
            <TitleAccountants>
              <RiStethoscopeLine size={15} />
              Médicos
            </TitleAccountants>
            <Accountants>20</Accountants>
          </CardAccountants>

          <CardAccountants>
            <TitleAccountants>
              <HiOutlineUserGroup size={15} />
              Pacientes
            </TitleAccountants>
            <Accountants>500</Accountants>
          </CardAccountants>

          <CardAccountants>
            <TitleAccountants>
              <FaRegHospital size={15} />
              UBS
            </TitleAccountants>
            <Accountants>10</Accountants>
          </CardAccountants>
        </ContentAccountants>

        {/* Content appointments and Doctors */}
        <ContentDoctorAppointments>
          <WAppointments>
            <HeaderAppointments>
              <TitleHeaderAppointments>
                <LuCalendarDays size={15} />
                Agendamentos
              </TitleHeaderAppointments>

              <SeeAll>Ver todos</SeeAll>

              <WFilter>
                <GoFilter size={18} />
                Filtrar
              </WFilter>
              <WOrder>
                <RiArrowUpDownLine size={18} />
                Ordenar
              </WOrder>
            </HeaderAppointments>

            <WListAppointments>
              <TableContainer>
                <table>
                  <thead>
                    <th>PACIENTE</th>
                    <th>DATA</th>
                    <th>MÉDICO</th>
                    <th>STATUS</th>
                  </thead>
                  <tbody>
                    {listAppointments.map((a, index) => (
                      <tr key={index}>
                        <td>{a.patient}</td>
                        <td>{a.date}</td>
                        <td>{a.doctor}</td>
                        <td>{a.status}</td>
                      </tr>
                    ))}
                    {listAppointments.map((a, index) => (
                      <tr key={index}>
                        <td>{a.patient}</td>
                        <td>{a.date}</td>
                        <td>{a.doctor}</td>
                        <td>{a.status}</td>
                      </tr>
                    ))}
                    {listAppointments.map((a, index) => (
                      <tr key={index}>
                        <td>{a.patient}</td>
                        <td>{a.date}</td>
                        <td>{a.doctor}</td>
                        <td>{a.status}</td>
                      </tr>
                    ))}
                    {listAppointments.map((a, index) => (
                      <tr key={index}>
                        <td>{a.patient}</td>
                        <td>{a.date}</td>
                        <td>{a.doctor}</td>
                        <td>{a.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableContainer>
            </WListAppointments>
          </WAppointments>

          <WDoctors>
            <HeaderDoctors>
              <TitleHeaderDoctors>
                <RiStethoscopeLine size={15} />
                Médicos
              </TitleHeaderDoctors>
              <SeeAll>Ver todos</SeeAll>
            </HeaderDoctors>

            <WListDoctors>
              {ListDoctorsAppointments.map((d, index) => (
                <DoctorAppointment
                  key={index}
                  doctor={d.doctor}
                  specialty={d.specialty}
                  totalAppointment={d.totalAppointment}
                />
              ))}
            </WListDoctors>
          </WDoctors>
        </ContentDoctorAppointments>
      </Container>
    </>
  );
}
