import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  InputBase,
} from "@material-ui/core";

import useStyles from "./styles.js";

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const places = [{name: 'Place 1'},{name: 'Place 2'}, {name: 'place 3'}]

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        {" "}
        Restaurants, Hotels & Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotel">Hotel</MenuItem>
          <MenuItem value="Attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
