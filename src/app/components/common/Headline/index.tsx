import React from 'react'

interface Props {
  title: string
}

export const Headline = (props:Props) => {
  return (

    <div className={"relative flex place-items-center"}>
      <h1>{props.title}ページ</h1>
    </div>

  )
}
