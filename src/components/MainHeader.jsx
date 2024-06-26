import React from 'react'
import Arrow from "../assets/arrow-right.svg";
import Bit from "../assets/BitBucket.svg";
import Drop from "../assets/Dropbox.svg";
import Giphy from "../assets/GIphy.svg";
import Calendar from "../assets/google-calendar.svg";
import Drive from "../assets/google-drive.svg";
import Notion from "../assets/Notion.svg";
import Trello from "../assets/Tello.svg";
import Tag from "../assets/TagManager.svg";
const MainHeader = () => {
  return (
    <>
      <div className="top-header flex justify-between border-b-2 pb-4">
        <div className="title flex gap-4 items-center">
          <img src={Arrow} alt="RIght" className="w-6 " />
          <h1 className="font-semibold text-2xl">Yangi loyiha ochish</h1>
        </div>
        <div className="next flex gap-4">
          <button className="px-[41px] py-[16px] bg-slate-200 rounded-md font-semibold text-gray-500">
            Ortga
          </button>
          <button className="px-[35px] py-[16px] bg-blue-500 rounded-md flex items-center gap-2 font-semibold text-white">
            Davom etish <img src={Arrow} alt="" className="rotate-180" />
          </button>
        </div>
      </div>
      <div className="media border border-b-2 mt-4 p-6 bg-[#faf9f9] rounded-md">
        <div className="top flex gap-3 flex-wrap">
          <img src={Bit} alt="" />
          <img src={Drop} alt="" />
          <img src={Giphy} alt="" />
          <img src={Calendar} alt="" />
          <img src={Drive} alt="" />
          <img src={Notion} alt="" />
          <img src={Trello} alt="" />
          <img src={Tag} alt="" />
        </div>
      </div>
    </>
  )
}

export default MainHeader
