import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Alan() {
  const navigate = useNavigate();
  function NavToRoom() {
    navigate(`/room`);
  }
  
  function click() {
    alanBtn({
      key: process.env.REACT_APP_alanapi,
      onCommand: (commandData) => {
        if (commandData.command === "navigateToRoom") {
          NavToRoom();
        }
      },
    });
  }
  return (
    <div>
      <button onClick={click} style={{}}>.</button>
    </div>
  );
}
