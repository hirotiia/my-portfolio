import React from 'react'
import { ReactNode } from 'react';

export const Container = ({children}:{children?:ReactNode}) => {
  return (
    <div className={'border-4 border-black w-96 p-8'}>
      <p>{children}</p>
    </div>
  )
}
