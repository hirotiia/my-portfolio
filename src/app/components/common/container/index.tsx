import React from 'react'
import { ReactNode } from 'react';

export const Container = ({children}:{children?:ReactNode}) => {
  console.log(children);
  
  return (
    <div className={'border-4 border-black p-8 md:w-96'}>
      <h1 className={'text-black text-3xl mb-8'}>propsに色々な値をわたしてみる</h1>
      {children}
    </div>
  )
}
