"use client";
import axios from "axios";
import React, { useState } from "react";

const Page = () => {
  const [result, setResult] = useState(null);

  const fetchPokemon = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1; // Generates a random ID between 1 and 898
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="h-screen bg-slate-100">
      <button
        onClick={fetchPokemon}
        className="h-16 w-52 mt-8 ml-[32rem] hover:shadow-lg hover:shadow-blue-500/50 ease-in-out duration-300   text-[2rem]"
      >
         ポケモン 
      </button>
      {result && (
        <div className="mt-8  flex items-center justify-center flex-col -ml-[8rem]">
          <h1 className="text-2xl font-bold capitalize">{result.name}</h1>
          <img
            src={result.sprites.front_default}
            alt={result.name}
            className=" object-cover bg-center h-64 w-64 mt-4"
          />
          <h2 className="text-xl mt-4 ">Abilities:</h2>
          <ul className="list-disc ml-8">
            {result.abilities.map((ability, index) => (
              <li key={index} className="text-lg capitalize ">
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Page;
