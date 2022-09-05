import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

// fontawesome imports
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import used styles
import style_ from "./StoriesBar.module.css";

//img
import img from "./images/joe.jpg";

function StoriesBar() {
  const [toLeft, setToLeft] = useState(0);
  const [sCount, setSCount] = useState(0);
  const [hScroll, setHSctoll] = useState(0);

  let storys_container_r = useRef(null);
  let horizontal_scroll_r = useRef(null);

  const trans = 320;

  useLayoutEffect(() => {
    setSCount(storys_container_r.current.offsetWidth);
    setHSctoll(horizontal_scroll_r.current.offsetWidth);
  }, []);

  useEffect(() => {
    console.log(toLeft);
    console.log(sCount - hScroll);
  }, [toLeft]);

  const scrollright = () => {
    if (toLeft + trans <= 0) {
      setToLeft(toLeft + trans);
    } else if (toLeft < 0) {
      setToLeft(0);
    }
  };
  const scrollleft = () => {
    let maxPos = sCount - hScroll;
    let var2 = -toLeft;

    if (maxPos >= var2 + trans) {
      setToLeft(toLeft - trans);
    } else if (maxPos - var2 + trans > 0) {
      let temp = maxPos - var2;
      setToLeft(toLeft - temp);
    }
  };
  return (
    <div>
      <div className={style_.container}>
        <div ref={horizontal_scroll_r} className={style_.horizontal_scroll}>
          <button
            className={toLeft < 0 ? style_.btn_scroll : style_.offscreen}
            id="btn-scroll-left"
            onClick={scrollright}
          >
            <span className={toLeft < 0 ? style_.valid : style_.hide}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
          </button>
          <button
            className={
              hScroll - sCount < toLeft ? style_.btn_scroll : style_.offscreen
            }
            id="btn-scroll-right"
            onClick={scrollleft}
          >
            <FontAwesomeIcon
              icon={hScroll - sCount < toLeft ? faChevronRight : style_.hide}
            />
          </button>
          <div
            ref={storys_container_r}
            className={style_.storys_container}
            style={{ left: `${toLeft}px` }}
          >
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img src={img} alt=""></img>
              </div>
            </a>

            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/13.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/15.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/16.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/17.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/18.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/19.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/20.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/21.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/22.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/23.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/24.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/25.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/26.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/27.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/28.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/29.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/30.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/31.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  alt=""
                ></img>
              </div>
            </a>
            <a href="/BigView">
              <div className={style_.story_circle}>
                <img
                  src="https://randomuser.me/api/portraits/women/18.jpg"
                  alt=""
                ></img>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoriesBar;
