import React from "react";

// css style
import style_ from "./Posts.module.css";

//fontawesome imports
import { faEllipsis, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Posts() {
  let postsArr = [
    {
      username: "girl_1",
      userImg: "https://randomuser.me/api/portraits/women/11.jpg",
      postImg: "https://randomuser.me/api/portraits/women/12.jpg",
      liked: true,
    },
    {
      username: "girl_1",
      userImg: "https://randomuser.me/api/portraits/women/13.jpg",
      postImg: "https://randomuser.me/api/portraits/women/14.jpg",
      liked: true,
    },
    {
      username: "girl_1",
      userImg: "https://randomuser.me/api/portraits/women/15.jpg",
      postImg: "https://randomuser.me/api/portraits/women/17.jpg",
      liked: true,
    },
  ];
  return (
    <>
      {postsArr.map((value, index) => {
        return (
          <div className={style_.main}>
            <div className={style_.top}>
              <a href="/BigView">
                <div className={style_.story_circle}>
                  <img src={value.userImg} alt=""></img>
                </div>
              </a>
              <div>user_name</div>
              <span className={style_.threeDots}>
                <FontAwesomeIcon icon={faEllipsis} />
              </span>
            </div>
            <div className={style_.postImg}>
              <img
                src={value.postImg}
                alt=""
                width={"480px"}
                height="580px"
              ></img>
            </div>
            <div>
              <div className={style_.footer1}>
                <div className={style_.reactions}>
                  <span>
                    <FontAwesomeIcon icon={faHeart} />
                  </span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Posts;
