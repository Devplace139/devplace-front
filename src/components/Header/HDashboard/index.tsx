/* eslint-disable prettier/prettier */
import {
  Content,
  HeaderContainer,
  NavItem,
  NavList,
  SLogo,
  StyledLink,
} from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Content>
        <SLogo to={"/dashboard"}>PLACEMED</SLogo>
        <nav>
          <NavList>
            <NavItem>
              <StyledLink
                to={"/dashboard"}
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "rgb(48, 48, 170)",
                        background: "white ",
                        fontWeight: "bold",
                      }
                    : {}
                }
              >
                HOME
              </StyledLink>
            </NavItem>

            <NavItem>
              <StyledLink
                to={"/users"}
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "rgb(48, 48, 170)",
                        background: "white ",
                        fontWeight: "bold",
                      }
                    : {}
                }
              >
                USUÁRIOS
              </StyledLink>
            </NavItem>

            <NavItem>
              <StyledLink
                to={"/doctors"}
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "rgb(48, 48, 170)",
                        background: "white ",
                        fontWeight: "bold",
                      }
                    : {}
                }
              >
                MÉDICOS
              </StyledLink>
            </NavItem>

            <NavItem>
              <StyledLink
                to={"/ubs"}
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "rgb(48, 48, 170)",
                        background: "white ",
                        fontWeight: "bold",
                      }
                    : {}
                }
              >
                UBS
              </StyledLink>
            </NavItem>

            <NavItem>
              <StyledLink
                to={"/appointments"}
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "rgb(48, 48, 170)",
                        background: "white ",
                        fontWeight: "bold",
                      }
                    : {}
                }
              >
                AGENDAMENTOS
              </StyledLink>
            </NavItem>
          </NavList>
        </nav>
      </Content>
    </HeaderContainer>
  );
}
