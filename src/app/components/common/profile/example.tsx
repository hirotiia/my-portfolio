import React from 'react'
import { Counter } from '../../counter'

interface o {
    name: string,
    age:　number,
    country: string,
    fn: (result:string) => string,
    bool?: boolean // ?をつけることで任意の指定になる
}

const Example = ({name, age, country, fn, bool=false}:o) => {
  return (
    <div className={'border-4 border-rose-900 text-amber-800 p-8'}>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Country:{country}</p>
      <p>{fn('関数に設定した引数を出力します')}</p>
      <p>{bool ? 'true' : 'false'}</p>
      <Counter />
    </div>
  )
}

export default Example
