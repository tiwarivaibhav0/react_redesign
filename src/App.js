import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import Nav from "./nav";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import Nav2 from "./nav2";
import { Products } from "./products";
import { Dairy, DryFruits, fruits, NonVeg, Vegetables } from "./data";
import { Box, Button, Tooltip } from "@mui/material";
import { TopNav } from "./topNav";
import Checkout from "./Checkout";

export const Context = React.createContext();
function App() {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const [cat, setCat] = useState(Vegetables);
  const [state, setState] = useState(false);

  return (
    <div className="App">
      <Context.Provider
        value={[cart, setCart, data, setData, cat, setCat, state, setState]}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fruits" element={<Home />} />
          <Route path="/dryFruits" element={<Home />} />
          <Route path="/nonVeg" element={<Home />} />
          <Route path="/dairy" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

const Home = (props) => {
  const [cart, setCart, data, setData, cat, setCat, state, setState] =
    React.useContext(Context);
  useEffect(() => {
    if (window.location.pathname == "/") setData(cat);
    else if (window.location.pathname == "/fruits") setData(fruits);
    else if (window.location.pathname == "/dryFruits") setData(DryFruits);
    else if (window.location.pathname == "/nonVeg") setData(NonVeg);
    else if (window.location.pathname == "/dairy") setData(Dairy);
  });
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <TopNav/>
      <Nav />
      <Nav2 />
      <div className="main">
        <div className="categories">
          <ul>
            <li>
              <div style={{ textAlign: "center" }}>
                {" "}
                <h4>LUCKNOW VEG EXPRESS</h4>
                <p>
                  <i class="fa-solid fa-star" style={{ color: "#F38A2E" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "#F38A2E" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "#F38A2E" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "#F38A2E" }}></i>
                  <i class="fa fa-star" style={{ color: "gray" }}></i>{" "}
                </p>
              </div>

              <div style={{ marginTop: "5%" }}>
                {" "}
                <button
                 
                  className="btn btn1"
                  id="review"
                >
                  {" "}
                  Reviews
                </button>
                <button
                  style={{
                    fontFamily: "'', cursive",
                    marginLeft: "5px",
                    marginTop: "10px",
                  }}
                  className="btn btn2"
                >
                  Contact
                </button>
              </div>
            </li>
            {window.location.pathname == "/fruits" ? (
              <>
                {" "}
                <li style={{ backgroundColor: "#6A8A0A" }}>
                  <Link to="/fruits" style={{ color: "#fff" }}>
                    Fresh Fruits
                  </Link>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li style={{ backgroundColor: "" }}>
                  <Link to="/fruits">Fresh Fruits</Link>
                </li>
              </>
            )}
            {window.location.pathname == "/" ? (
              <>
                {" "}
                <li style={{ backgroundColor: "#6A8A0A" }}>
                  <Link to="/" style={{ color: "#fff" }}>
                    Fresh Vegetables
                  </Link>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li style={{ backgroundColor: "" }}>
                  <Link to="/">Fresh Vegetables</Link>
                </li>
              </>
            )}

            {window.location.pathname == "/dryFruits" ? (
              <>
                {" "}
                <li style={{ backgroundColor: "#6A8A0A" }}>
                  <Link to="/dryFruits" style={{ color: "#fff" }}>
                    Dry Fruits
                  </Link>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li style={{ backgroundColor: "" }}>
                  <Link to="/dryFruits">Dry Fruits</Link>
                </li>
              </>
            )}

            {window.location.pathname == "/nonVeg" ? (
              <>
                {" "}
                <li style={{ backgroundColor: "#6A8A0A" }}>
                  <Link to="/nonVeg" style={{ color: "#fff" }}>
                    Fresh Non Veg
                  </Link>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li style={{ backgroundColor: "" }}>
                  <Link to="/nonVeg">Fresh Non Veg</Link>
                </li>
              </>
            )}
            {window.location.pathname == "/dairy" ? (
              <>
                {" "}
                <li style={{ backgroundColor: "#6A8A0A" }}>
                  <Link to="/dairy" style={{ color: "#fff" }}>
                    Dairy Products
                  </Link>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li style={{ backgroundColor: "" }}>
                  <Link to="/dairy">Dairy Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="products">
          {window.location.pathname == "/" ? (
            <>
              <img
                src="http://www.way2door.com/images/stores/banner_1574312382banner-lucknow-veg-express-min.png"
                alt=""
                className="displayImg"
              />
            </>
          ) : (
            <></>
          )}

          <Products />
        </div>
      </div>
      <Footer />
    </>
  );
};

const Footer = (props) => {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row " id="Cards">
            <div id="Card">
              <div class="t">
                <div class="top_footer_box_img">
                </div>
                <div class="top_footer_box_secondary">
                  <h3>Home delivery and Pick up from Store</h3>
                  <p>
                    Get Free Home Delivery for fruits and vegetables on min
                    order price 200 rs and For Grocery on 500 rs only.
                  </p>
                </div>
              </div>
            </div>
            <div id="Card">
              <div class="">
                <div class="top_footer_box_img">
                </div>
                {/* <br/> */}
                <div class="top_footer_box_secondary">
                  <h3>Express Delivery in 1 Hour</h3>
                  <p>
                    Cheaper prices than your local supermarket, great cashback
                    offers to top it off.
                  </p>
                </div>
              </div>
            </div>
            <div id="Card">
              <div class="">
                <div class="top_footer_box_img">
                </div>
                <div class="top_footer_box_secondary">
                  <h3>Cash On Delivery Service</h3>
                  <p>
                    We provides cash on delivery service to our customer for
                    their more satisfaction on our products quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row footer_border " style={{textAlign:"justify"}}>
            <div class="col-md-2">
              <div class="footer_box">
                <h3>Pages</h3>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Offers</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>

                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">
                      Create Own Store
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Terms & Condition
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-7">
              <div class="footer_box">
                <h3>About Us</h3>
                <p>
                  Way2door is a Online Vending System of W2D Online Services
                  Pvt. Ltd founded in November 2017. It gives the online
                  platform to the vendors who want to sell their products &
                  services to the customers directly. Our aim is to provide best
                  quality and fresh products to our customers on competitive
                  prices from their local vendors online with home delivery
                  facility on the convenient schedules of customers and vendors.
                </p>
                <p>
                  Customers can find Restaurants, Grocery Stores, Juice Stores,
                  Fruits and Vegetable Stores, Brand Stores, Sweet Stores, Fast
                  Food Stores, Bakery Stores and many more based on their
                  location. Customers can search their local stores or favorite
                  stores who are able to do home delivery to their location and
                  place their order with the option of Cash on Delivery or
                  Online Delivery facility.
                </p>{" "}
                <p>
                  Way2door allows you to live your life free from shopping rush,
                  traffic jams, carry bags, parking bill, stuck in crowd. So
                  that you can enjoy your time uninterrupted and tension free
                  because shopping from your favorite stores is now easy with
                  Way2door.
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="footer_box">
                <h3>Follow Us</h3>
                <a href="#" target="_blank">
                  Facebook
                </a>{" "}
                /
                <a href="#" target="_blank">
                  twitter
                </a>{" "}
                /
                <a href="#" target="_blank">
                  Google Plus
                </a>{" "}
                /
                <a href="#" target="_blank">
                  Instagram
                </a>
                <h3>Contact Us</h3>
                <p>
                  Address : Vivek Khand Gomti Nagar Lucknow, Lucknow UP 226010
                  INDIA{" "}
                </p>
                <p>Email : support@way2door.com </p>
                <p>Contact No : 7318494999 , 9569967448 </p>
                <div
                  class="fb-share-button"
                  data-href="#"
                  data-layout="button"
                  data-size="large"
                  data-mobile-iframe="false"
                >
                  <a
                    class="fb-xfbml-parse-ignore"
                    target="_blank"
                    href="#"
                  >
                    Share
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container copyright">
          <p>Copyright © 2022 W2D Online Services Pvt Ltd.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
