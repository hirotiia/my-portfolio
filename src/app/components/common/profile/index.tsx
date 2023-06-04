import React from 'react'
import Example from './example'

export const Profile = () => {
  const o = [
    {
     name: 'Takashi',
     age: 20,
     country: 'UK'
    }
  ]
  return (
    <div>
      <Example {...o[0]}/>
    </div>
  )
}

