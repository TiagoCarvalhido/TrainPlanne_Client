import "./ModalAddClient.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import Switch from "@mui/material/Switch";

import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import { useState, useEffect } from "react";
import { width } from "@mui/system";

import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalAddClient(props) {
  useEffect(() => {
    console.log("props: ", props);
  });

  const [nameInput, setNameInput] = React.useState("");
  const changeValueName = (e) => {
    setNameInput(e.target.value);
  };

  const [adressInput, setAdressInput] = React.useState("");
  const changeValueAdress = (e) => {
    setAdressInput(e.target.value);
  };

  const [contactInput, setContactInput] = React.useState("");
  const changeValueContact = (e) => {
    setContactInput(e.target.value);
  };

  const [activeInput, setActiveInput] = React.useState(false);
  const changeValueActive = (e) => {
    setActiveInput(e.target.value);
  };
  const [emailInput, setEmailInput] = React.useState("");
  const changeValueEmail = (e) => {
    setEmailInput(e.target.value);
  };
  const [objectiveInput, setObjectiveInput] = React.useState("");
  const changeValueObjective = (e) => {
    setObjectiveInput(e.target.value);
  };

  const addNewClient = () => {
    const baseURL = "http://localhost:5000";

    let params = {
      name: nameInput,
      adress: adressInput,
      contact: contactInput,
      active: activeInput,
    };

    axios.post(baseURL, params).then((response) => {
      console.log("Response", response);
    });
  };

  return (
    <div>
      <Modal
        open={props.isVisible}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex" }}>
            <span className="modal-title">Adicionar cliente</span>
            <div>
              <span>Ativo</span>
              <Switch
                onChange={changeValueActive}
                value={activeInput}
                label="Ativo"
                defaultChecked
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="input-div">
              <TextField
                onChange={changeValueName}
                value={nameInput}
                style={{ width: 92 + "%" }}
                id="outlined-basic"
                label="Nome"
                variant="outlined"
              />
            </div>
            <div className="input-div">
              <TextField
                onChange={changeValueAdress}
                value={adressInput}
                style={{ width: 92 + "%" }}
                id="outlined-basic"
                label="Morada"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="input-div">
              <TextField
                onChange={changeValueContact}
                value={contactInput}
                style={{ width: 92 + "%" }}
                id="outlined-basic"
                label="Contacto"
                variant="outlined"
              />
            </div>

            <div className="input-div">
              <TextField
                onChange={changeValueEmail}
                value={emailInput}
                style={{ width: 92 + "%" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </div>
          </div>
          <div>
            <div style={{ paddingTop: 50 + "px" }}>
              <TextareaAutosize
                onChange={changeValueObjective}
                value={objectiveInput}
                aria-label="empty textarea"
                placeholder="Objectivo"
                style={{ width: 760 + "px", height: 100 + "px" }}
              />
            </div>
          </div>

          <div style={{ paddingTop: 31 + "px" }}>
            <Button
              onClick={addNewClient}
              style={{ float: "right" }}
              variant="contained"
            >
              Adicionar cliente
            </Button>
            <Button
              onClick={props.close}
              style={{ float: "right", marginRight: 15 + "px" }}
              variant="contained"
            >
              Cancelar
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
