import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Web3ApiProvider, { Web3ApiContext } from "./context/Web3Context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { Landing, Ledger, PastLedger } from "./containers";
import LoadingContextProvider from "./context/LoadingContext";



const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/past-ledger",
          element: <PastLedger />,
        },
        {
          path: "/create-ledger",
          element: <Ledger />,
        },
        {
          path: "/*",
          element: <Landing />,
        },
      ]
    }
  ]
)




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoadingContextProvider>

      <Web3ApiProvider>
        <RouterProvider router={router} />
      </Web3ApiProvider>
    </LoadingContextProvider>
  </React.StrictMode>
);
