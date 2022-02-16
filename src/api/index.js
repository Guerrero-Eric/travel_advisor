import axios from "axios"; /*Library that helps us make our calls*/

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get(URL,  { 
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
    },
    headers: {
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      "x-rapidapi-key": "075f5c9b8fmsh8a63d97256dd737p10b1f2jsn408339fe5924",
    }
  });

    return data;
  } catch (e) {
    console.log(e);
  }
}
