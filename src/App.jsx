import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <>
      <Helmet>
        {/* Page title */}
        <title>TIC-TAC-TOE</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/logo.png" />

        {/* Meta description */}
        <meta name="description" content="Play the classic Tic-Tac-Toe game online!" />

        {/* Open Graph meta tags for social media previews */}
        <meta property="og:title" content="TIC-TAC-TOE" />
        <meta property="og:description" content="Challenge your friends in this classic Tic-Tac-Toe game!" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://your-site-link.com" />
        <meta property="og:type" content="website" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TIC-TAC-TOE" />
        <meta name="twitter:description" content="Play the classic Tic-Tac-Toe game with a modern twist!" />
        <meta name="twitter:image" content="/logo.png" />
      </Helmet>
      <Board />
    </>
  );
}

export default App;
