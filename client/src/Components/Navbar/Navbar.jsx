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
import Following from "./assets/svgs/following.svg";
import Favourites from "./assets/svgs/favourites.svg";

function Navbar() {
  // set SVGs of the left of NAVbar
  const [SVGIcons, setSVGIcons] = React.useState({
    home: Home,
    direct: Direct,
    explore: Explore,
    notification: Notification,
    add: Add,
  });

  return (
    <div className={CSSModule.navbar}>
      {/* logo and arrow down */}
      <div className={CSSModule.navbar_logo}>
        <img src={InstagramIMG} alt="instgram icon" />

        <div className={CSSModule.navbar_logo_arrow}>
          <button
            style={{ border: "none", background: "none", outline: "none" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={Arrow}
              alt="arrow icon"
              style={{ width: "12px", height: "12px", marginLeft: "8px" }}
            />
          </button>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                className={CSSModule.arrow_icon}
                href="http://localhost:3000/home"
              >
                <img src={Following} alt="following icon" />
                <span>Following</span>
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                className={CSSModule.arrow_icon}
                href="http://localhost:3000/home"
              >
                <img src={Favourites} alt="favourites icon" />
                <span>Favourites</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* --------------------------------------------------- */}

      {/* search bar */}
      <div className={CSSModule.search_box}>
        <input
          type="text"
          placeholder="Search"
          className={CSSModule.searchbox}
        />
      </div>
      {/* --------------------------------------------------- */}

      {/* navbar icons */}
      <div className={CSSModule.navbar_icons}>
        <button>
          <img
            className={CSSModule.navbar_icon_img}
            alt="home icon"
            src={SVGIcons.home}
            onClick={() => {
              // toggle the icon and turn off the other icons
              setSVGIcons({
                home: HomeFilled,
                direct: Direct,
                explore: Explore,
                notification: Notification,
                add: Add,
              });
            }}
          />
        </button>

        <button>
          <img
            className={CSSModule.navbar_icon_img}
            src={SVGIcons.direct}
            alt="direct icon"
            onClick={() => {
              // toggle the icon and turn off the other icons
              setSVGIcons({
                home: Home,
                direct: DirectFilled,
                explore: Explore,
                notification: Notification,
                add: Add,
              });
            }}
          />
        </button>

        <button>
          <img
            className={CSSModule.navbar_icon_img}
            src={SVGIcons.explore}
            alt="explore icon"
            onClick={() => {
              // toggle the icon and turn off the other icons
              setSVGIcons({
                home: Home,
                direct: Direct,
                explore: ExploreFilled,
                notification: Notification,
                add: Add,
              });
            }}
          />
        </button>

        <button>
          <img
            className={CSSModule.navbar_icon_img}
            src={SVGIcons.add}
            alt="add icon"
            onClick={() => {
              // toggle the icon and turn off the other icons
              setSVGIcons({
                home: Home,
                direct: Direct,
                explore: Explore,
                notification: Notification,
                add: AddFilled,
              });
            }}
          />
        </button>

        <button>
          <img
            className={CSSModule.navbar_icon_img}
            src={SVGIcons.notification}
            alt="notification icon"
            onClick={() => {
              // toggle the icon and turn off the other icons
              setSVGIcons({
                home: Home,
                direct: Direct,
                explore: Explore,
                notification: NotificationFilled,
                add: Add,
              });
            }}
          />
        </button>
        <div className={CSSModule.navbar_icon_profile}>
          <img src="https://picsum.photos/200" alt="profile" />
        </div>
      </div>
      {/* --------------------------------------------------- */}
    </div>
  );
}

export default Navbar;
