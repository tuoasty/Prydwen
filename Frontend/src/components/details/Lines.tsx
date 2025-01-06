import { FC } from 'react';

interface Props {
  additionalClass?: string;
}

export const VerticalLine:FC<Props> =  (p) => {
  return (
    <div className={`w-[1px] h-full bg-zinc-700 ${p.additionalClass}`}></div>
  )
}

export const HorizontalLine:FC<Props> =  (p) => {
  return (
    <div className={`w-full h-[1px] bg-zinc-700 ${p.additionalClass}`}></div>
  )
}