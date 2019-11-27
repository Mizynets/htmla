import "./index.css";
import s2 from "../../assets/img/slider/s2.JPG";
import s3 from "../../assets/img/slider/s3.JPG";
import s4 from "../../assets/img/slider/s4.JPG";
import s5 from "../../assets/img/slider/s5.JPG";
import s6 from "../../assets/img/slider/s6.JPG";
import s7 from "../../assets/img/slider/s7.JPG";
import s8 from "../../assets/img/slider/s8.JPG";
import s9 from "../../assets/img/slider/s9.JPG";
import s10 from "../../assets/img/slider/s10.JPG";
import s11 from "../../assets/img/slider/s11.JPG";
import s12 from "../../assets/img/slider/s12.JPG";
import s14 from "../../assets/img/slider/s14.JPG";
import s15 from "../../assets/img/slider/s15.JPG";
import s16 from "../../assets/img/slider/s16.JPG";
import s17 from "../../assets/img/slider/s17.JPG";
import s18 from "../../assets/img/slider/s18.JPG";
import s19 from "../../assets/img/slider/s19.JPG";
import s21 from "../../assets/img/slider/s21.JPG";
import s22 from "../../assets/img/slider/s22.JPG";
import s24 from "../../assets/img/slider/s24.JPG";
import s25 from "../../assets/img/slider/s25.JPG";
import s27 from "../../assets/img/slider/s27.JPG";
import s29 from "../../assets/img/slider/s29.JPG";
import s30 from "../../assets/img/slider/s30.JPG";
import s31 from "../../assets/img/slider/s31.JPG";
import s32 from "../../assets/img/slider/s32.JPG";
import s33 from "../../assets/img/slider/s33.JPG";
import s34 from "../../assets/img/slider/s34.JPG";
import s35 from "../../assets/img/slider/s35.JPG";
import s37 from "../../assets/img/slider/s37.JPG";
import s38 from "../../assets/img/slider/s38.JPG";
import s39 from "../../assets/img/slider/s39.JPG";
import s40 from "../../assets/img/slider/s40.JPG";
import s42 from "../../assets/img/slider/s42.JPG";
import s43 from "../../assets/img/slider/s43.JPG";
import s45 from "../../assets/img/slider/s45.JPG";
import s46 from "../../assets/img/slider/s46.JPG";
import s47 from "../../assets/img/slider/s47.JPG";

import React, { Component } from "react";
import styled from "styled-components";
import { Carousel, Select } from "antd";
import { Container, Flex, FlexItem } from "../../styles";
import lec from "../../lection.zip";

const { Option } = Select;

class Courses extends Component {
  state = {
    lection: "1"
  };

  handlerChange = value => {
    this.setState({
      lection: value
    });
  };

  render() {
    console.log(this.state.lection);

    const { lection } = this.state;

    const slider =
      lection === "1" ? (
        <Carousel className="qwqw">
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s2}
            />
          </div>

          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s3}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s4}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s5}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s6}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s7}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s8}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s9}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s10}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s11}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s12}
            />
          </div>
        </Carousel>
      ) : lection === "2" ? (
        <Carousel>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s14}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s15}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s16}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s17}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s18}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s19}
            />
          </div>
        </Carousel>
      ) : lection === "3" ? (
        <Carousel>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s21}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s22}
            />
          </div>
        </Carousel>
      ) : lection === "4" ? (
        <Carousel>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s24}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s25}
            />
          </div>
        </Carousel>
      ) : lection === "5" ? (
        <Carousel>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s27}
            />
          </div>
        </Carousel>
      ) : lection === "6" ? (
        <Carousel>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s29}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s30}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s31}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s32}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s33}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s34}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s35}
            />
          </div>
        </Carousel>
      ) : lection === "7" ? (
        <Carousel>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s37}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s38}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s39}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s40}
            />
          </div>
        </Carousel>
      ) : lection === "8" ? (
        <Carousel>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s42}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s43}
            />
          </div>
        </Carousel>
      ) : lection === "9" ? (
        <Carousel>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s45}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s46}
            />
          </div>
          <div
            style={{
              width: "580px",
              height: "500px"
            }}
          >
            <img
              style={{
                width: "580px",
                height: "500px"
              }}
              src={s47}
            />
          </div>
        </Carousel>
      ) : null;

    return (
      <CoursesWrap>
        <Container>
          <Flex flxdirect="column" jscontent="center" aligItems="center">
            <FlexItem pad="0 0 20px 0">
              <Select
                defaultValue="1"
                onChange={this.handlerChange}
                style={{
                  width: "300px"
                }}
              >
                <Option value="1">Лекція 1. Початкові відомості</Option>
                <Option value="2">Лекція 2. Теги HTML</Option>
                <Option value="3">Лекція 3. Форматування Тексту</Option>
                <Option value="4">Лекція 4. Форматування Шрифтів</Option>
                <Option value="5">Лекція 5. Форматування Заголовків</Option>
                <Option value="6">Лекція 6. Форматування абзаців</Option>
                <Option value="7">Лекція 7. Форматування списків</Option>
                <Option value="8">Лекція 8. Оформлення фону</Option>
                <Option value="9">Лекція 9. Гіперпосилання</Option>
              </Select>
            </FlexItem>
          </Flex>
          <Flex jscontent="space-around" aligItems="center">
            <div>{slider}</div>
            <div>
              <a
                href={lec}
                download
                style={{
                  border: "1px solid #2F54EB",
                  padding: "10px",
                  borderRadius: "6px"
                }}
              >
                Скачати розширеший матеріал лекцій
              </a>
            </div>
          </Flex>
        </Container>
      </CoursesWrap>
    );
  }
}

export default Courses;

const CoursesWrap = styled.div`
  padding: 20px 40px;
  height: 100vh;
`;

const Lection = styled.h4``;
