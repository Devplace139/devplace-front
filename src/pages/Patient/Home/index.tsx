/* eslint-disable prettier/prettier */
import {
  Container,
  Content,
  ContentAppointments,
  ContentQualities,
  Footer,
  FText,
  ItemQuality,
  QSubTitle,
  QTitle,
  SCircle,
  SLinkBtn,
  SSubTitle,
  STitle,
  WAppointments,
  WFooter,
  WQualities,
} from "./style";

import { MdOutlineCalendarToday } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import Header from "../../../components/Header/HHome";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <ContentAppointments>
          <WAppointments>
            <STitle>Agende sua Consulta Médica Online</STitle>
            <SSubTitle>
              Simples, rápido e sem filas. Cuide da sua saúde com praticidade.
            </SSubTitle>
            <SLinkBtn to={"/form-appointment"}>
              Agenda sua Consulta agora
            </SLinkBtn>
          </WAppointments>
        </ContentAppointments>

        <ContentQualities>
          <WQualities>
            <ItemQuality>
              <SCircle>
                <MdOutlineCalendarToday color="white" size={25} />
              </SCircle>
              <QTitle>Praticidade</QTitle>
              <QSubTitle>
                Agende suas consultas a qualquer momento de qualquer lugar
              </QSubTitle>
            </ItemQuality>
            <ItemQuality>
              <SCircle>
                <FiUsers color="white" size={25} />
              </SCircle>
              <QTitle>Redução de Filas</QTitle>
              <QSubTitle>
                Evite esperas desnecessárias com nosso sistema online.
              </QSubTitle>
            </ItemQuality>
            <ItemQuality>
              <SCircle>
                <FaRegClock color="white" size={25} />
              </SCircle>
              <QTitle>Acompanhamento Fácil</QTitle>
              <QSubTitle>
                Gerencie seus agendamentos e receba lembretes automáticos
              </QSubTitle>
            </ItemQuality>
          </WQualities>
        </ContentQualities>
      </Content>

      <Footer>
        <WFooter>
          <FText>
            &copy; 2025 Prefeitura Municipal de Uruçuí. Todos os direitos
            reservados
          </FText>
        </WFooter>
      </Footer>
    </Container>
  );
}
