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
        <div className="grid grid-cols-5 justify-center p-12">
          {characters.map((character) => (
            <CharacterCard
              key={character._id}
              name={character.name}
              image={character.photoUrl}
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
    `https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=100&page=1`
  );
  const characters = await res.data;

  return {
    props: {
      characters,
    },
  };
}
