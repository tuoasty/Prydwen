import React, {FC} from "react";
import {useSidebar} from "../../context/useSidebar.ts";
import { Link, LinkProps, useLocation } from 'react-router-dom';

interface Props {
  icon: React.ReactElement;
  name?: string;
  to: LinkProps['to'];
}

export const Sidebutton: FC<Props> = (p) => {
  const { isOpen } = useSidebar();
  const location = useLocation();

  return (
    <Link to={p.to} className={`w-full h-14 flex items-center p-2 text-gray-300 hover:text-white 
    ${location.pathname === p.to ? "bg-zinc-700" : "bg-zinc-900"}`}>
      <div className={`flex items-center ${isOpen ? "translate-x-5" : "translate-x-0"} transform transition duration-150 ease-in-out`}>
        {isOpen ? (
          <>
            <div className="h-10 pl-3 text-xl flex items-center">{p.icon}</div>
            <h2 className="text-center pl-3 text-[0.9rem]">{p.name}</h2>
          </>
        ) : <div className="h-10 ml-5 text-xl flex items-center">{p.icon}</div>}
      </div>
    </Link>
  )
}