import "./ModalAddClient.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import Switch from "@mui/material/Switch";

import TextField from "@mui/material/TextField";

import { useState } from "react";
import { width } from "@mui/system";

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

export default function ModalAddClient(isAddModalVisible) {
  console.log("isAddModalVisible: ", isAddModalVisible);

  React.useEffect(() => {
    setOpen(isAddModalVisible.isVisible);
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    isAddModalVisible = false;
  };

  return (
    <div>
      <Modal
        onBackdropClick={handleClose}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <span className="modal-title">Adicionar cliente</span>
          </div>
          <div style={{ display: "flex" }}>
            <div className="input-div">
              <TextField
                style={{ width: 100 + "%" }}
                id="outlined-basic"
                label="Nome"
                variant="outlined"
              />
            </div>
            <div className="input-div">
              <TextField
                style={{ width: 100 + "%" }}
                id="outlined-basic"
                label="Morada"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ paddingTop: 31 + "px" }}>
            <span>Ativo</span>
            <Switch label="Ativo" defaultChecked />
          </div>
          <div style={{ paddingTop: 31 + "px" }}>
            <Button style={{ float: "right" }} variant="contained">
              Adicionar cliente
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
