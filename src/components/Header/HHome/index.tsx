/* eslint-disable prettier/prettier */
import { Container, SLinkMenu, WHeader, WLogo, WMenu } from "./style";

import logo from "../../../assets/logo-urucui.png";

export default function Header() {
  return (
    <Container>
      <WHeader>
        <WLogo>
          <img
            src={logo}
            alt="Logo da Prefeitura"
            title="Prefeitura Municipal de Uruçuí - PI"
          />
        </WLogo>

        <WMenu>
          <SLinkMenu to={""}>Página inicial</SLinkMenu>
          <SLinkMenu to={"/form-appointment"}>Agendar Consulta</SLinkMenu>
          <SLinkMenu to={""}>Login</SLinkMenu>
        </WMenu>
      </WHeader>
    </Container>
  );
}
