"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  styled,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#fff",
  color: "#000",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
});

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <AddIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center" }}>
          Dashboard
        </Typography>
        <Avatar src="/static/images/avatar/1.jpg" />
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
