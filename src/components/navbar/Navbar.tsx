import kofi from './assets/Kofi-cup.webp';
import arrowLeft from './assets/arrowLeft.png';
import arrowRight from './assets/arrowRight.png';
import {Navbutton} from "./Navbutton.tsx";
import {useSidebar} from "../../context/useSidebar.ts";

export default function Navbar(){
  const { isOpen, toggleSidebar } = useSidebar();

  return(
    <header className="bg-zinc-900 h-[4.5rem] absolute top-0 items-center w-full flex justify-between">
      <div className="h-100% w-100% flex p-2">
        <button className="ml-7" onClick={toggleSidebar}>
          <img src={isOpen ? arrowLeft : arrowRight} className="h-5" alt=""/>
        </button>
      </div>
      <div className="flex p-2">
        <Navbutton href="https://www.prydwen.gg/star-rail/watch-our-partners" bgColor="bg-purple-500" hoverColor="bg-purple-400">
          <svg className="h-5" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision"
               textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd"
               clipRule="evenodd" viewBox="0 0 439 512.165">
            <g fill="#FEFEFE" fillRule="nonzero">
              <path
                d="M402.415 237.791l-73.166 73.166h-73.166l-64.021 64.021v-64.021H109.75V36.584h292.665v201.207zM91.458 0L0 91.456v329.251h109.75v91.458l91.458-91.458h73.167L439 256.083V0H91.458z"/>
              <path d="M310.958 210.354h36.583v-109.75h-36.583zM210.354 210.354h36.583v-109.75h-36.583z"/>
            </g>
          </svg>
          <p className="font-sans font-semibold text-base text-white pl-2">Our Partners</p>
        </Navbutton>
        <Navbutton href="https://discord.gg/prydwen" bgColor="bg-blue-500" hoverColor="bg-blue-400">
          <svg className="h-5" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision"
               textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd"
               clipRule="evenodd" viewBox="0 0 512 365.467">
            <path fill="#fff"
                  d="M378.186 365.028s-15.794-18.865-28.956-35.099c57.473-16.232 79.41-51.77 79.41-51.77-17.989 11.846-35.099 20.182-50.454 25.885-21.938 9.213-42.997 14.917-63.617 18.866-42.118 7.898-80.726 5.703-113.631-.438-25.008-4.827-46.506-11.407-64.494-18.867-10.091-3.947-21.059-8.774-32.027-14.917-1.316-.877-2.633-1.316-3.948-2.193-.877-.438-1.316-.878-1.755-.878-7.898-4.388-12.285-7.458-12.285-7.458s21.06 34.659 76.779 51.331c-13.163 16.673-29.395 35.977-29.395 35.977C36.854 362.395 0 299.218 0 299.218 0 159.263 63.177 45.633 63.177 45.633 126.354-1.311 186.022.005 186.022.005l4.388 5.264C111.439 27.645 75.461 62.305 75.461 62.305s9.653-5.265 25.886-12.285c46.945-20.621 84.236-25.885 99.592-27.64 2.633-.439 4.827-.878 7.458-.878 26.763-3.51 57.036-4.387 88.624-.878 41.68 4.826 86.43 17.111 132.058 41.68 0 0-34.66-32.906-109.244-55.281l6.143-7.019s60.105-1.317 122.844 45.628c0 0 63.178 113.631 63.178 253.585 0-.438-36.854 62.739-133.813 65.81l-.001.001zm-43.874-203.133c-25.006 0-44.75 21.498-44.75 48.262 0 26.763 20.182 48.26 44.75 48.26 25.008 0 44.752-21.497 44.752-48.26 0-26.764-20.182-48.262-44.752-48.262zm-160.135 0c-25.008 0-44.751 21.498-44.751 48.262 0 26.763 20.182 48.26 44.751 48.26 25.007 0 44.75-21.497 44.75-48.26.439-26.763-19.742-48.262-44.75-48.262z"/>
          </svg>
          <p className="font-sans font-semibold text-sm text-white pl-2">Our Discord</p>
        </Navbutton>
        <Navbutton href="https://www.prydwen.gg/star-rail/watch-our-partners" bgColor="bg-red-500" hoverColor="bg-red-600">
          <img src={kofi} className="h-5" alt=""/>
          <p className="font-sans font-semibold text-base text-white pl-2">Buy us a Ko-Fi</p>
        </Navbutton>
      </div>
    </header>
    
  )
}