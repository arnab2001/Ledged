import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Web3ApiProvider, { Web3ApiContext } from "./context/Web3Context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { Avatar, Landing, Ledger, PastLedger } from "./containers";



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
          path: "/profile",
          element: <Avatar />,
        },
        {
          path: "/past-ledger",
          element: <PastLedger />,
        },
        {
          path: "/create-ledger",
          element: <Ledger />,
        }
      ]
    }
  ]
)




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Web3ApiProvider>
      <RouterProvider router={router} />
    </Web3ApiProvider>
  </React.StrictMode>
);
