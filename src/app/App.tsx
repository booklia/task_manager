import React from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import { GlobalResets } from "../tokens/resets";
import { Provider } from "react-redux";
import store from "../data/store/store";
import "./style.css";
const App = () => {
  return (
    <Provider store={store}>
      <GlobalResets />
      <Dashboard />
    </Provider>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
