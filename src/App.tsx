import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";

function App(): React.ReactElement {
  const [myChoice, setMyChoice] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header score={score} />
          <Routes>
            <Route
              path="/"
              element={<Play setMyChoice={setMyChoice} />}
            />
            <Route
              path="/game"
              element={
                <Game myChoice={myChoice} score={score} setScore={setScore} />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
