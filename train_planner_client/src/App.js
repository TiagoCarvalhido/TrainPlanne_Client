import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import Card from "@mui/material/Card";

//Components
import Header from "../src/components/Header/Header";
import ClientsGrid from "../src/components/ClientsGrid/ClientsGrid";
import CardsClient from "./components/cardsMain/cardsClient";
import CardsExercise from "./components/cardsMain/cardsExercise";
import CardsTrainPlan from "./components/cardsMain/cardsTrainPlan";
import { DataGrid } from "@material-ui/data-grid";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Header></Header>
        </div>

        <div className="container">
          <div className="cards-client">
            <CardsClient></CardsClient>
          </div>
          <div className="cards-train-plan">
            <CardsTrainPlan></CardsTrainPlan>
          </div>
          <div className="cards-exercise">
            <CardsExercise></CardsExercise>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
