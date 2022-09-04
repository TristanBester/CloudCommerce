import React from "react"

import { PhoneIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { CpuChipIcon, ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid"

import supportImage from "../assets/support.jpeg"

function Support() {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImage}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className=" text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team.
          </h3>
          <p className="py-4 text-xl text-slate-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            eveniet vitae rem distinctio, reiciendis nemo praesentium. Debitis
            similique quo veniam dolore adipisci vitae, eaque harum
            exercitationem nam eveniet autem doloremque dolor quis hic voluptas.
            Natus, dolores, asperiores sed aliquam aut exercitationem, quaerat
            laboriosam repellat quisquam nihil impedit nesciunt. Est, excepturi?
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-12 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-xl mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                libero blanditiis illo cum nobis ipsum neque placeat officiis
                voluptate unde!
              </p>
            </div>
            <div className="bg-slate-100 rounded-b-xl">
              <p className="flex gap-1 p-4 text-indigo-600">
                Contact Us <ArrowRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ChatBubbleOvalLeftIcon className="w-16 p-4 bg-indigo-600 text-white rounded-xl mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                libero blanditiis illo cum nobis ipsum neque placeat officiis
                voluptate unde!
              </p>
            </div>
            <div className="bg-slate-100 rounded-b-xl">
              <p className="flex gap-1 p-4 text-indigo-600">
                Contact Us <ArrowRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <CpuChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-xl mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                libero blanditiis illo cum nobis ipsum neque placeat officiis
                voluptate unde!
              </p>
            </div>
            <div className="bg-slate-100 rounded-b-xl">
              <p className="flex gap-1 p-4 text-indigo-600">
                Contact Us <ArrowRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
