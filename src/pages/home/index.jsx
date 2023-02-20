import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const profile = JSON.parse(localStorage.getItem("userData"));
  const pokemonList = JSON.parse(localStorage.getItem("pokemonHave"));
  console.log(pokemonList);
  console.log(profile.username);
  return (
    <div>
      <h3>Home Page</h3>
      <div>
        <div>
          <h5>
            Pokemon You Have: {pokemonList !== null ? pokemonList.length : 0}
          </h5>
          {pokemonList !== null ? (
            <>
              <div>
                {pokemonList.map((pokemon, index) => (
                  <div key={index}>
                    <div>Pokemon name : {pokemon.name}</div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <Link to="/pokemon">"Get Your Pokemon first"</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
