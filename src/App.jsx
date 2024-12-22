import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <>
      <Helmet>
        <title>TIC-TAC-TOE</title>
        <link
          rel="icon"
          type="image/png"
          href="/logo.png"
        />
      </Helmet>
      <Board />
    </>
  );
}

export default App;
