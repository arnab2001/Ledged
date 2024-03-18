import React from "react";
import "./app.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Avatar, Landing, Ledger, PastLedger } from "./containers";
const App = () => {
  return (
    <>
      {/* <Landing/> */}
      {/* <Avatar/> */}
      {/* <Ledger/> */}
      {/* <PastLedger/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Avatar />} />
          <Route path="/past-ledger" element={<PastLedger />} />
          <Route path="/create-ledger" element={<Ledger />} />
          <Route path="/*" element={<Landing />} />
        </Routes>
      </BrowserRouter> */}
      <Landing />
    </>
  );
};

export default App;
