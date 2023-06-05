import React from 'react'

interface o {
    name: string,
    age:　number,
    country: string,
    fn: (result:string) => string
}

const Example = ({name, age, country, fn}:o) => {
  return (
    <div className={'border-4 border-rose-900 text-amber-800 p-8'}>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Country:{country}</p>
      <p>{fn('関数に設定した引数を出力します')}</p>
    </div>
  )
}

export default Example
