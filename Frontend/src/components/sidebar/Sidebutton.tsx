import React, {FC} from "react";
import {useSidebar} from "../../context/useSidebar.ts";

interface Props {
  icon: React.ReactElement;
  name?: string;
}

export const Sidebutton: FC<Props> = (p) => {
  const { isOpen } = useSidebar();

  return (
    <button className={`w-full h-14 bg-zinc-900 flex items-center p-2 transform transition duration-150 ease-in-out text-gray-300 hover:text-white 
    ${isOpen ? "translate-x-5" : "translate-x-0"}`}>
      {isOpen ? (
        <>
          <div className="h-10 ml-3 text-xl flex items-center">{p.icon}</div>
          <h2 className="text-center ml-3 text-[0.9rem]">{p.name}</h2>
        </>
      ) : <div className="h-10 ml-5 text-xl flex items-center">{p.icon}</div>}
    </button>
  )
}