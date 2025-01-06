import React, { FC } from 'react';
import { useSidebar } from '../../context/useSidebar.ts';

interface Props {
  children?: React.ReactNode
}

export const Content: FC<Props> = (p) => {
  const { isOpen } = useSidebar();

  return (
    <div className={`fixed ${isOpen ? 'ml-64 w-[calc(100%-16rem)]' : 'ml-[4.5rem] w-[calc(100%-4.5rem)]'} h-[calc(100%-4.5rem)]`}>
      {p.children}
    </div>
  )
}
