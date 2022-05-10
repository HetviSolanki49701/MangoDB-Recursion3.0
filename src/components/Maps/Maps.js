import React, { useEffect, useState, Component } from "react";
import Axios from "axios";
import Map from "mapmyindia-react"
import { log } from "@tensorflow/tfjs-core/dist/log";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import './Maps.css'

const Maps = () => {
  const [mark, setMark] = useState([false]);
  const [markers, setMarkers] = useState([]);
  var temp = [];
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
  },[mark]);
  const sendLocation = () => {
    console.log(position);
    Axios.post("http://localhost:3001/", position)
      .then((res) => {
        for (var i = 0; i < res.data.results.length; i++) {
          var y = {
            position: [
              res.data.results[i].geometry.location.lat,
              res.data.results[i].geometry.location.lng,
            ],
            title: res.data.results[i].name,
          };
          temp.push(y);
        }
        setMark(!mark)
        setMarkers(temp)
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Header />
      <div className="gymsarea">
      {!mark? 
        <Map markers={markers} /> : <button className="btn-main-rounded align-center" onClick={sendLocation}>Get Gym Location</button>}
      
<<<<<<< HEAD
         
      
=======
        </div>
>>>>>>> 1c1499db8dcd3914c7577b98858dfb22d6f4547a
      <Footer />
    </div>
  );
};

export default Maps;
