import { Box, Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userAction } from "../Actions/userAction";
import { allUserAction } from "../Actions/allUserAction";
import "../Common.scss";
const NasaUserForm = () => {
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const [allAsteroid, setAllAsteroid] = useState([]);
  // useEffect for getting all user ID
  useEffect(() => {
    const fetch = async () => {
      const details = await allUserAction();
      return setAllAsteroid(details.near_earth_objects);
    };
    fetch();
  }, []);
  // onChange Value
  const changeId = (e) => {
    setId(e.target.value);
  };
  // onClick for submit
  const handleAsteroidId = () => {
    dispatch(userAction(id));
  };
  // onClick for Random
  const handleRandom = () => {
    const id = allAsteroid.map(({ id }) => id);
    const randm = Math.ceil(Math.abs(Math.random() * id.length));
    dispatch(userAction(id[randm]));
  };
  // Nasa User Form
  return (
    <div className="div-screen">
      <Box className="container">
        <h1>Nasa User Form</h1>
        <TextField
          name={id}
          label="User Id"
          variant="outlined"
          color="primary"
          onChange={changeId}
        />
        <Link to={{ pathname: "NasaUserDetail" }}>
          <Button
            type="submit"
            color="primary"
            variant="outlined"
            onClick={handleAsteroidId}
          >
            Submit
          </Button>
        </Link>
        <Link to={{ pathname: "/NasaUserDetail" }}>
          <Button
            type="submit"
            color="primary"
            variant="outlined"
            onClick={handleRandom}
          >
            Random User
          </Button>
        </Link>
      </Box>
    </div>
  );
};
export default NasaUserForm;
