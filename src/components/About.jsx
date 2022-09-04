import React from "react"

function About() {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-5xl font-bold">
            Trusted by developers across the world.
          </h2>
          <p className="text-3xl py-6 text-gray-500 my-2 mx-4 max-w-[800px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            assumenda rerum? Ab hic quae asperiores incidunt perferendis
            explicabo natus, mollitia eum, exercitationem dolorem ea
            dignissimos, distinctio non numquam facilis? Aperiam.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 px-2 text-center mx-6 my-7">
          <div className="border-2 py-8 rounded-xl shadow-xl">
            <p className="font-bold text-indigo-600 text-6xl">100%</p>
            <p className="text-gray-400 mt-2">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="font-bold text-indigo-600 text-6xl">24/7</p>
            <p className="text-gray-400 mt-2">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="font-bold text-indigo-600 text-6xl">100K</p>
            <p className="text-gray-400 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
