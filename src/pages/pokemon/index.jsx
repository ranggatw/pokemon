import React, { useState } from "react";
import useFetch from "../../utils/hooks/useFetch";
const GetPokemon = () => {
  const [num, setNum] = useState(Math.floor(Math.random() * 650));
  const [saveToStorage, setSaveToLocal] = useState([]);
  const { data: pokemon, loading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/" + num
  );

  console.log(pokemon);
  const savePokemon = () => {
    saveToStorage.push(pokemon);
    localStorage.setItem("pokemonHave", JSON.stringify(saveToStorage));
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <div className="pokemon-round">Pokemon Random</div>
      </div>
      <div className="pokemon-div">
        {loading && <p className="pokemon-loading">Loading...</p>}
        {pokemon && (
          <div className="pokemon-image">
            <img
              className="pokemon-img"
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.forms[0].name}
            />
          </div>
        )}
        {pokemon && (
          <div className="pokemon-name">
            {pokemon.forms[0].name.toUpperCase()}
          </div>
        )}
        {pokemon && (
          <div className="pokemon-type">
            Type : {pokemon.types[0].type.name}
          </div>
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => setNum(Math.floor(Math.random() * 650))}
        >
          Generate Random
        </button>
        <button className="save-pokemon" onClick={() => savePokemon()}>
          Save Pokemon
        </button>
      </div>
    </>
  );
};

export default GetPokemon;
