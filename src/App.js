import logo from "./logo.svg";
import "./App.css";
import profile from "./fotolauta.png";
import linkedin from "./linkedin.png";
import github from "./github.png";
import pdf from "./pdf.png";
import cv from "./CV.pdf";
import css from "./icons/css.png";
import html from "./icons/html.png";
import jss from "./icons/jss.png";
import postgress from "./icons/postgress.png";
import reduxx from "./icons/reduxx.png";
import react from "./icons/react.png";
import mongo from "./icons/mongodb.png";
import tailwind from "./icons/tailwind.png";
import node from "./icons/node.png";
import express from "./icons/express.png";
import seq from "./icons/sequelize.png";
import mongoose from "./icons/mongoose.png";
import capturahappy from "./capturahappy.png";
import wwweather from "./wwweather.png";
import bounty from "./bounty.png";
import acon from "./acon.png";

import { Footer, Tooltip } from "flowbite-react";

function App() {
  return (
    <div className="h-screen w-screen bg-cyan-900 flex flex-col items-center ">
      <div className="flex flex-col lg:flex-row h-full items-center lg:justify-center">
        <div className="flex flex-col items-center lg:h-74 w-11/12 lg:w-2/5  opacity-100 mt-1 mr-1 bg-gray-800 rounded-lg shadow-md">
          <div className="flex flex-row items-center justify-between">
            <div className=" w-36 h-36 mt-5 rounded-full border-lg border-yellow-500">
              <img
                className="object-cover  w-36 h-36 shadow-md rounded-full "
                src={profile}
                alt=""
              />
            </div>
            <div className="flex">
              <div className="flex flex-col mx-8 items-center">
                <div className="flex  flex-col justify-start">
                  <h5 className=" font-bold text-xl lg:text-4xl ml-2 tracking-tight text-white  border-b  dark:text-white">
                    Lautaro Martin
                  </h5>
                  <h5 className=" font-semibold text-sm lg:text-xl ml-2 tracking-tight text-white mb-5 dark:text-white">
                    Fullstack Developer
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <h5 className="text-white text-md p-4 ">
            Full-Stack developer with Front-End orientation. I like solving
            challenges and being able to learn from them. I consider myself
            persevering and motivated.
          </h5>
          <div className="flex flex-row">
            <a href="https://www.linkedin.com/in/lautaro-martin-dev/">
              <div className="flex items-center m-1 hover:bg-gray-200 rounded-lg">
                <img src={linkedin} alt="" className="rounded-full w-6 h-6" />
                <h5 class=" font-semibold text-sm lg:text-md ml-2 tracking-tight text-white  hover:text-black">
                  LinkedIn profile
                </h5>
              </div>
            </a>
            <a href="https://github.com/Tablonimus">
              <div className="flex items-center m-1 hover:bg-gray-200 rounded-lg">
                <img src={github} alt="" className="rounded-full w-6 h-6" />
                <h5 class=" font-semibold text-sm lg:text-md ml-2 tracking-tight text-white hover:text-black">
                  My GitHub
                </h5>
              </div>
            </a>
            <a
              href={cv}
              target="_blank"
              rel="cv"
              download="LautaroMartin-CV.pdf"
            >
              <div className="flex items-center m-1 hover:bg-gray-200 rounded-lg">
                <img src={pdf} alt="" className="rounded-full w-6 h-6" />
                <h5 class=" font-semibold text-sm lg:text-md ml-2 tracking-tight text-white  hover:text-black">
                  Download CV
                </h5>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center w-11/12 lg:w-2/5 lg:h-74  opacity-100 mt-1 mr-1  bg-gray-800 rounded-lg shadow-md">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-white pl-5 lg:pl-0 text-2xl m-1">
              Technologies used on my projects:
            </h1>
          </div>
          <div>
            <div className="flex flex-col justify-between items-center">
              <h1 className="text-white">Languages & Runtime Environments:</h1>
              <div className="flex m-1">
                <Tooltip content="JavaScript" placement="bottom">
                  <img src={jss} className="h-10 w-10 m-1" />
                </Tooltip>
                <Tooltip content="HTML 5" placement="bottom">
                  <img src={html} className="h-10 w-10 m-1" />
                </Tooltip>
                <Tooltip content="Node.js" placement="bottom">
                  <img src={node} className="h-10 w-10 m-1" />
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center m-1">
            <h1 className="text-white">Back-End:</h1>
            <div className="flex m-1">
              <Tooltip content="Express" placement="bottom">
                <img src={express} className="h-10 w-10 m-1" />
              </Tooltip>

              <Tooltip content="PostgreSQL" placement="bottom">
                <img src={postgress} className="h-10 w-10 m-1" />
              </Tooltip>
              <Tooltip content="Sequelize" placement="bottom">
                <img src={seq} className="h-10 w-10 m-1" />
              </Tooltip>

              <Tooltip content="MongoDB" placement="bottom">
                <img src={mongo} className="h-10 w-10 m-1" />
              </Tooltip>
              <Tooltip content="Mongoose" placement="bottom">
                <img src={mongoose} className="h-10 w-10 m-1" />
              </Tooltip>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center m-1">
            <h1 className="text-white">Front-End:</h1>
            <div className="flex m-1">
              <Tooltip content="Redux" placement="bottom">
                <img src={reduxx} className="h-10 w-10 m-1" />
              </Tooltip>
              <Tooltip content="React.js" placement="bottom">
                <img src={react} className="h-10 w-10 m-1" />
              </Tooltip>

              <Tooltip content="CSS 3" placement="bottom">
                <img src={css} className="h-10 w-10 m-1" />
              </Tooltip>
              <Tooltip content="Tailwind Css" placement="bottom">
                <img src={tailwind} className="h-10 w-10 m-1" />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  w-11/12 lg:w-4/5 mt-2 justify-center items-center mr-1 bg-gray-800 rounded lg">
        <h1 className="text-2xl lg:text-3xl text-white mt-3 font-semibold">
          Projects under development
        </h1>
        <div className="flex flex-col justify-between lg:flex-row m-2">
          <div className=" items-center justify-center w-56 m-2">
            <a
              href="https://aconcaguacup22.com.ar/"
              className="flex  flex-col items-center"
            >
              <h1 className="text-white font-bold text-xl mb-1">
                Aconcagua Cup (PWA)
              </h1>
              <Tooltip content="Go to website">
                <img src={acon} className="h-36 w-56 rounded-lg" />
                <h1 className="text-white font-semibold">
                  News and notifications section for international friendly
                  tournament of youth soccer categories (PWA,Responsive Design,
                  Web Push Notifications, Firebase){" "}
                </h1>
              </Tooltip>
            </a>
            <a
              target="_blank"
              href="https://github.com/Tablonimus/AconcaguaCup2022PWA"
            >
              <div className="flex items-center m-1 hover:bg-gray-200 rounded-lg">
                <img src={github} alt="" className="rounded-full w-6 h-6" />
                <h5 class=" font-semibold text-sm lg:text-md ml-2 tracking-tight text-white hover:text-black">
                  GitHub Repository
                </h5>
              </div>
            </a>
          </div>
          <div className=" items-center justify-center w-56 m-2">
            <a
              href="https://bountyhunter2.vercel.app/"
              className="flex  flex-col items-center"
            >
              <h1 className="text-white font-bold text-xl mb-1">
                Bounty Hunter
              </h1>
              <Tooltip content="Go to website">
                <img src={bounty} className="h-36 w-56 rounded-lg" />
                <h1 className="text-white font-semibold">
                  You must hunt the worst criminals, are you ready?. Game made
                  with FBI API (Responsive Design, Game, API rest){" "}
                </h1>
              </Tooltip>
            </a>
            <a
              target="_blank"
              href="https://github.com/Tablonimus/BountyHunter"
            >
              <div className="flex items-center m-1 hover:bg-gray-200 rounded-lg">
                <img src={github} alt="" className="rounded-full w-6 h-6" />
                <h5 class=" font-semibold text-sm lg:text-md ml-2 tracking-tight text-white hover:text-black">
                  GitHub Repository
                </h5>
              </div>
            </a>
          </div>
          <div className=" items-center justify-center w-56 m-2">
            <a
              href="https://happytails.vercel.app"
              className="flex  flex-col items-center"
            >
              <h1 className="text-white font-bold text-xl mb-1">Happy Tails</h1>
              <Tooltip content="Go to website">
                <img src={capturahappy} className="h-36 w-56 rounded-lg" />
                <h1 className="text-white font-semibold">
                  This social network has been made for pets without a place,
                  you can find your next pet here or buy something for yours!{" "}
                  (Responsive Design){" "}
                </h1>
              </Tooltip>
            </a>
            <a target="_blank" href="https://github.com/Tablonimus/Happy-Tails">
              <div className="flex items-center m-1 hover:bg-gray-200 rounded-lg">
                <img src={github} alt="" className="rounded-full w-6 h-6" />
                <h5 class=" font-semibold text-sm lg:text-md ml-2 tracking-tight text-white hover:text-black">
                  GitHub Repository
                </h5>
              </div>
            </a>
          </div>
          <div className=" items-center justify-center w-56 m-2">
            <a
              href="https://worldwideweather.vercel.app/"
              className="flex  flex-col items-center"
            >
              <h1 className="text-white font-bold text-xl  mb-1">
                Weather App
              </h1>
              <Tooltip content="Go to website">
                <img src={wwweather} className="h-36 w-56 rounded-lg" />
                <h1 className="text-white font-semibold">
                  My first react App! Made with React-Redux, CSS3 & HTML5
                  (Responsive Design, Api rest){" "}
                </h1>
              </Tooltip>
            </a>
            <a target="_blank" href="https://github.com/Tablonimus/Weather-App">
              <div className="flex items-center m-1 hover:bg-gray-200 rounded-lg">
                <img src={github} alt="" className="rounded-full w-6 h-6" />
                <h5 class=" font-semibold text-sm lg:text-md ml-2 tracking-tight text-white hover:text-black">
                  GitHub Repository
                </h5>
              </div>
            </a>
          </div>
          {/*  <div>
            <h1>Counrties Atlas</h1>
            <h1>CAPTURA DE PANTALLA?</h1>
            <h1>BREVE DESCRIP??TION</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
