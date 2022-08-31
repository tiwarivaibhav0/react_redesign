import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./App.css";
import { Link } from "react-router-dom";

// const pages = ["Home", "My Blogs", "SignOut"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Nav2 = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <h4 style={{color:"#000"}}>Fruits & Vegetable Store</h4>


          

          <Box sx={{ flexGrow: 1, display: { color:"black", md: "flex",marginLeft:"100px" } }}>
            <h4>Order Timing : <span style={{color:"#556D0B"}}>8:00 am</span> To <span style={{color:"#556D0B"}}>6:00 pm</span>
</h4>
          </Box>
         

          <Box sx={{ flexGrow: 0 ,marginLeft:"30px"}}>
            <Tooltip title="">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,fontSize:"" }}>
               <button style={{marginLeft:"",border:"none",height:"45px",backgroundColor:"#6A8A0A",color:"#fff"}}  className="animate__animated animate__lightSpeedInRight" >My Offers</button>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav2;
