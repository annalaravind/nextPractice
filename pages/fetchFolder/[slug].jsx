import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [data, setData] = useState();

  useEffect(() => {
    const myFunction = async () => {
      let response = await axios.get(
        `http://localhost:3000/api/jsonFiles?slug=${slug}`
      );
      setData(response.data);
    };
    if (slug) {
      myFunction();
    }
  }, [slug]);

  return (
    <>
      <style jsx>
        {`
          .content {
            text-align: center;
          }
        `}
      </style>
      <div className="content">
        <h1>{data?.title}</h1>

        {slug === "getting-html-content-from-server-side" ? (
          <p dangerouslySetInnerHTML={{ __html: data?.theory }}></p>
        ) : (
          <p>{data?.theory}</p>
        )}

        <h4>{data?.author}</h4>
      </div>
    </>
  );
};

export default Slug;
