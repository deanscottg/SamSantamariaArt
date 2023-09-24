import React from "react";
import Image from "next/image";
import sailorMoonCover from "/public/sailorMoonCover.jpg";
const SailorMoonPopUp = () => {
  return (
    <div className="grid place-items-center">
      <Image
        className="justify-items-center"
        alt="Sailor Moon"
        src={sailorMoonCover}
      ></Image>
    </div>
  );
};

export default SailorMoonPopUp;
