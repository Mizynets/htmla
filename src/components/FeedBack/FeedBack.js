import React from "react";
import styled from "styled-components";
import bg2 from "../../assets/img/bg2.jpg";
import { Container, Flex, FlexItem } from "../../styles";
import ava1 from "../../assets/img/9.jpg";
import ava2 from "../../assets/img/10.jpg";
import ava3 from "../../assets/img/11.jpg";
import ava4 from "../../assets/img/12.jpg";
import ava5 from "../../assets/img/14.jpg";

const FeedBack = () => {
  return (
    <FeedBackWrap>
      <Container>
        <Div>
          <Heading>Враження</Heading>
        </Div>
        <Flex flxdirect="column">
          <FeedBackPerson
            images={ava1}
            title={
              "Навчаючись тут ви заощадите величезну кількість часу і навчитеся правильно писати код, працювати з реальними проектами і дуже легко зможете продовжити свою кар'єру фронтенд-розробника самостійно. А також робота з наставником дає великий досвід роботи з кодом, тому що він завжди готовий допомогти в скрутну хвилину. - Богдан Васкан"
            }
          />
          <FeedBackPerson
            images={ava2}
            title={
              "Курси мені порекомендували. Завжди скептично ставився до вебінарів, але навчання в Академії змінило це подання. Вчитися дійсно цікаво, цікаво, і, найголовніше, не нудно. Викладачі просто «вбивають» в голову потрібні і сучасні навички і знання, які стануть в нагоді вам в улюбленій справі. - Павло Циганов"
            }
          />
          <FeedBackPerson
            images={ava3}
            title={
              "Все починається з сущою пустощі. «Я тільки спробую», - кажеш ти. А вранці виявляєш себе за комп'ютером і не можеш відповісти, як довго просидів за ним, проходячи онлайн-курси один за іншим. Саме в цей момент все виходить з-під контролю: базовий інтенсив, просунутий, JavaScript. І ось ти вже міняєш свою роботу, життя і мрієш тепер про одне: стати ніндзя веб-розробки, в арсеналі якого HTML, CSS, SVG і JavaScript. Хлопцям з HTML Academy вдалося неможливе: повести за собою багатьох «нудьгуючих і тих, хто сумнівається» і зайняти їх складним, сучасним і дуже класною справою. - Ірина Смирнова"
            }
          />
          <FeedBackPerson
            images={ava4}
            title={
              "Навчання дозволяє швидко зануритися і якісно прокачати в сфері фронтенда. Круто стати частиною величезного чарівного світу і так скоро вже виявитися одним з кращих серед нових колег. - Артем Руднєв"
            }
          />
          <FeedBackPerson
            images={ava5}
            title={
              "Якби в шкільну програму додали навчання за такими інтерактивним курсам, думаю, діти швидше зрозуміли, що їм подобається, і краще засвоювали. Регулярно заходжу на сайт, щоб відпочити і до того ж згадати, що давно не використовував в верстці. Раджу всім тим, хто хоче тримати себе в тонусі, і тим, хто вчиться. Повірте такий підхід навчання покаже свій результат, а якщо ви додасте ще відео і книги, то піде як по маслу. Поїхали! - Владислав Ридвановський"
            }
          />
        </Flex>
      </Container>
    </FeedBackWrap>
  );
};

export default FeedBack;

const FeedBackPerson = ({ images, title }) => (
  <FlexItem>
    <Flex aligItems="center">
      <Div mar="0 10px 0 0">
        <img
          style={{
            width: "100px",
            height: "100px"
          }}
          src={images}
        />
      </Div>
      <Div>
        <Text>{title}</Text>
      </Div>
    </Flex>
  </FlexItem>
);

const FeedBackWrap = styled.div`
  background: url(${bg2});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  padding: 40px 0;
`;

const Div = styled.div`
  padding-bottom: ${({ pad }) => pad};
  border-bottom: ${({ borderBott }) => borderBott};
  margin: ${({ mar }) => mar};
`;

const Heading = styled.h2`
  color: #ffffff;
  font-size: 55px;
  border-bottom: 1px solid #ffffff;
  text-align: center;
  padding: 10px 0;
`;

const Text = styled.p`
  color: #ffffff;
  font-style: italic;
`;
