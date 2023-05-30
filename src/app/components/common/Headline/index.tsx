import React from 'react'
interface Props {
  title: string
}

export const Headline = (props:Props) => {
  return (

    <div className={`text-3xl md:text-5xl`}>
      <h1>{props.title}ページ</h1>
    </div>

  )
}
