import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userslice";
import "./logout.css";

const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="logout">
      <h2>
        Welcome <span className="user-name">{user.name}</span>{" "}
      </h2>
      <button className="logout-button" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
