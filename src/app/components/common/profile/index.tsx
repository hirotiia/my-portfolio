import React from 'react'
import Example from './example'

export const Profile = () => {

  // objectをわたしてみる
  const o = [
    {
     name: 'Takashi',
     age: 20,
     country: 'UK'
    },
    {
     name: 'Hiroya',
     age: 25,
     country: 'JP'
    }
  ]

  // 関数をわたしてみる
  const hello = (word:string) => `Hello ${word}`;

  return (
    <div>
      <Example
       {...o[0]} 
       fn={hello} 
      />
      <Example 
      {...o[1]}
      fn={hello} 
      />
    </div>
  )
}

