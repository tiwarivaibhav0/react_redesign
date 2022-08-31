import { Button, Tooltip } from "@mui/material";
import React from "react";
import { Context } from "./App";

import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

export const TopNav = () => {
  const [cart, setCart, data, setData, cat, setCat, state, setState] =
    React.useContext(Context);
  const [login, setLogin] = React.useState(false);
  const [logged, setLogged] = React.useState("");

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal(e) {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setLogin(false);
    setIsOpen(false);
  }
  console.log(login);
  const [location, setLocation] = React.useState(false);
  const [modalIsOpen3, setIsOpen3] = React.useState(false);
  function openModal3(e) {
    setIsOpen3(true);
  }

  function afterOpenModal3() {}

  function closeModal3() {
    setLocation(false);
    setIsOpen3(false);
  }

  const [signup, setSignup] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);
  function openModal2(e) {
    setIsOpen(true);
  }

  function afterOpenModal2() {}

  function closeModal2() {
    setSignup(false);
    setIsOpen2(false);
  }
  const customStyles = {
    content: {
      position: "absolute",
      top: "26%",
      left: "20%",
      // right: "auto",
      // bottom: "auto",
      // marginRight: "-50%",
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
      textAlign: "center",
    },
  };

  return (
    <>
      <div className="topNav">
        <h5>
          Download Way2doorApp <a href="#">Click here</a>
        </h5>
        <div style={{ display: "flex" }}>
          <i
            onClick={() => {
              setLocation(true);
              setIsOpen3(true);
            }}
          >
            <Tooltip
              title={
                <span
                  style={{
                    fontSize: "14px",
                    backgroundColor: "#",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  Set Location
                </span>
              }
            >
              <Button
                key={Math.random()}
                // onClick={}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "18px",
                }}
              >
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </Button>
            </Tooltip>
          </i>
          {logged == "" ? (
            <>
              <i
                onClick={() => {
                  setLogin(true);
                  setIsOpen(true);
                }}
              >
                <Tooltip
                  title={
                    <span
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      Login
                    </span>
                  }
                >
                  <Button
                    key={Math.random()}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontSize: "18px",
                    }}
                  >
                    <i class="fa fa-sign-in" aria-hidden="true"></i>
                  </Button>
                </Tooltip>
              </i>
              <i
                onClick={() => {
                  setSignup(true);
                  setIsOpen2(true);
                }}
              >
                <Tooltip
                  title={
                    <span
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      Signup
                    </span>
                  }
                >
                  <Button
                    key={Math.random()}
                    // onClick={}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontSize: "18px",
                    }}
                  >
                    <i class="fa-solid fa-paper-plane"></i>
                  </Button>
                </Tooltip>
              </i>
            </>
          ) : (
            <>
              <i onClick={() => {}}>
                <Tooltip
                  title={
                    <span
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      Logged User
                    </span>
                  }
                >
                  <Button
                    key={Math.random()}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontSize: "18px",
                    }}
                  >
                    User1{" "}
                  </Button>
                </Tooltip>
              </i>
              <i
                onClick={() => {
                  setLogged("");
                }}
              >
                <Tooltip
                  title={
                    <span
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      Logout
                    </span>
                  }
                >
                  <Button
                    key={Math.random()}
                    // onClick={}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontSize: "18px",
                    }}
                  >
                    Logout{" "}
                  </Button>
                </Tooltip>
              </i>
            </>
          )}
        </div>
      </div>
      {login === false ? null : (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel=""
          className="animate__animated animate__fadeInLeft"
        >
          {" "}
          <div class="col-md-12">
            <div class="pop_wrap_global">
              <div class="pop_header">
                <h2>Login to your account</h2>
              </div>

              <div class="">
                <div class="">
                  <input
                    type="text"
                    placeholder="User@gmail.com"
                    style={{ width: "300px" }}
                    readOnly
                  />

                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>

                <div class="">
                  <input
                    type="password"
                    class=""
                    required=""
                    placeholder="********"
                    style={{ width: "300px" }}
                    readOnly
                  />
                </div>

                <div class="form-group">
                  <input
                    type="button"
                    class="login_btn"
                    ng-click="loginWithPassword()"
                    value="Login Now"
                    onClick={() => {
                      alert("Logged in Successfully");
                      setLogged("User1");
                      closeModal();
                    }}
                  />
                </div>
                <div class="form-group">
                  <p>
                    <a href="#">Reset your Password here!</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={closeModal}
            id="close"
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              fontFamily: "'Permanent Marker', cursive",
            }}
          >
            X
          </button>
        </Modal>
      )}
      {signup === false ? null : (
        <Modal
          isOpen={modalIsOpen2}
          onAfterOpen={afterOpenModal2}
          onRequestClose={closeModal2}
          style={customStyles}
          contentLabel=""
          className="animate__animated animate__fadeInRight"
        >
          {" "}
          <div class="col-md-12">
            <div class="pop_wrap_global">
              <div class="pop_header">
                <h2>Create your account</h2>
              </div>

              <div class="">
                <div class="">
                  <input
                    type="text"
                    placeholder="Email or Mobile Number"
                    style={{ width: "300px" }}
                  />

                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>

                <div class="">
                  <input
                    type="password"
                    class=""
                    required=""
                    placeholder="Password"
                    style={{ width: "300px" }}
                  />
                </div>
                <div class="">
                  <input
                    type="password"
                    class=""
                    required=""
                    placeholder="Confirm Password"
                    style={{ width: "300px" }}
                  />
                </div>
                <div class="">
                  <input
                    type="password"
                    class=""
                    required=""
                    placeholder="OTP"
                    style={{ width: "300px" }}
                  />
                </div>

                <div class="form-group">
                  <input
                    type="button"
                    class="login_btn"
                    ng-click="loginWithPassword()"
                    value="Register"
                  />
                </div>
                <div class="form-group">
                  <p>
                    <a href="#">Already a user?</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={closeModal2}
            id="close"
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              fontFamily: "'Permanent Marker', cursive",
            }}
          >
            X
          </button>
        </Modal>
      )}
      {location === false ? null : (
        <Modal
          isOpen={modalIsOpen3}
          onAfterOpen={afterOpenModal3}
          onRequestClose={closeModal3}
          style={customStyles}
          contentLabel=""
          className="animate__animated animate__fadeInDown"
        >
          {" "}
          <div class="col-md-12 ">
            <div class="pop_wrap_global">
              <div class="pop_header">
                <h2>Select Delivery Location</h2>
              </div>

              <div class="">
                <div class="">
                  <input
                    type="text"
                    placeholder="Enter your City"
                    style={{ width: "300px" }}
                  />

                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>

                <div class="">
                  <input
                    type="text"
                    class=""
                    required=""
                    placeholder="Enter Locality"
                    style={{ width: "300px" }}
                  />
                </div>

                <div class="form-group">
                  <input
                    type="button"
                    class="login_btn"
                    ng-click="loginWithPassword()"
                    value="Check Availability"
                  />
                </div>
                <div class="form-group">
                  <p>
                    <a href="#"></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={closeModal3}
            id="close"
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              fontFamily: "'Permanent Marker', cursive",
            }}
          >
            X
          </button>
        </Modal>
      )}
    </>
  );
};
