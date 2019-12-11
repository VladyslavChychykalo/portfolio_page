import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Rules from "../components/Rules/Rules";
import { wrapper } from "./App.module.css";

const App = () => (
  <div className={wrapper}>
    <Header></Header>
    <Main></Main>
    <Rules></Rules>
  </div>
);

export default App;
