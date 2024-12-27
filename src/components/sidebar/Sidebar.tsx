import logo from "./assets/logo.png"
import minlogo from "./assets/minlogo.webp"
import {useSidebar} from "../../context/useSidebar.ts";
import {Sidebutton} from "./Sidebutton.tsx";
import { TiHome } from "react-icons/ti";
import { MdPeopleAlt } from "react-icons/md";
import {
  FaRankingStar,
  FaDungeon,
  FaDove,
  FaHourglassHalf,
  FaCube,
  FaDiceFive,
  FaBookOpen,
  FaCalculator, FaNewspaper,
} from "react-icons/fa6";


export default function Sidebar(){
    const { isOpen } = useSidebar();

    return(
      <aside className={`h-full bg-zinc-900 flex-col ${isOpen ? "w-[17%]" : "w-[5%]"}`}>
        <div className="h-[4.5rem] flex place-content-center">
          <img src={isOpen ? logo : minlogo} alt="logo" className="h-10 m-auto"/>
        </div>
        <div className="w-full h-[1px] bg-zinc-700"></div>
        <Sidebutton icon={<TiHome/>} name="Home"></Sidebutton>
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