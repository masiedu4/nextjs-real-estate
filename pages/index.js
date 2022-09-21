/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 19/09/2022 - 13:45:11
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 19/09/2022
 * - Author          : Michael
 * - Modification    :
 **/
import axios from "axios";
import React from "react";
import CharacterCard from "../components/CharacterCard";

// passing character as props after fetching with getStaticProps below
const Home = ({ characters }) => {
  console.log(characters);
  return characters ? (
    <>
      <div className="p-12">
        <div className="grid grid-cols-4 justify-center  space-x-8 space-y-8">
          {characters.map((character, i) => (
            <CharacterCard
              key={i}
              name={character.Name}
              image={character.PicUrl}
            />
          ))}
        </div>
      </div>
    </>
  ) : (
    <p> Loading...</p>
  );
};

export default Home;

// fetching all characters here.
export async function getStaticProps() {
  const res = await axios.get(
    "https://futuramaapi.herokuapp.com/api/v2/characters"
  );
  const characters = await res.data;

  return {
    props: {
      characters,
    },
  };
}
