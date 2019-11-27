import React from "react";
import styled from "styled-components";
import { Container, Flex, FlexItem } from "../../styles";
import logo from "../../assets/img/logo.png";
import { NavLink, Redirect } from "react-router-dom";
import mainBG from "../../assets/img/mainBG.jpg";

const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <Flex aligItems="center" jscontent="space-between">
          <FlexItem>
            <NavLink
              exact
              className="link"
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              <div>
                <img src={logo} alt="logo" />
              </div>
            </NavLink>
          </FlexItem>
          <FlexItem>
            <Nav>
              <NavItem>
                <NavLink
                  exact
                  className="link"
                  to="/"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                >
                  Про нас
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  className="link"
                  to="/courses"
                >
                  Курси
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  className="link"
                  to="/practice"
                >
                  Практика
                </NavLink>
              </NavItem>
            </Nav>
          </FlexItem>
        </Flex>
      </Container>
    </HeaderWrap>
  );
};

export default Header;

const Nav = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 20px;
  color: #ffffff;
  list-style: none;
  .link {
    text-decoration: none;
    color: #ffffff;
    font-size: 24px;
  }
`;

const HeaderWrap = styled.div`
  background: url(${mainBG});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  border-bottom: 1px solid #ffffff;
  padding: 20px 0;
`;
