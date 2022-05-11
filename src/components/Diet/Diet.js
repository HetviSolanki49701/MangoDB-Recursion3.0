import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Input, SimpleGrid } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const Diet = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("paneer");
  const [reload, setReload] = useState(false);
  function handleChange(e) {
    setQuery(e.target.value);
    console.log(query);
  }
  function handleClick(e) {
    setReload(!reload);
  }
  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_dietapiId}&app_key=${process.env.REACT_APP_dietapiKey}&calories=100-300`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.hits);
        console.log(recipes);
      })
      .catch((error) => console.error(error));
  }, [reload]);

  const GetDiet = () => {
    return (
      <SimpleGrid ml="3" mt="10" columns={4} spacing={10}>
        {recipes.map((element, index) => {
          return (
            <Card
              key={index}
              image={element.recipe.images.SMALL.url}
              label={element.recipe.label}
              mealType={element.recipe.mealType}
              cuisineType={element.recipe.cuisineType}
              calories={element.recipe.calories}
            />
          );
        })}
      </SimpleGrid>
    );
  };

  return (
    <>
    <Header />
      <Input
        ml="20"
        mr="5"
        my="5"
        w="400px"
        placeholder="Enter any ingredient"
        onChange={handleChange}
      />
      <button onClick={handleClick}>
        <SearchIcon />
      </button>
      <GetDiet />
      <Footer />
    </>
  );
};

export default Diet;