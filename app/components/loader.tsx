import React from "react";
import Image from "next/image";
import LoaderSVG from "./svgs/LoaderSVG";

const loader = () => {
  return (
    <div className="flex flex-col h-screen w-full  text-black text-sm ">
      <div>
        <LoaderSVG className="h-[10rem] w-[10rem]" />
      </div>
      <p className="text-center text-lg">Loading Art for you!</p>
    </div>
  );
};

export default loader;
