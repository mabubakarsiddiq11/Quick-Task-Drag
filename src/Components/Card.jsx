import React from "react";
import { MdInsertPageBreak } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { motion } from "motion/react";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className="relative w-60 h-72 z-[3] rounded-[40px] bg-zinc-900/90 text-white overflow-hidden py-10 px-5"
    >
      <MdInsertPageBreak />
      <p className=" pt-5  font-semibold text-sm">
        {data.desc}
        sint!
      </p>

      <div className="footer absolute  w-full  bottom-0 left-0">
        <div className=" px-8 py-3  flex justify-around items-center  ">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 flex justify-center items-center rounded-full bg-red-700  ">
            {data?.close ? (
              <TiDeleteOutline />
            ) : (
              <IoMdDownload size=".8em" color="black" />
            )}
            {/* <IoMdDownload size=".8em" color="black"/> */}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className="w-full py-4"
            style={{ backgroundColor: data.tag.tagColor }}
          >
            <h3 className="text-sm flex justify-center items-center font-bold text-black">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
