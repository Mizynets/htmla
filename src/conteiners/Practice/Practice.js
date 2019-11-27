import React, { Component } from "react";
import MainQuiz1 from "../../components/MainQuiz/MainQuiz1";
import MainQuiz2 from "../../components/MainQuiz/MainQuiz2";
import MainQuiz3 from "../../components/MainQuiz/MainQuiz3";
import MainQuiz4 from "../../components/MainQuiz/MainQuiz4";
import styled from "styled-components";
import mainBG from "../../assets/img/mainBG.jpg";

import { Select } from "antd";
import { Container, Flex, FlexItem } from "../../styles";
const { Option } = Select;

class Practice extends Component {
  state = {
    test: "1"
  };

  handlerChange = value => {
    this.setState({
      test: value
    });
  };

  render() {
    const { test } = this.state;
    const tests =
      test === "1" ? (
        <MainQuiz1 />
      ) : test === "2" ? (
        <MainQuiz2 />
      ) : test === "3" ? (
        <MainQuiz3 />
      ) : test === "4" ? (
        <MainQuiz4 />
      ) : null;

    return (
      <PracticeWrap>
        <Test>
          <Text>Тести</Text>
        </Test>
        <Container>
          <Flex flxdirect="column" jscontent="center" aligItems="center">
            <FlexItem pad="40px 0">
              <Select defaultValue="1" onChange={this.handlerChange}>
                <Option value="1">Тест. Основи HTML</Option>
                <Option value="2">Тест. Структура HTML</Option>
                <Option value="3">Тест. Форматування тексту</Option>
                <Option value="4">Тест. Посилання</Option>
              </Select>
            </FlexItem>
            <FlexItem>{tests}</FlexItem>
          </Flex>
        </Container>
      </PracticeWrap>
    );
  }
}

export default Practice;

const Test = styled.div`
  background: url(${mainBG});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  border-bottom: 1px solid #ffffff;
  padding: 20px 0;
  text-align: center;
`;

const PracticeWrap = styled.div``;

const Text = styled.h1`
  color: #ffffff;
  font-weight: 400;
  font-size: 40px;
`;
