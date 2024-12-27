import logo from "./assets/logo.png"
import minlogo from "./assets/minlogo.webp"
import starrail from "./assets/starrail.jpg"
import {useSidebar} from "../../context/useSidebar.ts";
import {Sidebutton} from "./Sidebutton.tsx";
import { MdPeopleAlt } from "react-icons/md";
import {
  FaRankingStar,
  FaDungeon,
  FaDove,
  FaHourglassHalf,
  FaCube,
  FaDiceFive,
  FaBookOpen,
  FaCalculator, FaNewspaper, FaRegWindowRestore,
} from "react-icons/fa6";
import {HiHome} from "react-icons/hi";

export default function Sidebar(){
    const { isOpen } = useSidebar();

    return(
      <aside className={`h-full bg-zinc-900 overflow-hidden flex-col ${isOpen ? "w-64" : "w-[4.5rem]"}`}>
        <div className="h-[4.5rem] flex place-content-center">
          <img src={isOpen ? logo : minlogo} alt="logo" className="h-10 m-auto"/>
        </div>
        <div className="w-full h-[1px] bg-zinc-700"></div>
        <button className={`w-64 h-14 relative overflow-hidden mb-2 flex items-center text-gray-300 text-xl ${isOpen ? "justify-evenly" : ""}`}>
          <div className="absolute inset-0 h-full w-full bg-[position:center_top_12.5rem] bg-[size:160%] opacity-30"
               style={{backgroundImage: `url(${starrail})`}}>
          </div>
          {isOpen ? (
            <h2 className="relative text-center font-sans font-medium ml-3 leading-tight">Honkai: Star Rail</h2>
          ): <></>}
          <FaRegWindowRestore className={`relative ${isOpen ? "" : "ml-7"}`}/>
        </button>
        <Sidebutton icon={<HiHome/>} name="Home"></Sidebutton>
        <Sidebutton icon={<MdPeopleAlt/>} name="Characters"></Sidebutton>
        <Sidebutton icon={<FaRankingStar/>} name="Tier list"></Sidebutton>
        <Sidebutton icon={<FaDungeon/>} name="Memory of Chaos"></Sidebutton>
        <Sidebutton icon={<FaDove/>} name="Pure Fiction"></Sidebutton>
        <Sidebutton icon={<FaHourglassHalf/>} name="Apocalyptic Shadow"></Sidebutton>
        <Sidebutton icon={<FaCube/>} name="Light Cones"></Sidebutton>
        <Sidebutton icon={<FaDiceFive/>} name="Relics"></Sidebutton>
        <div className="w-full h-[1px] bg-zinc-700"></div>
        <Sidebutton icon={<FaBookOpen/>} name="Guides"></Sidebutton>
        <Sidebutton icon={<FaCalculator/>} name="Tools"></Sidebutton>
        <div className="w-full h-[1px] bg-zinc-700"></div>
        <Sidebutton icon={<FaNewspaper/>} name="Blog"></Sidebutton>
      </aside>
    )
}