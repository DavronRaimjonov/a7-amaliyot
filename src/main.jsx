import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProviderConfg from "./tools/provider/index.jsx";
import Root from "./root/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderConfg>
      <Root />
    </ProviderConfg>
  </React.StrictMode>
);
