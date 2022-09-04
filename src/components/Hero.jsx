import React from "react"

import {
  CloudArrowUpIcon,
  CircleStackIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/24/solid"

import bgImage from "../assets/cyber-bg.png"

export default function Hero() {
  return (
    <div
      name="home"
      className="w-full h-screen  bg-zinc-00 flex flex-col justify-between"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-{1240px} m-auto">
        <div className="flex flex-col justify-center items-center md:justify-start md:ml-5 md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl mt-4 mb-6">This is our passion.</p>
          <button className="py-3 px-6 sm:w-[60%]">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={bgImage} alt="Background image" />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] 
        bottom-[5%] mx-12 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
        border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p>Data Services.</p>
          <div className="grid grid-cols-2 md:grid-cols-4">
            <p className="flex px-4 py-2 text-slate-500 min-w-[200px] items-center">
              <CloudArrowUpIcon className="w-6 text-indigo-600 mr-3" /> App
              Security
            </p>
            <p className="flex px-4 py-2 text-slate-500 min-w-[200px] items-center">
              <CircleStackIcon className="w-6 text-indigo-600 mr-3" /> Dashboard
            </p>
            <p className="flex px-4 py-2 text-slate-500 min-w-[200px] items-center">
              <ServerIcon className="w-6 text-indigo-600 mr-3" /> Cloud Data
            </p>
            <p className="flex flex-row px-4 py-2 text-slate-500 min-w-[200px] items-center">
              <PaperAirplaneIcon className="w-6 text-indigo-600 mr-3" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
