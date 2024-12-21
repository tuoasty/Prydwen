import React, {FC} from "react";

interface Props {
  href: string,
  bgColor: string,
  hoverColor: string,
  children?: React.ReactNode
}

export const Navbutton: FC<Props> = (p) => {
  return (
    <a href={p.href} className="m-4 mx-1.5">
      <div className={`${p.bgColor} h-[3rem] p-6 flex items-center justify-center hover:${p.hoverColor}`}>
        {p.children}
      </div>
    </a>
  )
}