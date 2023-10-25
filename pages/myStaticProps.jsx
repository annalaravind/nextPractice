import axios from "axios";
import React from "react";

function MyStaticProps(props) {
  let data = props.info;
  return (
    <>
      <div>
        {data.map((value) => {
          return (
            <p style={{ textAlign: "center" }} key={value.id}>
              {value.title}
            </p>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  let response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  let info = await response.data;
  return {
    props: {
      info,
    },
  };
}

export default MyStaticProps;
