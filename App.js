import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement(
  "h1",
  {
    id: "header-one",
  },
  "This is the first header"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
