import axios from "axios"; /*Library that helps us make our calls*/

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            process.env.REACT_APP_RAPIDAPI_KEY,
        },
      }
    );

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
        const { data } = await axios.get(
        "https://community-open-weather-map.p.rapidapi.com/weather",
        {
          params: { lat:lat, lon: lng },
          headers: {
            "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
            "x-rapidapi-host": 'community-open-weather-map.p.rapidapi.com',
          },
        }
      );

      return data;
    
  } catch (error) {
    console.log(error);
  }
};
