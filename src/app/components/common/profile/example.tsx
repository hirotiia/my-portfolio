import React from 'react'

interface o {
    name: string,
    age:　number,
    country: string
}

const example = ({name, age, country}:o) => {
  return (
    <div className={'border-4 border-rose-900 text-amber-800 p-8'}>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Country:{country}</p>
    </div>
  )
}

export default example
