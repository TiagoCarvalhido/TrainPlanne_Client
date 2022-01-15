import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import Card from "@mui/material/Card";

//Components
import Header from "../src/components/Header/Header";
import ClientsGrid from "../src/components/ClientsGrid/ClientsGrid";
import { DataGrid } from "@material-ui/data-grid";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Header></Header>
        </div>
        <div style={{ display: "flex" }}>
          <div className="card">
            <Card style={{ height: 300 + "px" }} variant="outlined">
              <ClientsGrid></ClientsGrid>
            </Card>
          </div>
          <div className="card">
            <Card variant="outlined">
              <ClientsGrid></ClientsGrid>
            </Card>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
