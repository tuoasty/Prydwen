import Navbar from "./components/navbar/Navbar.tsx";
import Sidebar from "./components/sidebar/Sidebar.tsx";
import {SidebarProvider} from "./context/SidebarContext.tsx";
import HomePage from './pages/Homepage.tsx';
import { HorizontalLine, VerticalLine } from './components/details/Lines.tsx';


function App(){
  return (
    <div className="h-screen w-auto flex-col">
      <SidebarProvider>
        <Navbar />
        <HorizontalLine additionalClass="fixed"></HorizontalLine>
        <div className="mt-[4.5rem]">
          <Sidebar></Sidebar>
          <VerticalLine></VerticalLine>
          <div className="ml-64 ">

          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default App;