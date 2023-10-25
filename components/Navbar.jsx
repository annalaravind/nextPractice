import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <style jsx>
        {`
          .span {
            background-color: transparent;
            display: block;
            font-size: 15px;
          }
        `}
      </style>
      <div className={styles.container}>
        <ul className={styles.inner_container}>
          <li className={styles.links}>
            <Link className={styles.Link} href={"/"}>
              Home
            </Link>
            <span className="span">Click here to Re-direct!</span>
          </li>
          <li className={styles.links}>
            <Link className={styles.Link} href={"/about"}>
              About
            </Link>
            <span className="span">Click here to Re-direct!</span>
          </li>
          <li className={styles.links}>
            <Link className={styles.Link} href={"/contact"}>
              Contact
            </Link>
            <span className="span">Click here to Re-direct!</span>
          </li>
          <li className={styles.links}>
            <Link className={styles.Link} href={"/createdFile"}>
              CreatedFile
            </Link>
            <span className="span">Click here to Re-direct!</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
