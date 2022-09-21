/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 19/09/2022 - 14:11:47
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 19/09/2022
 * - Author          : Michael
 * - Modification    :
 **/

// code in this file is not used.
// it is for reference as an HOC alternative in fetching data from an API
import axios from "axios";
import React, { useState, useEffect } from "react";

export const fetchCharacters = (Component) => {
  return (props) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
      (async () => {
        await axios
          .get("https://futuramaapi.herokuapp.com/api/v2/characters")
          .then((response) => {
            setCharacters(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })();
    }, []);

    return <Component {...props} characters={characters} />;
  };
};
