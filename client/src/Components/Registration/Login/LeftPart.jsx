import React, { useEffect, useState } from "react";

//used styles
import lpStyle from "./LeftPart.module.css";

//used images
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";

import AppStore from "../images/appStore.png";
import { Callbacks } from "jquery";

function LeftPart() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(currentIndex);

      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className={lpStyle.main}>
      <img src={images[currentIndex]} />
    </div>
  );
}

export default LeftPart;
