import axios from "axios";
import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState();
  console.log(data, 123);

  useEffect(() => {
    const myFunction = async () => {
      let response = await axios.get("http://localhost:3000/api/hello");
      console.log(response.data);
      setData(response.data);
    };
    myFunction();
  }, []);

  return (
    <>
      <div>
        {data?.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <h4>{item.theory}</h4>
            <h6>Author: {item.author}</h6>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default Fetch;
