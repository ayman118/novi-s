import { useState, useEffect } from 'react';

const useStrapiData = (endpoint) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const json = await response.json();
        console.log(json)
        setData(json.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [endpoint]);

  return data;
};

export default useStrapiData;