import React from "react";
import Category from "./Category/Category";

const Main = () => (
  <div>
    <div>
      <h2>HTML/CSS</h2>
      <Category category="HTML/CSS" />
    </div>
    <div>
      <h2>JS</h2>
      <Category category="JS" />
    </div>
    <div>
      <h2>React</h2>
      <Category category="React" />
    </div>
  </div>
);

export default Main;
