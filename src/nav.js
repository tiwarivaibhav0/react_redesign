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
import { Context } from "./App";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");
// const pages = ["Home", "My Blogs", "SignOut"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [cart, setCart, data, setData, cat, setCat, state, setState] =
    React.useContext(Context);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setLogin(true);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [login, setLogin] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [detailsArray, setDetailsArray] = React.useState([]);
  const navigate = useNavigate();
  function openModal(e) {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setLogin(false);
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      position: "absolute",
      top: "58%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#bfd6cd",
      border: "none",
      width: "60%",
      paddingTop: "20px",
      justifyContent: "center",
      // flexDirection: "column",
      color: "#000",
      fontFamily: "'Amaranth', sans-serif",
      overflowY: "scroll",
      height: "70vh",
      fontSize: "18px",
    },
  };

  return (
    <AppBar position="sticky" sx={{ background: "#fff", top: "0" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="http://www.way2door.com/images/way2door-min.png"
            alt=""
            height="90px"
            // width="10%"
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
           
              <MenuIcon />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => ( */}
              
              {/* ))} */}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", marginLeft: "130px",color:"crimson" },
            }}
          >
            {" "}
            Today's order will be delivered tomorrow. सबसे सस्ता और सबसे अच्छा.
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="">
              {window.location.pathname != "/checkout"?(<><IconButton
                onClick={() => {setState(true)}}
                sx={{ p: 0, fontSize: "40px" }}
              >
                
                <i class="fa-brands fa-opencart" style={{ color: "#6A8A0A" }}>
                  <span id="cart_no">{cart.length}</span>
                </i>
              </IconButton></>):(<><IconButton style={{ color: "#6A8A0A" }}
                onClick={() => navigate("/")}
                sx={{ p: 0, fontSize: "20px" }}
              >
                
                Home
              </IconButton></>)}
              
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      
    </AppBar>
  );
};
export default Nav;
