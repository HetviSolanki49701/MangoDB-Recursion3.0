import React from "react";
import {
  VStack,
  HStack,
  Text,
  Image,
  Heading,
  Container,
} from "@chakra-ui/react";
import "./IndividualExe.css";
import { useNavigate } from "react-router-dom";

const IndividExe = (props) => {
  const navigate = useNavigate();

  const handleClick1 = (e) => {
    e.preventDefault();
    console.log("hello");
    navigate("/tadasana");
  };

  return (
    <Container
      w="400px"
      className="cardProperty"
      bgColor="#f5f5f5"
      onClick={handleClick1}
      _hover={{ cursor: "pointer" }}
    >
      <HStack justifyContent="flex-start">
        <Image
          src={props.imgURL}
          alt="jdfln"
          width="150px"
          height="150px"
          px="15px"
        />
        <VStack alignItems="left">
          <Heading style={{ color: "#21325E" }}>{props.exername}</Heading>
          <Text style={{ color: "#3E497A" }}>{props.desc}</Text>
        </VStack>
      </HStack>
    </Container>
  );
};

export default IndividExe;
