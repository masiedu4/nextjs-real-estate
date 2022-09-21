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

export default function Philip({ character }) {
  return (
    <>
      <Image
        src={character.PicUrl}
        width={300}
        height={300}
        alt={character.Name}
      />
      <h1> {character.Name}</h1>
      <p> Planet: {character.Planet} </p>
      <p> Profession: {character.Profession}</p>
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://futuramaapi.herokuapp.com/api/v2/characters?search=${params.characterId}`
  );
  const characters = await res.data;

  return {
    props: {
      character: characters[0],
    },
  };
}

// the dynamic routing syntax
export async function getStaticPaths() {
  const res = await fetch(
    "https://futuramaapi.herokuapp.com/api/v2/characters"
  );
  const characters = await res.data;

  return {
    paths: characters.map((character) => {
      const characterId = character.Name.toLowerCase().replace(/ /g, "-");
      return {
        params: {
          characterId,
        },
      };
    }),
    fallback: false,
  };
}
