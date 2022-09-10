import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import CSSModule from "./profile.module.css";
import Settings from "./assets/svgs/settings.svg";

export default function Profile() {
  return (
    <div className={CSSModule.app}>
      <Navbar />
      <div className={CSSModule.profile}>
        <div className={CSSModule.profile_info}>
          <div className={CSSModule.profile_image}>
            <img src="https://picsum.photos/200" alt="profile" />
          </div>
          <div className={CSSModule.profile_data}>
            <div className={CSSModule.profile_data_header}>
              <h1 className={CSSModule.name}>John Doe</h1>
              <button style={{ border: "1px solid black" }}>
                Edit profile
              </button>
              <button>
                <img src={Settings} alt="Settings"></img>
              </button>
            </div>
            <div className={CSSModule.profile_data_follow}></div>
            <p className={CSSModule.title}>Web Developer</p>
            <p className={CSSModule.description}>sadddddddddddd</p>
            <div className={CSSModule.btn}>
              <a href="#">Hire me</a>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="profile-posts"></div>
        <Footer />
      </div>
    </div>
  );
}
