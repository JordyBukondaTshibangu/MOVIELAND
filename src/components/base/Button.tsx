import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  link: string;
  text: string;
  icon: string;
};
const Button: React.FC<ButtonProps> = ({ link, text, icon }) => {
  return (
    <Link
      className="bg-primary hover:bg-secondary transition duration-300 ease-in-out w-fit lg:w-64 px-3 lg:px-5 py-2 lg:py-4 flex items-center justify-center text-lg lg:mt-5 rounded-md "
      to={link}
    >
      <i
        className={`fa fa-${icon} mx-2 transition duration-500 ease-in-out hover:-translate-x-3`}
      ></i>
      {text}
    </Link>
  );
};

export default Button;
