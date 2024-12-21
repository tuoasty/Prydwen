import logo from "./assets/logo.png"
import minlogo from "./assets/minlogo.webp"
import {useSidebar} from "../../context/SidebarContext.tsx";

export default function Sidebar(){
    const { isOpen } = useSidebar();

    return(
      <aside className={`h-full bg-zinc-900 flex-col ${isOpen ? "w-[14%]" : "w-[4%]"}`}>
        <div className="h-[4.5rem] flex place-content-center">
          <img src={isOpen ? logo : minlogo} alt="logo" className="h-10 m-auto"/>
        </div>
        <div className="w-full h-[0.6px] bg-zinc-700"></div>
      </aside>
    )
}