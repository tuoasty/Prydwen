import logo from "./assets/logo.png"
import minlogo from "./assets/minlogo.webp"
import {useSidebar} from "../../context/useSidebar.ts";
import { TiHome } from "react-icons/ti";


export default function Sidebar(){
    const { isOpen } = useSidebar();

    return(
      <aside className={`h-full bg-zinc-900 flex-col ${isOpen ? "w-[17%]" : "w-[5%]"}`}>
        <div className="h-[4.5rem] flex place-content-center">
          <img src={isOpen ? logo : minlogo} alt="logo" className="h-10 m-auto"/>
        </div>
        <div className="w-full h-[0.6px] bg-zinc-700"></div>
        <button className="w-full h-14 bg-white flex items-center p-2">
          <TiHome className="h-10 ml-6 size-5"/>
          <h2 className="text-center ml-3">Home</h2>
        </button>
      </aside>
    )
}