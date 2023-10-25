// import axios from "axios";
// import React from "react";

// const MyServerSideProps = (props) => {
//   let data = props.info;
//   return (
//     <>
//       <div>
//         {data.map((value) => {
//           return (
//             <p style={{ textAlign: "center" }} key={value.id}>
//               {value.title}
//             </p>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const productId = params.id;
//   console.log(productId);

//   let response = await axios.get(
//     `https://jsonplaceholder.typicode.com/todos/${productId}`
//   );
//   let info = await response.data;
//   return {
//     props: {
//       info,
//     },
//   };
// }

// export default MyServerSideProps;

// pages/products/[id].js

import React from "react";
import axios from "axios";

function Id(props) {
  let data = props.info;
  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
      }}
    >
      <h2>Product Details</h2>
      <p>userId: {data.userId}</p>
      <p>Product ID: {data.id}</p>
      <p>Title: {data.title}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const productId = params.id;

  try {
    let response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${productId}`
    );
    let info = await response.data;
    return {
      props: {
        info,
      },
    };
  } catch (error) {
    console.log("akshay");
    if (error.response.status === 404) {
      return {
        notFound: true,
      };
    }
  }
}

export default Id;
