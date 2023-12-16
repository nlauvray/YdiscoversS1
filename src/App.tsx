import React from "react";
import "./App.css";
import { FirstPage } from "./FirstPage";
import { InfosPage } from "./InfosPage";
import { MontresPage } from "./Montres";

function App() {
  return (
    <div className="body">
      <FirstPage />
      <InfosPage />
      <MontresPage />
    </div>
  );
}

export default App;
