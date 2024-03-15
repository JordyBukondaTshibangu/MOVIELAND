import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black py-14 mt-20 ">
      <div className="lg:max-w-8xl 2xl:max-w-9xl mx-auto w-full h-full flex justify-between px-5 min-h-64 text-white">
        <ul className="flex flex-col gap-10">
          <li>
            <Link to="/">About us</Link>
          </li>
          <li>
            <Link to="/">Contact us</Link>
          </li>
          <li>
            <Link to="/">Help Desk</Link>
          </li>
          <li>
            <Link to="/">Terms of Use</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-10">
          <li>
            <Link to="/">About us</Link>
          </li>
          <li>
            <Link to="/">Contact us</Link>
          </li>
          <li>
            <Link to="/">Help Desk</Link>
          </li>
          <li>
            <Link to="/">Terms of Use</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
