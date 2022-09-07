import React from "react";

//css style
import style_ from "./ViewStory.module.css";

// fontawesome imports
import {
  faXmark,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// images
import instagram from "./images/instagram.png";

function ViewStory() {
  const HandleClk = () => {
    window.open("stories", "_self");
  };
  return (
    <div className={style_.main}>
      <div className={style_.instagram}>
        <img src={instagram}></img>
      </div>

      <div className={style_.closeBtn}>
        <button onClick={HandleClk}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      <div className={style_.storiesContainer}>
        {/* --------- story num 1 -------- */}
        <div
          className={style_.sideStory}
          style={{
            backgroundImage: `url(${"https://randomuser.me/api/portraits/women/10.jpg"})`,
            marginRight: "50px",
          }}
        >
          <div>
            <div className={style_.story_circle}>
              <img
                src="https://randomuser.me/api/portraits/women/11.jpg"
                alt=""
              ></img>
            </div>
          </div>
          <div>malak_hameed</div>
          <div>6h</div>
        </div>
        {/* --------- story num 2 -------- */}
        <div
          className={style_.sideStory}
          style={{
            backgroundImage: `url(${"https://randomuser.me/api/portraits/women/12.jpg"})`,
          }}
        >
          <div>
            <div className={style_.story_circle}>
              <img
                src="https://randomuser.me/api/portraits/women/13.jpg"
                alt=""
              ></img>
            </div>
          </div>
          <div>malak_hameed</div>
          <div>6h</div>
        </div>

        <button
          style={{ margin: "0 10px" }}
          className={style_.btn_scroll}
          id="btn-scroll-left"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {/* --------- main story  -------- */}

        <div
          className={style_.mainStory}
          style={{
            backgroundImage: `url(${"https://randomuser.me/api/portraits/women/21.jpg"})`,
          }}
        >
          3
        </div>
        {/* ---------- end main story ------------ */}
        <button
          style={{ margin: "0 10px" }}
          className={style_.btn_scroll}
          id="btn-scroll-right"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        {/* --------- story num 1 -------- */}
        <div
          className={style_.sideStory}
          style={{
            backgroundImage: `url(${"https://randomuser.me/api/portraits/women/14.jpg"})`,
            marginRight: "50px",
          }}
        >
          <div>
            <div className={style_.story_circle}>
              <img
                src="https://randomuser.me/api/portraits/women/15.jpg"
                alt=""
              ></img>
            </div>
          </div>
          <div>malak_hameed</div>
          <div>6h</div>
        </div>
        {/* --------- story num 2 -------- */}
        <div
          className={style_.sideStory}
          style={{
            backgroundImage: `url(${"https://randomuser.me/api/portraits/women/18.jpg"})`,
            marginRight: "50px",
          }}
        >
          <div>
            <div className={style_.story_circle}>
              <img
                src="https://randomuser.me/api/portraits/women/17.jpg"
                alt=""
              ></img>
            </div>
          </div>
          <div>malak_hameed</div>
          <div>6h</div>
        </div>
      </div>
    </div>
  );
}

export default ViewStory;
