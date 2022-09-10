import React from "react";
import CSSModule from "./Footer.module.css";
export default function Footer() {
  // function to get the current year
  const year = new Date().getFullYear();

  return (
    <footer className={CSSModule.footer}>
      <div className={CSSModule.footer_links}>
        <a href="https://about.facebook.com/meta">Meta</a>
        <a href="https://about.instagram.com/">About</a>
        <a href="https://about.instagram.com/blog/">Blog</a>
        <a href="https://www.instagram.com/about/jobs/">Jobs</a>
        <a href="https://help.instagram.com/">Help</a>
        <a href="https://developers.facebook.com/docs/instagram">API</a>
        <a href="https://www.instagram.com/legal/privacy/">Privacy</a>
        <a href="https://www.instagram.com/legal/terms/">Terms</a>

        <a href="https://www.instagram.com/directory/profiles/">Top Accounts</a>
        <a href="https://www.instagram.com/directory/hashtags/">Hashtags</a>
        <a href="https://www.instagram.com/explore/locations/">Locations</a>
        <a href="https://www.instagram.com/web/lite/">Instagram Lite</a>

        <a href="https://www.facebook.com/help/instagram/261704639352628">
          Contact Uploading & Non-Users
        </a>
      </div>
      <div className={CSSModule.footer_copyright}>
        <p>© {year} Instgram from Meta</p>
      </div>
    </footer>
  );
}
