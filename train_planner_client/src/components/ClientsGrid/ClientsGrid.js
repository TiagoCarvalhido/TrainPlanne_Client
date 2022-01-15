import { DataGrid } from "@material-ui/data-grid";

import axios from "axios";
import React from "react";

import { useState, useEffect } from "react";

export default function ClientsGrid() {
  const baseURL = "http://localhost:5000";

  const columns = [
    { field: "name", headerName: "ID" },
    { field: "adress", headerName: "Title" },
  ];

  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log("Response", response.data);
      setClients(response.data);
    });
  });

  return (
    <div style={{ height: 100 + "%" }}>
      <DataGrid
        rows={clients}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
