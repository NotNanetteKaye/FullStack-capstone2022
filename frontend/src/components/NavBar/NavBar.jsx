import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
              {user ? (
          <button onClick={logoutUser}>LOGOUT</button>
        ) : (
          <button onClick={() => navigate("/login")}>LOGIN</button>
        )}
      <ul>
        <li>
        </li>
        <li>
          <Link to="/darlingdreams">HOME</Link>
        </li>
        <li>
          <Link to="/food">FOOD</Link>
        </li>
        <li>
          <Link to="/business">BUSINESSES</Link>
        </li>
        <li>
          <Link to="/music">MUSIC</Link>
        </li>
        <li>
          <Link to="/events">EVENTS</Link>
        </li>
        <li>
          <Link to="/favorites">YOUR FAVES!</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
