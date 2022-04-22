import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function Alan() {
  const navigate = useNavigate();
  function NavToRoom() {
    navigate(`/room`);
  }
  function NavToMap() {
    navigate(`/gyms`);
  }

  function click(e) {
    e.preventDefault();
    navigate("/home");
    console.log("Hello");
    alanBtn({
      key: process.env.REACT_APP_alanapi,
      onCommand: (commandData) => {
        if (commandData.command === "navigateToRoom") {
          NavToRoom();
        }
        if (commandData.command === "navigateToMap") {
          NavToMap();
        }
      },
    });
  }
  return (
    <div>
      <Button onClick={click}>Voice Assistant</Button>
    </div>
  );
}
