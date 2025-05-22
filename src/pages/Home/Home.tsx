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
} from "./style";

import { LuCalendarDays } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { RiStethoscopeLine, RiArrowUpDownLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaRegHospital } from "react-icons/fa";
import { GoFilter } from "react-icons/go";

export function Home() {
  return (
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

          <WListAppointments></WListAppointments>
        </WAppointments>

        <WDoctors>
          <HeaderDoctors>
            <TitleHeaderDoctors>
              <RiStethoscopeLine size={15} />
              Médicos
            </TitleHeaderDoctors>
            <SeeAll>Ver todos</SeeAll>
          </HeaderDoctors>

          <WListDoctors></WListDoctors>
        </WDoctors>
      </ContentDoctorAppointments>
    </Container>
  );
}
