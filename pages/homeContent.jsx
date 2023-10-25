import React, { useState } from "react";
import styles from "../styles/innerHome.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

const HomeContent = () => {
  const [data, setData] = useState(Array.from({ length: 20 }));
  const [more, setMore] = useState(true);
  const fetchData = () => {
    if (data.length >= 200) {
      setMore(!more);
    } else {
      setTimeout(() => {
        setData([...data, ...Array.from({ length: 20 })]);
      }, 2000);
    }
  };
  // const handleRefresh = () => {
  //   setTimeout(() => {
  //     setData(Array.from({ length: 20 }));
  //   }, 1000);
  // };

  return (
    <>
      <div className={styles.container}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: 10,
            textDecoration: "underline",
          }}
        >
          React-Infinite-Scrolling
        </h2>
        <div className={styles.scroll}>
          <InfiniteScroll
            dataLength={data.length}
            next={fetchData}
            hasMore={more}
            height={400}
            loader={<h4 className={styles.h4}>Loading...</h4>}
            endMessage={
              <h4 className={styles.h4}>Thanks for your Interest!</h4>
            }
            // refreshFunction={handleRefresh}
            // pullDownToRefresh
            // pullDownToRefreshContent={<h3>Pull down to refresh</h3>}
            // pullDownToRefreshThreshold={50}
            // releaseToRefreshContent={<h3>Release to refresh</h3>}
          >
            {data.map((value, index) => {
              return (
                <div className={styles.text} key={index + 1}>
                  {`Using Infinite Scrolling #${index + 1}`}
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
