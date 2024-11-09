import React from "react";
import "./Home.css";
import SearchInput from "../SearchInput/SearchInput";
import Features from "../Features/Features";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
const Home = () => {
  return (
    <>
      <div className="bg-black min-h-screen w-full p-2 text-white">
        <div className=" flex justify-between text-white ">
          <h1 className="text-white text-7xl font-sans font-bold m-3">
            Creatify
          </h1>

          <div className="text-xl flex justify-around gap-9 p-2 font-semibold">
            <Link to="/expertform">
              {" "}
              <button>Become an Expert</button>
            </Link>
            <Link to="/login">
              <button>Your Profile</button>
            </Link>
          </div>
        </div>

        <div className="mt-9 p-4  flex ">
          <p className="font-semibold text-5xl text-wrap p-9 m-9">
            Empower Your Creative Journey with Personalized Mentorship
            <Link to="/experts">
              <button className=" flex m-3 p-2 text-xl text-red-200 border-white border-2 rounded-xl">
                Find Experts
              </button>
            </Link>
          </p>

          <img
            className="rounded-full size-33 float-animation"
            src="https://cdn.pixabay.com/photo/2015/03/18/20/35/wordcloud-679948_640.png"
          />
        </div>
        <div className=" text-white mt-9">
          <SearchInput />
        </div>
      </div>

      <div className="text-white bg-black flex justify-between p-9">
        <div>
          <p className="font-semibold text-5xl text-wrap ">
            1:1 Interactions with Experts
          </p>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2020/09/30/09/36/phone-5615121_640.png" />
        </div>
      </div>
      <div>
        <Features />
        <Footer />
      </div>
    </>
  );
};

export default Home;
