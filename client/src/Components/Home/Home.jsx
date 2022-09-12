import React from "react";

//used styles
import style_ from "./Home.module.css";

//used component
import Navbar from "../Navbar/Navbar";
import StoriesBar from "../Stories/StoriesBar";
import Posts from "../Posts/Posts";

function Home() {
  return (
    <div className={style_.main}>
      <Navbar />
      <StoriesBar />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
}

export default Home;
