import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Web3ApiProvider, { Web3ApiContext } from "./context/Web3Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Web3ApiProvider>
      <App />
    </Web3ApiProvider>
  </React.StrictMode>
);
