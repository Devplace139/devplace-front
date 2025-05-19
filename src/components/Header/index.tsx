/* eslint-disable prettier/prettier */
import {
  Content,
  HeaderContainer,
  NavItem,
  NavList,
  SLogo,
  StyledLink,
} from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <Content>
        <SLogo to={"/"}>PLACEMED</SLogo>
        <nav>
          <NavList>
            <NavItem>
              <StyledLink
                to={"/"}
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
            {/* <NavItem>
            <StyledLink to={'/add-user'}>CADASTRAR USUÁRIO</StyledLink>
          </NavItem> */}
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
            {/* <NavItem>
            <StyledLink to={'/search-users'}>BUSCAR USUÁRIOS</StyledLink>
          </NavItem> */}
          </NavList>
        </nav>
      </Content>
    </HeaderContainer>
  );
}

export default Header;
