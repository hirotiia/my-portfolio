import { ReactNode } from 'react';

export const MainVisual = ({children}: {children: ReactNode}) => {
  return (
    <div className="relative w-full object-contain aspect-[19/6]">
      {children}
    </div>
  )
}
