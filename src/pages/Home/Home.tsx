/* eslint-disable prettier/prettier */
import {
  Container,
  Content,
  ContentFilter,
  STitle,
  STitlePage,
  SFilter,
  ContentAccountants,
  WAccountants,
  TitleAccountants,
  Accountants,
} from "./style";

import { LuCalendarDays } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

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
        <WAccountants>
          <TitleAccountants>
            <LuCalendarDays size={15} />
            Agendamentos
          </TitleAccountants>
          <Accountants>200</Accountants>
        </WAccountants>

        <WAccountants>
          <TitleAccountants>
            <LuCalendarDays size={15} />
            Agendamentos
          </TitleAccountants>
          <Accountants>200</Accountants>
        </WAccountants>
      </ContentAccountants>
    </Container>
  );
}
