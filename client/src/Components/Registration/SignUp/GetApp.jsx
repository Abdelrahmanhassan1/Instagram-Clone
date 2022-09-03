import React from "react";
import CSSModule from "./SignUp.module.css";
import AppStoreIMG from "../images/appStore.png";
import GooglePlayIMG from "../images/googlePlay.png";

export default function GetApp() {
  return (
    <div className={CSSModule.get_app}>
      <p>Get the app.</p>
      <div>
        <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.signupPage.badge&mt=8&vt=lo">
          <img src={AppStoreIMG} alt="App Store" style={{ margin: "8px" }} />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DsignupPage%26ig_mid%3D57C7308F-280B-4E46-9EB2-EF6412F4FBAE%26utm_content%3Dlo%26utm_medium%3Dbadge">
          <img src={GooglePlayIMG} alt="Google Play" />
        </a>
      </div>
    </div>
  );
}
