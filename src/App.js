import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Main from "./conteiners/Main";
import Courses from "./conteiners/Courses";
import MainQuiz from "./components/MainQuiz";
import Practice from "./conteiners/Practice";
import { Route, Switch, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import { Button } from "antd";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/courses" exact component={Courses} />
        <Route path="/practice" exact component={Practice} />
        <Redirect to="/" />
      </Switch>
      {/* <Main /> */}
      {/* <AboutUs /> */}
      {/* <MainQuiz /> */}
    </Layout>
  );
};

export default App;
