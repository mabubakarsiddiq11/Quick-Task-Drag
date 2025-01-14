import React, { useRef } from "react";
import Card from "./Components/Card";

function FourGround() {
  const ref = useRef();

  const data = [
    {
      desc: "Some of the first news circulations occurred in Renaissance Europe. ",
      fileSize: "10mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "In the 1830s, newspapers started seeking commercial success. ",
      fileSize: "12mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Start Now", tagColor: "blue" },
    },
    {
      desc: "With the introduction of the television came The Communications Act of 1934.",
      fileSize: "14mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Repeat Now", tagColor: "blue" },
    },
    {
      desc: "The region has been inhabited for millennia,.",
      fileSize: "14mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Repeat Now", tagColor: "yellow" },
    },
    {
      desc: "Karachi is now Pakistan's premier industrial and financial centre.",
      fileSize: "14mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Repeat Now", tagColor: "red" },
    },
    {
      desc: "Modern Karachi was reputedly founded in 1729 as the settlement of Kolachi-jo-Goth during the rule of Kalhora dynasty..",
      fileSize: "14mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Repeat Now", tagColor: "skyblue" },
    },
  ];
  return (
    <div
      ref={ref}
      className="w-full h-full fixed z-[3] top-0 left-0 flex gap-10 flex-wrap p-4  "
    >
      {data.map((data, i) => (
        <Card data={data} reference ={ref} />
      ))}
    </div>
  );
}       

export default FourGround;
