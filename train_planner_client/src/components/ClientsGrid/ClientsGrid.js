import { DataGrid } from "@material-ui/data-grid";

import axios from "axios";
import React from "react";

import { useState, useEffect } from "react";

export default function ClientsGrid() {
  const baseURL = "http://localhost:5000";

  const columns = [
    { field: "name", headerName: "Nome", width: 300, editable: true },
    { field: "adress", headerName: "Morada", width: 300, editable: true },
    { field: "contact", headerName: "Contacto", width: 300, editable: true },
    { field: "active", headerName: "Ativo", width: 150, editable: true },
  ];

  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      // console.log("Response", response.data);
      setClients(response.data);
    });
  });

  return (
    <DataGrid
      style={{ height: 450 + "px", backgroundColor: "#E0E0E0" }}
      rows={clients}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
  );
}
