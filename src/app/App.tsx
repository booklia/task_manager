import React from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "../pages/Dashboard/Dashboard";
import { GlobalResets } from "../tokens/resets";
import Menu from "../components/blocks/menu/Menu";
import "./style.css";
const App = () => {
  return (
    <>
      <GlobalResets />
      {/*/!*input*!/*/}
      {/*<div className="text-input">*/}
      {/*  <Text tagName="h3" texttype="inputHead">*/}
      {/*    Title*/}
      {/*  </Text>*/}
      {/*  <input className="text-input--element" type="text" placeholder="text" />*/}
      {/*</div>*/}
      {/*/!*description*!/*/}
      {/*<div className="text-input">*/}
      {/*  <Text tagName="h3" texttype="inputHead">*/}
      {/*    textArea*/}
      {/*  </Text>*/}
      {/*  <textarea className="text-input--element" placeholder="text"></textarea>*/}
      {/*</div>*/}
      {/*/!*select*!/*/}
      {/*<div className="text-input">*/}
      {/*  <Text tagName="h3" texttype="inputHead">*/}
      {/*    select*/}
      {/*  </Text>*/}
      {/*  <select className="text-input--element">*/}
      {/*    <option>всем привет</option>*/}
      {/*    <option>здравствуйте</option>*/}
      {/*    <option>До свидания</option>*/}
      {/*  </select>*/}
      {/*</div>*/}
      {/*/!*checkbox*!/*/}
      {/*<div className="text-input">*/}
      {/*  <Text tagName="h3" texttype="inputHead">*/}
      {/*    checkboxes*/}
      {/*  </Text>*/}
      {/*  <div className="checkbox">*/}
      {/*    <label className="text-input--element label" htmlFor="checkbox">*/}
      {/*      <input id="checkbox" className="checkbox" type="checkbox" />*/}
      {/*      checkbox*/}
      {/*    </label>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <Dashboard />
    </>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
