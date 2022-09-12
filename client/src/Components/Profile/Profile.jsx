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
              <h1 className={CSSModule.name}>abdelrahmanH</h1>
              <button style={{ border: "1px solid #DBDBDB" }}>
                Edit profile
              </button>
              <button>
                <img src={Settings} alt="Settings"></img>
              </button>
            </div>
            <div className={CSSModule.profile_data_follow}>
              <div className={CSSModule.profile_data_follow_info}>
                <h2>0</h2>
                <h3>Posts</h3>
              </div>
              <div className={CSSModule.profile_data_follow_info}>
                <h2>0</h2>
                <h3>
                  <a href="http://localhost:3000/profile">Followers</a>
                </h3>
              </div>
              <div className={CSSModule.profile_data_follow_info}>
                <h2>0</h2>
                <h3>
                  <a href="http://localhost:3000/profile">Following</a>
                </h3>
              </div>
            </div>
            <p className={CSSModule.fullName}>Abdelrahman Hassan</p>
            <p className={CSSModule.description}>
              Muslim <br />
              Developer <br />
              Designer <br />
              Photographer <br />
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="profile_tabs">
          <a>Posts</a>
          <a>Saved</a>
          <a>Tagged</a>
        </div>
        <Footer />
      </div>
    </div>
  );
}
