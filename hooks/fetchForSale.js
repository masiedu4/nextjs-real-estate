/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 09/08/2022 - 15:23:21
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 09/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import axios from "axios";
import { useEffect, useState } from "react";

export const fetchForSale = () => {
  const [forSaleData, setForSaleData] = useState({});

  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: {
      locationExternalIDs: "5002,6020",
      purpose: "for-sale",
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
          setForSaleData(data.hits);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    fetchData();
  }, []);

  return {
    forSaleData,
  };
};
