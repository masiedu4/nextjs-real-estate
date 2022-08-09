/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 09/08/2022 - 18:00:27
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 09/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import axios from "axios";
import { useState, useEffect } from "react";

export const fetchForRent = () => {
  const [forRentData, setForRentData] = useState({});

  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: {
      locationExternalIDs: "5002,6020",
      purpose: "for-rent",
      hitsPerPage: "6",
      lang: "en",
      sort: "city-level-score",
      rentFrequency: "monthly",
      categoryExternalID: "4",
    },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = () => {
      axios
        .request(options)
        .then(function (response) {
          const data = response.data;
          setForRentData(data.hits);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    fetchData();
  }, []);

  return {
    forRentData,
  };
};
