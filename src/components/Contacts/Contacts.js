import React from "react";
import styled from "styled-components";
import { Flex, FlexItem, Container } from "../../styles";
import location from "../../assets/img/2.png";
import phone from "../../assets/img/8.png";
import sms from "../../assets/img/8.jpg";
import map from "../../assets/img/4.png";

const Contacts = () => {
  return (
    <ContactsWrap>
      <Heading>Контакти</Heading>
      <Container>
        <Flex jscontent="space-around">
          <FlexItem>
            <Flex aligItems="center" pad="20px">
              <FlexItem>
                <img
                  style={{
                    width: "30px",
                    height: "30px"
                  }}
                  src={location}
                />
              </FlexItem>
              <FlexItem>
                <Text>Адреса: Київ, просп.Л.Гузара,1, оф.25</Text>
              </FlexItem>
            </Flex>
            <Flex aligItems="center" pad="20px">
              <FlexItem>
                <img
                  style={{
                    width: "30px",
                    height: "30px"
                  }}
                  src={phone}
                />
              </FlexItem>
              <FlexItem>
                <Text>Телефон: 044 876 25 16</Text>
              </FlexItem>
            </Flex>
            <Flex aligItems="center" pad="20px">
              <FlexItem>
                <img
                  style={{
                    width: "30px",
                    height: "30px"
                  }}
                  src={sms}
                />
              </FlexItem>
              <FlexItem>
                <Text>Email: html_courses@gmail.com</Text>
              </FlexItem>
            </Flex>
          </FlexItem>
          <FlexItem>
            <img
              style={{
                width: "400px",
                height: "300px"
              }}
              src={map}
            />
          </FlexItem>
        </Flex>
      </Container>
    </ContactsWrap>
  );
};

export default Contacts;

const ContactsWrap = styled.div`
  background: #ffffff;
  padding: 20px 0 60px 0;
`;

const Heading = styled.h1`
  font-size: 55px;
  color: #000000;
  text-align: center;
  padding-bottom: 40px;
`;

const Text = styled.p``;
