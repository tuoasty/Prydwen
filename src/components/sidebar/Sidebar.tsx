import logo from "./assets/logo.png"

export default function Sidebar(){
    return(
      <aside className="h-full w-[14%] bg-zinc-900 flex-col">
        <div className="h-[4.5rem] flex place-content-center">
          <img src={logo} alt="logo" className="h-10 m-auto"/>
        </div>
        <div className="w-full h-[0.6px] bg-zinc-700"></div>
      </aside>
    )
}