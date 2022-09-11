import React from "react";

// css style
import style_ from "./Posts.module.css";

//fontawesome imports
import { faEllipsis, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Posts() {
  return (
    <div className={style_.main}>
      <div className={style_.top}>
        <a href="/BigView">
          <div className={style_.story_circle}>
            <img
              src="https://randomuser.me/api/portraits/women/11.jpg"
              alt=""
            ></img>
          </div>
        </a>
        <div>user_name</div>
        <span className={style_.threeDots}>
          <FontAwesomeIcon icon={faEllipsis} />
        </span>
      </div>
      <div className={style_.postImg}>
        <img
          src="https://randomuser.me/api/portraits/women/11.jpg"
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
}

export default Posts;
