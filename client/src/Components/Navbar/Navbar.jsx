import React from "react";
import InstagramIMG from "./assets/instagram.png";

import CSSModule from "./navbar.module.css";
import { FiHeart, FiPlusSquare, FiSend } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineCompass } from "react-icons/ai";

function Navbar() {
  return (
    <div className={CSSModule.navbar}>
      <div className={CSSModule.navbar_logo}>
        <img src={InstagramIMG} alt="instgram icon" />
      </div>
      <div className={CSSModule.search_box}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={CSSModule.navbar_icons}>
        <button>
          <GrHomeRounded />
        </button>
        <button>
          <FiSend />
        </button>
        <button>
          <FiPlusSquare />
        </button>
        <button>
          <AiOutlineCompass />
        </button>
        <button>
          <FiHeart />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
