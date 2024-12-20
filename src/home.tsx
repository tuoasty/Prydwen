import Navbar from "./components/navbar/navbar.tsx";

function HomePage(){
  return (
    <div className="h-screen w-screen flex">
      <div className="h-full w-1/6 bg-zinc-900 outline-8 outline-amber-500">

      </div>
      <div className="flex-1 relative">
        <Navbar />
        <div className="pt-[4.5rem]">

        </div>
      </div>
    </div>
  )
}

export default HomePage;