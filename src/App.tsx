import Navbar from "./components/navbar/Navbar.tsx";
import Sidebar from "./components/sidebar/Sidebar.tsx";

function App(){
  return (
    <div className="h-screen w-screen flex">
      <Sidebar/>
      <div className="w-[0.6px] h-screen bg-zinc-700"></div>
      <div className="flex-1 relative">
        <Navbar/>
        <div className="pt-[4.5rem] bg-zinc-900 h-full w-full">
          <div className="w-full h-[0.6px] bg-zinc-700"></div>
          {/*  Content*/}
        </div>
      </div>
    </div>
  )
}

export default App;