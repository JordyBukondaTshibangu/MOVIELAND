// import ErrorImg from "../../../public/images/error.svg";
import { Link } from "react-router-dom";
import ErrorImage from "../../assets/error.svg";

export default function Error() {
  return (
    <div className="bg-cover bg-no-repeat rounded-xl flex flex-col items-center justify-center gap-5 md:gap-10 p-5  pt-48 lg:pt-20">
      <div className="flex  bg-light  dark:bg-darkHeader p-20 rounded-xl">
        <div className="flex-1 flex flex-col gap-8 text-lightFontColor dark:text-fontColor">
          <h1 className="text-4xl font-bold text-lightFontColor dark:text-fontColor">
            Error Page
          </h1>
          <h2 className="text-2xl leading-10">
            An Error occurred in your application{" "}
          </h2>
          <p>Could not find requested resource</p>
          <Link
            to="/"
            className="w-fit bg-primary px-6 py-4 text-white font-medium rounded-xl mt-auto"
          >
            Return Home
          </Link>
        </div>
        <div className="flex-1 hidden lg:flex flex-col gaap-4">
          <img
            src={ErrorImage}
            width={200}
            height={200}
            alt="not-found"
            className="w-full h-full"
          />
          <div className="flex flex-col gap-6 text-lightFontColor dark:text-fontColor mt-8">
            <h4 className="text-2xl leading-7 text-lightFontColor dark:text-fontColor">
              Oops! Sorry, Somethings went wrong...
            </h4>
            <p className="text-lg leading-7 text-grayFirst">
              We apologize for the inconvenience. It looks like there is an
              error on our side
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
