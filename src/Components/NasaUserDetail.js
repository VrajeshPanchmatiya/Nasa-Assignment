import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import "../Common.scss";
const NasaUserDetail = () => {
  // UseSelector for fetching data
  const info = useSelector((state) => {
    return state.data;
  });
  const errorMsg = useSelector((state) => {
    return state.error;
  });
  // Nasa User Detail
  return (
    <div className="div-screen">
      <Box className="container">
        <h1>Nasa User Detail</h1>
        <Typography>{errorMsg}</Typography>
        <Typography>
          <b>Name: </b>
          {info.name}
        </Typography>
        <Typography>
          <b>Nasa Jpl Url: </b>
          {info.nasa_jpl_url}
        </Typography>
        <Typography>
          <b>Potentially Hazardeous Asteroid</b>
          {info.is_potentially_hazardeous_asteroid ? "true" : "false"}
        </Typography>
      </Box>
    </div>
  );
};
export default NasaUserDetail;
