import React, { useState, useEffect } from "react";
import "./index.css";
import Modal from "../../components/modal";

const fetchPokemonData = async (len) => {
  const promiseArr = [];
  for (let i = len; i < len + 20; i++) {
    promiseArr.push(
      (await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)).json()
    );
  }
  const resolvedData = await Promise.all(promiseArr);
  console.log(resolvedData, "res");
  return resolvedData;
  // .map((item) => {
  //   return {
  //     renderSimple: {
  //       name: item.name,
  //       sprite: item.sprites.front_default,
  //     },
  //     details: item,
  //   };
  // });
};

function PokemonLibrary() {
  const [data, setData] = useState([]);
  const [detailPokemon, setDetaikPokemon] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setMessage("Loading...");
      const resp = await fetchPokemonData(1);
      setData(resp);
      setLoading(false);
    };
    fetchData();

    // const fethPokemonDetail = async (id) => {
    //   const detailsPokemon = [];
    //   const res = await fethPokemonDetail(id);
    // };
  }, [data]);

  // const getDetailPokemon = (id) => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  //     .then((response) => response.json())
  //     .then((res) => setDetaikPokemon(res));
  // };

  window.onscroll = () => {
    if (data.length > 70) {
      setMessage("Reached end of the list!!");
      return;
    }
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setMessage("Loading...");
      setLoading(true);
      fetchPokemonData(data.length).then((newPokemons) => {
        setData([...data, ...newPokemons]);
        setLoading(false);
      });
    }
  };

  // console.log(
  //   data.find((x) => x.id === 2),
  //   " => data find"
  // );
  // console.log(
  //   data.find((x) => x.id === 2),
  //   " => data find"
  // );
  return (
    <div className="library-wrapper">
      <h1 className="header">Pokemon Library</h1>
      <div id="content">
        {data.map((pokemon, index) => (
          <div
            className="card"
            key={"num" + index}
            style={{ border: "1px solid red" }}
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h1 className="pokemonName"> {pokemon.name} </h1>
          </div>
        ))}
        {isLoading && <h1 className="pokemonName">{message}</h1>}
      </div>
    </div>
  );
}

export default PokemonLibrary;
