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
      <aside className={`h-[calc(100%-4.5rem)] mt-[4.5rem] fixed bg-zinc-900 flex-col ${isOpen ? "w-64" : "w-[4.5rem]"}`}>
        <div className={`overflow-x-hidden h-full scrollable ${isOpen ? "overflow-y-auto" : "overflow-hidden"}`}>
          <button
            className={`w-64 h-14 relative overflow-hidden mb-2 flex items-center text-gray-300 text-xl ${isOpen ? "justify-evenly" : ""}`}>
            <div className="absolute inset-0 h-full w-full bg-[position:center_top_12.5rem] bg-[size:160%] opacity-30"
                 style={{ backgroundImage: `url(${starrail})` }}>
            </div>
            {isOpen ? (
              <h2 className="relative text-center font-sans font-medium ml-3 leading-tight">Honkai: Star Rail</h2>
            ) : <></>}
            <FaRegWindowRestore className={`relative ${isOpen ? "" : "ml-7"}`} />
          </button>
          <Sidebutton to="/" icon={<HiHome />} name="Home"></Sidebutton>
          <Sidebutton to="/characters" icon={<MdPeopleAlt />} name="Characters"></Sidebutton>
          <Sidebutton to="/tier-list" icon={<FaRankingStar />} name="Tier list"></Sidebutton>
          <Sidebutton to="/memory-of-chaos" icon={<FaDungeon />} name="Memory of Chaos"></Sidebutton>
          <Sidebutton to="/pure-fiction" icon={<FaDove />} name="Pure Fiction"></Sidebutton>
          <Sidebutton to="/apocalyptic-shadow" icon={<FaHourglassHalf />} name="Apocalyptic Shadow"></Sidebutton>
          <Sidebutton to="/light-cones" icon={<FaCube />} name="Light Cones"></Sidebutton>
          <Sidebutton to="/guides/relic-sets" icon={<FaDiceFive />} name="Relics"></Sidebutton>
          <div className="w-full h-[1px] bg-zinc-700"></div>
          <Sidebutton to="/guides" icon={<FaBookOpen />} name="Guides"></Sidebutton>
          <Sidebutton to="/tools" icon={<FaCalculator />} name="Tools"></Sidebutton>
          <div className="w-full h-[1px] bg-zinc-700"></div>
          <Sidebutton to="/blog" icon={<FaNewspaper />} name="Blog"></Sidebutton>
        </div>
      </aside>
    )
}