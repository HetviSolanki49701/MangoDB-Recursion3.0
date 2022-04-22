import React, { useEffect, useState, Component } from "react";
import Axios from "axios";
import Map from "mapmyindia-react"
import { log } from "@tensorflow/tfjs-core/dist/log";

const Maps = () => {
  // const [mark, setMark] = useState([]);
  var temp = [];
  const [flag, setFlag] = useState(false);
  const [position, setPosition] = useState({
    lat: "",
    long: "",
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setPosition({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  }, [flag]);
  const sendLocation = () => {
    Axios.post("http://localhost:3001/", position)
      .then((res) => {
        console.log(res);
        for (var i = 0; i < res.data.results.length; i++) {
          var y = {
            position: [
              res.data.results[i].geometry.location.lat,
              res.data.results[i].geometry.location.lng,
            ],
            title: res.data.results[i].name,
          };
          // setMark(oldArray => [...oldArray, y])
          temp.push(y);
          setFlag(!flag);
          // console.log(temp);
          // console.log(mark);
        }
      })
      .catch((err) => console.log(err));
    // console.log(temp);
  };
  //   console.log(mark);
    console.log(temp);
  return (
    <div>
      <Map markers={temp} />
      <button onClick={sendLocation}>Get Gym Location</button>
    </div>
  );
};

export default Maps;
