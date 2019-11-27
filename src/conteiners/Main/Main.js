import React from "react";
import styled from "styled-components";
import mainBG from "../../assets/img/mainBG.jpg";
import { Container, Flex, FlexItem } from "../../styles";
import AboutUs from "../../components/AboutUs";
import Contacts from "../../components/Contacts";
import FeedBack from "../../components/FeedBack";

const Main = () => {
  return (
    <>
      <MainWrap>
        <Container>
          <ContainerText>
            <Text1>Основи HTML</Text1>
            <Text2>Навчання програмуванню може бути цікавим!</Text2>
            <Text3>
              Навчіться створювати і програмувати сучасні веб-інтерфейси
            </Text3>
            <Text3>почніть кар'єру в ІТ відточуйте свою майстерність.</Text3>
          </ContainerText>
        </Container>
      </MainWrap>
      <AboutUs />
      <Contacts />
      <FeedBack />
    </>
  );
};

export default Main;

const MainWrap = styled.div`
  background: url(${mainBG});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: calc(100vh - 104px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text1 = styled.h1`
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 100px;
`;

const Text2 = styled.h2`
  color: #ffffff;
  font-size: 50px;
  font-weight: 400;
`;

const Text3 = styled.h3`
  color: #ffffff;
  font-size: 30px;
  font-weight: 400;
`;
