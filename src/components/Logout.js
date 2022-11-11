import React from "react";
import "./logout.css";

const Logout = () => {
  return (
    <div>
      <h2>
        Welcome <span className="user-name">Zahra</span>{" "}
        <button className="logout-button">Logout</button>
      </h2>
    </div>
  );
};

export default Logout;
