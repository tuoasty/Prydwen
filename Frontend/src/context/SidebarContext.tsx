import React, {createContext, useState} from "react";

type SidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

interface Props {
  children?: React.ReactNode;
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  toggleSidebar: () => {}
});

export function SidebarProvider(p:Props){
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <SidebarContext.Provider value={{isOpen, toggleSidebar}}>
      {p.children}
    </SidebarContext.Provider>
  )
}

export default SidebarContext;