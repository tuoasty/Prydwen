import React, {FC} from "react";
import {useSidebar} from "../../context/useSidebar.ts";

interface Props {
  icon: React.ReactElement;
  name?: string;
}

export const Sidebutton: FC<Props> = (p) => {
  const { isOpen } = useSidebar();

  return (
    <button className={`w-full h-14 bg-zinc-900 flex items-center p-2 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-5" : "translate-x-0"}`}>
      {isOpen ? (
        <>
          <div className="h-10 text-xl text-gray-300 flex items-center">{p.icon}</div>
          <h2 className="text-center text-gray-300 ml-3">{p.name}</h2>
        </>
      ) : <div className="h-10 ml-5 text-xl text-gray-300 flex items-center">{p.icon}</div>}
    </button>
  )
}