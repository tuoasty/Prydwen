import starrail from '../../assets/images/starrail.webp';

interface Props {
  children?: React.ReactNode
}

export default function Page(p:Props){
  return (
    <div className="relative overflow-x-auto h-full bg-zinc-800 -z-20">
      {/* Background */}
      <div className="absolute w-full h-full bg-zinc-800 -z-10 overflow-hidden">
        <img src={starrail} className="opacity-35 scale-150 translate-y-20 w-full" />
        <div className="absolute inset-0 h-full bg-color- bg-gradient-to-b from-zinc-800/80 to-zinc-800"></div>
      </div>

      {/*Content */}
      {/*Header*/}
      {p.children}
    </div>
  )
}