import React from "react";

export default function NavButton(
  {href, bgColor, hoverColor, children}:
  {href: string, bgColor: string, hoverColor: string, children?: React.ReactNode}) {
  return (
    <a href={href} className="m-4 mx-1.5">
      <div className={`${bgColor} h-[3rem] p-6 flex items-center justify-center hover:${hoverColor}`}>
        {children}
      </div>
    </a>
  )
}