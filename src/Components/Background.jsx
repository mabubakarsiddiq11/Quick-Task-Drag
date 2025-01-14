import React from "react";

function Background() {
  return (
    <div className="w-full h-screen fixed z-[2]">
      <div className="w-full flex justify-center  absolute top-[5%] py-7  text-zinc-300 text-xl ">
        Documents.
      </div>

      <h1 className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-[13vw] text-zinc-200">
        Docs.
      </h1>
    </div>
  );
}

export default Background;
