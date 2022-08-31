import { Button, Card, CardContent, Drawer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Context } from "./App";
import { Dairy, DryFruits, fruits, NonVeg, Vegetables } from "./data";
// import { data } from "./data";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");
export const Products = () => {
  const [cart, setCart, data, setData, cat, setCat, state, setState] =
    React.useContext(Context);
  const [search, setSearch] = useState("");
  const globalData = [
    ...DryFruits,
    ...NonVeg,
    ...fruits,
    ...Vegetables,
    ...Dairy,
  ];
  const clickhandler = (e) => {
    var sort = e.target.value;
    if (sort == 1) {
      data.sort((a, b) => a.price - b.price);
    } else {
      data.sort((a, b) => b.price - a.price);
    }

    setData([...data]);
  };
  // useEffect(()=>{
  //   if(document.getElementById("qty").value==""){
  //     document.getElementById("qty").innerHTML="0";
  //   }
  // },)
  const addCart = (e) => {
    // alert(e.target.id);
    var tempCart = [];
    var index;
    var id = e.target.id;
    var flag = 0;
    for (let i = 0; i < cart.length; i++) {
      if (id == cart[i][0]) {
        tempCart = [...cart];
        index = i;
        flag = 1;
      }
    }
    var dataIndex;
    for (let i = 0; i < globalData.length; i++) {
      if (globalData[i].id == id) {
        dataIndex = i;
        globalData[i].qty = globalData[i].qty + 1;
      }
    }
    var temp = { ...globalData[dataIndex] };
    if (flag == 0) {
      var newArr = [id, temp, 1];
      setCart([...cart, newArr]);
    } else {
      tempCart[index][2] = tempCart[index][2] + 1;
      setCart(tempCart);
    }
  };
  const decCart = (e) => {
    // alert(e.target.id);
    var tempCart = [];
    var index;
    var id = e.target.id;
    for (let i = 0; i < cart.length; i++) {
      if (id == cart[i][0]) {
        tempCart = [...cart];
        index = i;
      }
    }
    var quantity = tempCart[index][2] - 1;
    if (quantity == 0) {
      if (window.confirm("Do you really want to delete this from cart?")) {
        tempCart = tempCart.filter((exp) => exp[0] != id);
        setCart(tempCart);
        for (let i = 0; i < globalData.length; i++) {
          if (globalData[i].id == id) {
            globalData[i].qty = globalData[i].qty - 1;
          }
        }
      }
    } else {
      tempCart[index][2] = quantity;
      setCart(tempCart);
      for (let i = 0; i < globalData.length; i++) {
        if (globalData[i].id == id) {
          // dataIndex = i;
          globalData[i].qty = globalData[i].qty - 1;
        }
      }
    }
  };
  const deleteIcon = (e) => {
    var deleteId = e.target.id;
    if (window.confirm("Do you really want to delete this from cart?")) {
      var tempCart = [...cart];

      tempCart = tempCart.filter((exp) => exp[0] != deleteId);
      setCart(tempCart);
      for (let i = 0; i < globalData.length; i++) {
        if (globalData[i].id == deleteId) {
          globalData[i].qty = 0;
        }
      }
    }
  };
  const delCart = (e) => {
    if (window.confirm("Do you really want to delete all Items?")) {
      setCart([]);
      for (let i = 0; i < globalData.length; i++) {
          
          globalData[i].qty = 0;
        
      }
    }
  };
  var flag = 0;
  var temp;
  const [details, setDetails] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [detailsArray, setDetailsArray] = React.useState([]);
  const navigate = useNavigate();
  function openModal(e) {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setDetails(false);
    setIsOpen(false);
  }
  function clickHandler(e) {
    var id = e.target.id;

    var temp = [];
    for (let i = 0; i < globalData.length; i++) {
      if (globalData[i].id == id) {
        temp = globalData[i];
      }
    }
    setDetailsArray(temp);
    setIsOpen(true);
    setDetails(true);
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
      {" "}
      <select onChange={clickhandler}>
        <option selected disabled>
          Sort by price
        </option>
        <option value="1">Low to High</option>
        <option value="0">High to Low</option>
      </select>
      <input
        placeholder="Search here..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {search == "" ? (
        <>
          <div className="list" id="products">
            {data.map((el) => (
              <>
                <Card
                  sx={{
                    backgroundColor: "#fff",
                    width: "250px",
                    minHeight: "160px",
                    // justifyContent: "space-between",
                    marginTop: "20px",
                    // borderRadius: "20px",
                    // boxShadow: "0px 0px 10px 0px  black",
                    textAlign: "center",
                  }}
                >
                  <Box sx={{ border: "" }}>
                    {" "}
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <div className="container">
                        <span
                          style={{
                            position: "absolute",
                            color: "#2FA204",
                            fontSize: "15px",
                          }}
                        >
                          {/* {el.price} % Save */}
                        </span>
                        <img
                          src={el.image}
                          alt=""
                          style={{
                            width: "200px",
                            height: "200px",
                            cursor: "pointer",
                            // objectFit: "cover",
                          }}
                          className="cardImage"
                          id={el.id}
                          onClick={clickHandler}
                        />
                        <div class="middle">
                          <div
                            class="text"
                            id={el.id}
                            //   onClick={clickHandler}
                          ></div>
                        </div>
                      </div>

                      <Typography
                        component="div"
                        variant="h5"
                        sx={{
                          fontFamily: "'Amaranth', cursive;",
                          fontWeight: "300",
                          height: "30px",
                          // marginBottom: "30px",
                        }}
                      >
                        {el.name}{" "}
                        <span style={{ color: "crimson", margin: "" }}>
                          ({el.quantity})
                        </span>
                      </Typography>
                      <p> </p>

                      {el.price == "" ? (
                        <></>
                      ) : (
                        <>
                          <Typography color="" component="div" variant="h5">
                            <span
                              style={{ fontFamily: "'Amaranth', cursive;" }}
                            >
                              {" "}
                              ₹{el.price}
                            </span>
                            <br />
                            <br />
                          </Typography>
                          <span
                            style={{
                              fontSize: "15px",
                              marginLeft: "-5%",
                              fontFamily: "'Amaranth', cursive;",
                            }}
                          >
                            <button
                              style={{ marginRight: "3%", border: "none" }}
                              className="btn btn1"
                              onClick={decCart}
                              id={el.id}
                            >
                              -
                            </button>
                            <span
                              style={{ marginRight: "3%", fontSize: "22px" }}
                              id="qty"
                            >
                              {el.qty}
                            </span>

                            <button
                              style={{ border: "none" }}
                              className="btn btn2"
                              onClick={addCart}
                              id={el.id}
                            >
                              +
                            </button>
                          </span>
                          <button
                            style={{
                              my: 1,
                              // color: "#E53935",
                              // border: "2px solid #E53935",
                              // fontFamily: "'Anton', sans-serif",
                              width: "40%",
                              fontSize: "12px",
                              marginLeft: "17%",
                            }}
                            className="btn btn2"
                            onClick={addCart}
                            id={el.id}
                          >
                            Add To Cart
                          </button>
                        </>
                      )}
                    </CardContent>
                  </Box>
                </Card>
              </>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="list" id="products">
            {data.map((el) => (
              <>
                {el.name.toLowerCase().includes(search.toLowerCase()) ? (
                  <>
                    <span style={{ display: "none" }}>{(flag = 1)}</span>
                    <Card
                      sx={{
                        backgroundColor: "#fff",
                        width: "250px",
                        minHeight: "160px",
                        // justifyContent: "space-between",
                        marginTop: "20px",
                        // borderRadius: "20px",
                        // boxShadow: "0px 0px 10px 0px  black",
                        textAlign: "center",
                      }}
                    >
                      <Box sx={{ border: "" }}>
                        {" "}
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <div className="container">
                            <span
                              style={{
                                position: "absolute",
                                color: "#2FA204",
                                fontSize: "15px",
                              }}
                            >
                              {/* {el.price} % Save */}
                            </span>
                            <img
                              src={el.image}
                              alt=""
                              style={{
                                width: "200px",
                                height: "200px",
                                cursor: "pointer",
                                // objectFit: "cover",
                              }}
                              className="cardImage"
                              id={el.id}
                              onClick={clickHandler}
                            />
                            <div class="middle">
                              <div
                                class="text"
                                id={el.id}
                                //   onClick={clickHandler}
                              ></div>
                            </div>
                          </div>

                          <Typography
                            component="div"
                            variant="h5"
                            sx={{
                              fontFamily: "'Amaranth', cursive;",
                              fontWeight: "300",
                              height: "30px",
                              // marginBottom: "30px",
                            }}
                          >
                            {el.name}{" "}
                            <span style={{ color: "crimson", margin: "" }}>
                              ({el.quantity})
                            </span>
                          </Typography>
                          <p> </p>

                          {el.price == "" ? (
                            <></>
                          ) : (
                            <>
                              <Typography color="" component="div" variant="h5">
                                <span
                                  style={{ fontFamily: "'Amaranth', cursive;" }}
                                >
                                  {" "}
                                  ₹{el.price}
                                </span>
                                <br />
                                <br />
                              </Typography>
                              <span
                            style={{
                              fontSize: "15px",
                              marginLeft: "-5%",
                              fontFamily: "'Amaranth', cursive;",
                            }}
                          >
                            <button
                              style={{ marginRight: "3%", border: "none" }}
                              className="btn btn1"
                              onClick={decCart}
                              id={el.id}
                            >
                              -
                            </button>
                            <span
                              style={{ marginRight: "3%", fontSize: "22px" }}
                              id="qty"
                            >
                              {el.qty}
                            </span>

                            <button
                              style={{ border: "none" }}
                              className="btn btn2"
                              onClick={addCart}
                              id={el.id}
                            >
                              +
                            </button>
                          </span>
                          <button
                            style={{
                              my: 1,
                              // color: "#E53935",
                              // border: "2px solid #E53935",
                              // fontFamily: "'Anton', sans-serif",
                              width: "40%",
                              fontSize: "12px",
                              marginLeft: "17%",
                            }}
                            className="btn btn2"
                            onClick={addCart}
                            id={el.id}
                          >
                            Add To Cart
                          </button>
                            </>
                          )}
                        </CardContent>
                      </Box>
                    </Card>
                  </>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
          {flag == 0 ? (
            <>
              <Card
                sx={{
                  backgroundColor: "#fff",
                  width: "250px",
                  minHeight: "160px",
                  // justifyContent: "space-between",
                  marginTop: "20px",
                  // borderRadius: "20px",
                  // boxShadow: "0px 0px 10px 0px  black",
                  textAlign: "center",
                }}
              >
                <Box sx={{ border: "" }}>
                  {" "}
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <div className="container">
                      <img
                        src="https://dlinkmea.com/images/no-product.png"
                        alt=""
                        style={{
                          width: "200px",
                          height: "200px",
                          cursor: "pointer",
                          // objectFit: "cover",
                        }}
                        className="cardImage"
                        // id={el.id}
                        //   onClick={clickHandler}
                      />
                    </div>

                    <Typography
                      component="div"
                      variant="h5"
                      sx={{
                        fontFamily: "'Amaranth', cursive;",
                        fontWeight: "300",
                        height: "30px",
                        // marginBottom: "30px",
                      }}
                    >
                      No such product in this Category
                      <span style={{ color: "crimson", margin: "" }}>
                        {/* ({el.quantity}) */}
                      </span>
                    </Typography>
                    <p> </p>

                    <Typography color="" component="div" variant="h5">
                      <span style={{ fontFamily: "'Amaranth', cursive;" }}>
                        {" "}
                        {/* ₹{el.price} */}
                      </span>
                      <br />
                      <br />
                    </Typography>

                    <button
                      style={{
                        my: 1,
                        // color: "#E53935",
                        // border: "2px solid #E53935",
                        // fontFamily: "'Anton', sans-serif",
                        width: "40%",
                        fontSize: "12px",
                        // marginLeft: "17%",
                      }}
                      //   onClick={addCart}
                      // id={el.id}
                      onClick={() => setSearch("")}
                      className="btn btn1"
                    >
                      Show All
                    </button>
                  </CardContent>
                </Box>
              </Card>
            </>
          ) : (
            <></>
          )}
        </>
      )}
      {details === false ? null : (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel=""
          className="animate__animated animate__fadeInUp"
        >
          {" "}
          <div
            style={{
              objectFit: "cover",
              textAlign: "center",
            }}
            className="details "
          >
            <div className="modalImg">
              <img
                src={detailsArray.image}
                alt=""
                style={{ borderRadius: "5px" }}
              />
              <p style={{ color: "#f70a0a", marginTop: "5%" }}>
                {detailsArray.name}
                <br />({detailsArray.quantity})
                <br />
                <br />
                <i class="fa-solid fa-star" style={{ color: "crimson" }}></i>
                <i class="fa-solid fa-star" style={{ color: "crimson" }}></i>
                <i class="fa-solid fa-star" style={{ color: "crimson" }}></i>
                <i class="fa-solid fa-star" style={{ color: "crimson" }}></i>
                <i class="fa-solid fa-star" style={{ color: "gray" }}></i>
                <br />
                <button
                  id={detailsArray.id}
                  onClick={addCart}
                  style={{
                    marginTop: "20px",
                    // color: "#E53935",
                    // border: "2px solid #E53935",
                    // fontFamily: "'Anton', sans-serif",
                  }}
                  className="btn btn2"
                >
                  Add to Cart
                </button>
              </p>
            </div>
            <div style={{ backgroundColor: "" }}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
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
      <Drawer
        anchor="right"
        open={state}
        onClose={() => {
          setState(false);
        }}
      >
        {" "}
        <div className="" style={{ position: "relative" }}>
          {cart.length === 0 ? (
            <>
              {" "}
              <h2 style={{ marginRight: "20px", marginTop: "12%" }}>
                Your Cart is empty!
              </h2>
              <button
                onClick={() => {
                  setState(false);
                }}
                style={{
                  position: "absolute",
                  top: "0",
                  fontFamily: "'Permanent Marker', cursive",
                }}
              >
                X
              </button>
            </>
          ) : (
            <div className="cart" style={{ position: "relative" }}>
              <div style={{ marginTop: "12%" }}>
                {" "}
                <button
                  style={{
                  
                    fontFamily: "'Amaranth', cursive",
                    marginLeft: "10px",
                  }}
                  onClick={delCart}
                  className="btn btn1"

                >
                  {" "}
                  Empty cart
                </button>
                <button
                  style={{
                    fontFamily: "'Amaranth', cursive",
                    marginLeft: "10px",
                  }}
                  onClick={() => {
                    navigate("/checkout");setCart([]);
                  }}
                  className="btn btn2"
                >
                  Checkout
                </button>
              </div>
              {cart.map((item, index) => (
                <div key={item[0]} className="cartItem">
                  <h2>{item[1].name}</h2>
                  <p>Price: ₹{item[1].price}</p>
                  <p>
                    <button
                      style={{
                        fontSize: "20px",
                        marginRight: "10px",

                        color: "white",
                      }}
                      onClick={decCart}
                      id={item[0]}
                      className="btn btn1"
                    >
                      -
                    </button>
                    {item[2]}
                    <button
                      style={{
                        fontSize: "20px",
                        marginLeft: "10px",
                      }}
                      onClick={addCart}
                      id={item[0]}
                      className="btn btn2"
                    >
                      +
                    </button>
                  </p>

                  <i
                    class="fa fa-trash"
                    aria-hidden="true"
                    style={{ color: "red" }}
                    onClick={deleteIcon}
                    id={item[0]}
                  ></i>
                </div>
              ))}
              <button
                onClick={() => {
                  setState(false);
                }}
                style={{
                  position: "absolute",
                  top: "-40px",
                  fontFamily: "'Permanent Marker', cursive",
                }}
              >
                X
              </button>
              <button
                variant="contained"
                style={{
                  
                  fontFamily: "'Amaranth', cursive",
                  marginTop: "2%",
                  marginLeft: "2%",
                }}
                onClick={() => {
                  navigate("/checkout");setCart([]);
                }}
                className="btn btn2"

              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
};
