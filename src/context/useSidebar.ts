import SidebarContext from "./SidebarContext.tsx";
import {useContext} from "react";

export const useSidebar = () => useContext(SidebarContext);