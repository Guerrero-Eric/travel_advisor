import React, { useState, useEffect } from "react";

import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [ childClicked, setChildClicked ] = useState(null);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({}); //lat and long boundary data

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
      const filteredPlaces = places.filter((place) => Number(place.rating) > rating);

      setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    if(bounds.sw && bounds.ne) {
    setIsLoading(true);

    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      console.log(data);

      setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
      setFilteredPlaces([]);
      setIsLoading(false);
    });
  }
  }, [type, bounds]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates}/>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          {/*Full width on mobile or 4 spaces on mid to large devices.*/}
          <List    
            isLoading={isLoading}
            childClicked={childClicked} 
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
