import React from "react";
import "./index.css";

const HomePage = () => {
  const profile = JSON.parse(localStorage.getItem("userData"));
  const pokemonList = JSON.parse(localStorage.getItem("pokemonHave"));
  console.log(pokemonList);
  console.log(profile.username);
  return (
    <div>
      <h3>Home Page</h3>
      <div>
        {pokemonList.length !== 0 ? (
          <>
            <h5>Pokemon You Have: </h5>
            <div>
              {pokemonList.map((pokemon, index) => (
                <div key={index}>
                  <div>Pokemon name : {pokemon.name}</div>
                </div>
              ))}
            </div>
          </>
        ) : (
        "Get Your Pokemon first"
        )}
      </div>
    </div>
  );
};

export default HomePage;
