import Link from "next/link";
import React from "react";

const emailSuccessPage = () => {
  return (
    <div className="page-container h-screen pt-10">
      <h1>Thank you so much for your interest in Sam SantaMaria Art!</h1>
      <p className="pt-4 text-lg">Someone will reach back at to you shortly!</p>
      <div className="m-4">
        <Link href={"/"} className="painting-nav-link ">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default emailSuccessPage;
