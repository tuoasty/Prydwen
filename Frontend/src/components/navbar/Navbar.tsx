import kofi from './assets/Kofi-cup.webp';
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import {Navbutton} from "./Navbutton.tsx";
import {useSidebar} from "../../context/useSidebar.ts";

export default function Navbar(){
  const { isOpen, toggleSidebar } = useSidebar();

  return(
    <header className="bg-zinc-900 h-[4.5rem] absolute top-0 items-center w-full flex justify-between">
      <div className="h-100% w-100% flex p-2">
        <button className="ml-7" onClick={toggleSidebar}>
          <FaArrowRightToBracket className={`text-white size-6 ${isOpen ? "rotate-180" : "rotate-0"}`}/>
        </button>
      </div>
      <div className="flex p-2">
        <Navbutton href="https://www.prydwen.gg/star-rail/watch-our-partners" bgColor="bg-purple-500" hoverColor="hover:bg-purple-400">
          <FaTwitch className="text-white size-4" />
          <p className="font-sans font-semibold text-base text-white pl-2">Our Partners</p>
        </Navbutton>
        <Navbutton href="https://discord.gg/prydwen" bgColor="bg-blue-500" hoverColor="hover:bg-blue-400">
          <FaDiscord className="text-white size-5" />
          <p className="font-sans font-semibold text-sm text-white pl-2">Our Discord</p>
        </Navbutton>
        <Navbutton href="https://www.prydwen.gg/star-rail/watch-our-partners" bgColor="bg-red-500" hoverColor="hover:bg-red-600">
          <img src={kofi} className="h-5" alt=""/>
          <p className="font-sans font-semibold text-base text-white pl-2">Buy us a Ko-Fi</p>
        </Navbutton>
      </div>
    </header>
    
  )
}