import React from "react";

// import CSS Styles
import CSSModule from "./navbar.module.css";

// import Images
import InstagramIMG from "./assets/instagram.png";
// import SVG for Navbar Icons
import Home from "./assets/svgs/home.svg";
import HomeFilled from "./assets/svgs/home_filled.svg";
import Direct from "./assets/svgs/direct.svg";
import DirectFilled from "./assets/svgs/direct_filled.svg";
import Explore from "./assets/svgs/explore.svg";
import ExploreFilled from "./assets/svgs/explore_filled.svg";
import Notification from "./assets/svgs/notification.svg";
import NotificationFilled from "./assets/svgs/notification_filled.svg";
import Add from "./assets/svgs/add.svg";
import AddFilled from "./assets/svgs/add_filled.svg";
import Arrow from "./assets/svgs/arrow.svg";

function Navbar() {
  return (
    <div className={CSSModule.navbar}>
      <div className={CSSModule.navbar_logo}>
        <img src={InstagramIMG} alt="instgram icon" />
        <img
          className={CSSModule.navbar_logo_arrow}
          src={Arrow}
          alt="arrow icon"
          style={{ width: "12px", height: "12px", marginLeft: "8px" }}
        />
      </div>
      <div className={CSSModule.search_box}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={CSSModule.navbar_icons}>
        <button>
          <img
            className={CSSModule.navbar_icon_img}
            alt="home icon"
            src={Home}
            onClick={(event) => {
              // toggle the icon and turn off the other icons
              event.target.src = HomeFilled;
              event.target.parentElement.nextElementSibling.children[0].src =
                Direct;
              event.target.parentElement.nextElementSibling.nextElementSibling.children[0].src =
                Explore;
              event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[0].src =
                Add;
              event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].src =
                Notification;
            }}
          />
        </button>
        <button>
          <img
            className={CSSModule.navbar_icon_img}
            src={Direct}
            alt="direct icon"
            onClick={(event) => {
              // toggle the icon and turn off the other icons
              event.target.src = DirectFilled;
              event.target.parentElement.previousElementSibling.children[0].src =
                Home;
              event.target.parentElement.nextElementSibling.children[0].src =
                Explore;
              event.target.parentElement.nextElementSibling.nextElementSibling.children[0].src =
                Add;
              event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[0].src =
                Notification;
            }}
          />
        </button>
        <button>
          <img
            className={CSSModule.navbar_icon_img}
            src={Explore}
            alt="explore icon"
            onClick={(event) => {
              // toggle the icon and turn off the other icons
              event.target.src = ExploreFilled;
              event.target.parentElement.previousElementSibling.previousElementSibling.children[0].src =
                Home;
              event.target.parentElement.previousElementSibling.children[0].src =
                Direct;
              event.target.parentElement.nextElementSibling.children[0].src =
                Add;
              event.target.parentElement.nextElementSibling.nextElementSibling.children[0].src =
                Notification;
            }}
          />
        </button>
        <button>
          <img
            className={CSSModule.navbar_icon_img}
            src={Add}
            alt="add icon"
            onClick={(event) => {
              // toggle the icon and turn off the other icons
              event.target.src = AddFilled;
              event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.children[0].src =
                Home;
              event.target.parentElement.previousElementSibling.previousElementSibling.children[0].src =
                Direct;
              event.target.parentElement.previousElementSibling.children[0].src =
                Explore;
              event.target.parentElement.nextElementSibling.children[0].src =
                Notification;
            }}
          />
        </button>
        <button>
          <img
            className={CSSModule.navbar_icon_img}
            src={Notification}
            alt="notification icon"
            onClick={(event) => {
              // toggle the icon and turn off the other icons
              event.target.src = NotificationFilled;
              event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].src =
                Home;
              event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.children[0].src =
                Direct;
              event.target.parentElement.previousElementSibling.previousElementSibling.children[0].src =
                Explore;
              event.target.parentElement.children[0].src = Add;
            }}
          />
        </button>
        <div className={CSSModule.navbar_icon_profile}>
          <img src="https://picsum.photos/200" alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
