/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect }  from "react";
import DataHelper from "../DataHelper";

const MapHook = (data, type) => {
    const [mappedData, setMappedData] = useState([]);

    useEffect(() => {
      if (!data || !Array.isArray(data) || !data?.length > 0) {
        console.error('Invalid data provided to **MapHook** Data');
        return;
      }
  
      const mappedResult = data?.map((e)=>DataHelper?.generateContent(e,type));
  
      if (!type) {
        console.error('Invalid mapping function type result at MapHook');
        return;
      }
  
      setMappedData(mappedResult);
    }, [data, type]);
  
    return mappedData;
}

export default MapHook;
