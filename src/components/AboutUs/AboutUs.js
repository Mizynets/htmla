import React from "react";
import styled from "styled-components";
import bg2 from "../../assets/img/bg2.jpg";
import { Container, Flex, FlexItem } from "../../styles";

const AboutUs = () => {
  return (
    <AboutUsWrap>
      <Container>
        <Div pad="40px">
          <Heading>Про нас</Heading>
        </Div>
        <MainInfo>
          <Text>Наша мета - зробити з будь-якого новачка</Text>
          <Text>повноцінного і затребуваного фахівця,</Text>
          <Text>готового працювати в веб-індустрії.</Text>
        </MainInfo>
        <Div borderBott="1px solid #FFFFFF">
          <Flex jscontent="space-between" aligItems="center" pad="20px">
            <FlexItem wid="49%">
              <Text2>
                Ми вважаємо верстку дуже корисним навиком для будь-якої
                IT-спеціальності. Тому намагаємося робити наші курси максимально
                цікавими, що затягують, інтерактивними, незвичайними, десь
                схожими на гру.
              </Text2>
            </FlexItem>
            <FlexItem wid="49%">
              <Text2>
                Ми підготували 10 онлайн-курсів, які зачіпають різні аспекти
                роботи верстальника. Цього достатньо, щоб впритул познайомитися
                з версткою.Ці унікальні освітні програми дозволяють підготувати
                фахівців з необхідними для веб-індустрії навичками. І в цьому
                нам допомагають наставники. Зараз з нами працюють більше
                трьохсот наставників.
              </Text2>
            </FlexItem>
          </Flex>
        </Div>

        <Flex jscontent="space-around" aligItems="center">
          <FlexItem wid="22%" textAlign="center">
            <Number>180</Number>
            <Title>викладачів</Title>
          </FlexItem>
          <FlexItem wid="22%" textAlign="center">
            <Number>76</Number>
            <Title>курсів</Title>
          </FlexItem>
          <FlexItem wid="22%" textAlign="center">
            <Number>22000</Number>
            <Title>випускників</Title>
          </FlexItem>
          <FlexItem wid="22%" textAlign="center">
            <Number>35</Number>
            <Title>міст</Title>
          </FlexItem>
        </Flex>
      </Container>
    </AboutUsWrap>
  );
};

export default AboutUs;

const Div = styled.div`
  padding-bottom: ${({ pad }) => pad};
  border-bottom: ${({ borderBott }) => borderBott};
`;

const AboutUsWrap = styled.div`
  background: url(${bg2});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  padding: 40px 0;
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
`;

const Text = styled.p`
  color: #ffffff;
  font-size: 40px;
`;

const Text2 = styled.p`
  color: #b8a4b7;
  font-size: 20px;
`;

const Heading = styled.h2`
  color: #ffffff;
  font-size: 55px;
  border-bottom: 1px solid #ffffff;
  text-align: center;
  padding: 10px 0;
`;

const Number = styled.p`
  color: #af24ad;
  font-size: 70px;
  margin: 0;
`;

const Title = styled.p`
  color: #af24ad;
  font-size: 35px;
`;
