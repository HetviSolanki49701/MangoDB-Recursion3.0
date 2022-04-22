import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";

function Card(props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      boxShadow="2xl"
      maxW={400}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={props.image} alt="" mt="5" />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {props.mealType[0]}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {props.cuisineType[0]}
          </Box>
        </Box>

        <Box
          mt="3"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {props.label}
        </Box>

        <Box>
          {parseInt(props.calories)}
          <Box as="span" color="gray.600" fontSize="sm">
            &nbsp;kcal
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
