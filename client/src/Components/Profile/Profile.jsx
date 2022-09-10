import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
export default function Profile() {
  return (
    <div className="app">
      <Navbar />
      <div className="profile">
        <div className="profile-info"></div>
        <div className="profile-posts"></div>
        <Footer />
      </div>
    </div>
  );
}
