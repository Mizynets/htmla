import React from "react";
import styled from "styled-components";
import { Container, Flex, FlexItem } from "../../styles";

const Footer = () => {
  return (
    <FooterWrap>
      <Container>
        <Flex jscontent={"center"} aligItems={"center"}>
          <FooterText> © Kyiv 2019</FooterText>
        </Flex>
      </Container>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.div`
  background: #62025c;
  padding: 20px 0;
`;

const FooterText = styled.h2`
  font-weight: 400;
  color: #ffffff;
`;
