import React from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "../pages/Dashboard/Dashboard";

const App = () => {
  return <Dashboard />;
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(React.createElement(App));
}
