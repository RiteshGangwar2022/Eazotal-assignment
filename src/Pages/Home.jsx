import React from "react";
import { Typography } from "@mui/material";
import "./header.css";

const Home = () => {
  return (
    <div className="home">
      <div className="mid">
        <Typography variant="h2">Dunagiri Retreat</Typography>
        <Typography variant="h6">
          Experience serenity and divinity steps away from
          <p>Mahavatar Babaji's Cave in the Himalayas.</p>
        </Typography>
        <button className="btn">INQUIRE NOW</button>
      </div>
    </div>
  );
};

export default Home;
