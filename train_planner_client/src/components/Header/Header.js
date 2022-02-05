//Header.css

import "./Header.css";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Card } from "@mui/material";
//React Hooks
import { useState, useEffect } from "react";
//icons Font Awesome
import {
  FaBars,
  FaUserAlt,
  FaFileAlt,
  FaCalendarAlt,
  FaDumbbell,
} from "react-icons/fa";
//icon  Ant Design
import {
  AiOutlineUserAdd,
  AiOutlineOrderedList,
  AiFillFileAdd,
} from "react-icons/ai";

//Components
import Drawer from "@mui/material/Drawer";
import ModalAddClient from "../ModalAddClient/ModalAddClient";
import ClientsGrid from "../ClientsGrid/ClientsGrid";

//Lista
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function Header() {
  const anchor = "left";
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  //AddClientVisible
  const [isAddClientModalVisible, setIsAddClientModalVisible] = useState(false);

  //Client List
  const [isClientListVisible, setClientListVisible] = useState(false);

  const handleClientList = () => {
    setDrawerVisible(false);
    setClientListVisible(true);
  };

  useEffect(() => {});

  const showDrawer = () => {
    if (isDrawerVisible === false) {
      setDrawerVisible(true);
    }
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const setAddModalVisible = () => {
    setIsAddClientModalVisible(true);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 10 + "px" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={showDrawer}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FaBars></FaBars>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Train Planner
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor={anchor}
        open={isDrawerVisible}
        onClose={closeDrawer}
      >
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  className="drawer-list-title"
                  primary="Clientes"
                />
              </ListItemButton>
            </ListItem>
            <ListItem onClick={setAddModalVisible} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AiOutlineUserAdd />
                </ListItemIcon>
                <ListItemText primary="Adicionar cliente" />
              </ListItemButton>
            </ListItem>
            <ListItem onClick={handleClientList} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AiOutlineOrderedList />
                </ListItemIcon>
                <ListItemText primary="Listar Clientes" />
              </ListItemButton>
            </ListItem>
            <Divider></Divider>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Planos de treino" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AiFillFileAdd />
                </ListItemIcon>
                <ListItemText primary="Novo plano de treino" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AiOutlineOrderedList />
                </ListItemIcon>
                <ListItemText primary="Listar planos de treino" />
              </ListItemButton>
            </ListItem>
            <Divider></Divider>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Exercicios" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FaDumbbell />
                </ListItemIcon>
                <ListItemText primary="Adicionar exercício" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AiOutlineOrderedList />
                </ListItemIcon>
                <ListItemText primary="Listar exercicios" />
              </ListItemButton>
            </ListItem>
            <Divider></Divider>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Horário" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FaCalendarAlt></FaCalendarAlt>
                </ListItemIcon>
                <ListItemText primary="Consultar horário" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Drawer>
      <ModalAddClient
        isVisible={isAddClientModalVisible}
        close={() => setIsAddClientModalVisible(false)}
      ></ModalAddClient>
      {isClientListVisible && (
        <Card style={{ margin: 20 + "px" }}>
          <ClientsGrid></ClientsGrid>
        </Card>
      )}
    </Box>
  );
}
