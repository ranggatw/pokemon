import React from "react";

const Profile = () => {
  const profile = JSON.parse(localStorage.getItem("userData"));
  const pokemonList = JSON.parse(localStorage.getItem("pokemonHave"));
  console.log(pokemonList);
  console.log(profile.username);
  return (
    <div>
      <h3>Profile</h3>
      <div>
        <div>username : {profile.username}</div>
        <h5>Pokemon You Have: </h5>
        <div style={{}}>
          {pokemonList.map((pokemon, index) => (
            <div key={index}>
              <div>Pokemon name : {pokemon.name}</div>
              {/* <div>Pokemon name : {pokemon.name}</div>
              <div>Pokemon name : {pokemon.name}</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
