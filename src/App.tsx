import Navbar from "./components/navbar/Navbar.tsx";
import Sidebar from "./components/sidebar/Sidebar.tsx";
import {SidebarProvider} from "./context/SidebarContext.tsx";

function App(){
  return (
    <div className="h-screen w-screen flex">
      <SidebarProvider>
        <Sidebar/>
        <div className="w-[1px] h-screen bg-zinc-700"></div>
        <div className="flex-1 relative">
          <Navbar/>
          <div className="pt-[4.5rem] bg-zinc-800 h-full w-full">
            <div className="w-full h-[1px] bg-zinc-700"></div>
            {/*  Content*/}
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default App;