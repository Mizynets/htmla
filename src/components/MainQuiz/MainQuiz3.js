import "./index.css";

import React from "react";
import { quizData3 } from "./quizData";

class MainQuiz3 extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  handlerZanovo = () => {
    this.setState({
      currentQuestion: 0,
      myAnswer: null,
      options: [],
      score: 0,
      disabled: true,
      isEnd: false
    });
  };

  loadQuizData = () => {
    // console.log(quizData3[0].question)
    this.setState(() => {
      return {
        questions: quizData3[this.state.currentQuestion].question,
        answer: quizData3[this.state.currentQuestion].answer,
        options: quizData3[this.state.currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData3[this.state.currentQuestion].question,
          options: quizData3[this.state.currentQuestion].options,
          answer: quizData3[this.state.currentQuestion].answer
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === quizData3.length - 1) {
      this.setState({
        isEnd: true
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="result">
          <h3>
            Тест пройдено ваш результат {this.state.score} балів з{" "}
            {quizData3.length}{" "}
          </h3>
          <p>
            Правильні відповіді на запитання
            <ul>
              {quizData3.map((item, index) => (
                <li className="ui floating message options" key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </p>
          <button
            onClick={this.handlerZanovo}
            className="ui inverted button btn-quiz"
          >
            Заново
          </button>
        </div>
      );
    } else {
      return (
        <div className="quiz">
          <h1>{this.state.questions} </h1>
          <span>{`Запитання ${currentQuestion + 1} з ${
            quizData3.length
          } `}</span>
          {options.map(option => (
            <p
              key={option.id}
              className={`ui floating message options
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < quizData3.length - 1 && (
            <button
              className="ui inverted button btn-quiz"
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Далі
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === quizData3.length - 1 && (
            <button
              className="ui inverted button btn-quiz"
              onClick={this.finishHandler}
            >
              Finish
            </button>
          )}
        </div>
      );
    }
  }
}

export default MainQuiz3;
