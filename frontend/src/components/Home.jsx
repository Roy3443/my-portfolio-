import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Roy Joshua Lasrado
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Aspiring software developer
          </p>
          <div>
            <Link
              to="resume"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-700 cursor-pointer"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;