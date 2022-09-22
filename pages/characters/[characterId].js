/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 20/09/2022 - 00:53:02
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 20/09/2022
 * - Author          : Michael
 * - Modification    :
 **/
import Image from "next/image";
import React from "react";
import axios from "axios";

export default function Charcter({ character }) {
  const {
    photoUrl,
    name,
    gender,
    profession,
    predecessor,
    affiliation,
    weapon,
  } = character;
  return character ? (
    <>
      <Image src={photoUrl} width={300} height={300} alt={name} />
      <h1> Name: {name}</h1>
      <p> Gender: {gender} </p>
      <p> Profession: {profession}</p>
      <p> Predecessor : {predecessor}</p>
      <p> Affiliation : {affiliation} </p>
      <p> Weapon : {weapon}</p>
    </>
  ) : (
    <p> Loading Info...</p>
  );
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `https://last-airbender-api.herokuapp.com/characters/?name=${params.characterId.replace(
      /\-/g,
      "+"
    )}`
  );
  const character = await res.data;

  return {
    props: {
      character: character,
    },
  };
}

// the dynamic routing syntax
// getStaticPaths requires using getStaticProps

export async function getStaticPaths() {
  const res = await axios.get(
    `https://last-airbender-api.herokuapp.com//api/v1/characters?perPage=100`
  );
  const characters = await res.data;

  return {
    paths: characters.map((character) => {
      const characterId = character.name.toLowerCase().replace(/ /g, "-");

      return {
        params: characterId,
      };
    }),
    fallback: false,
  };
}
