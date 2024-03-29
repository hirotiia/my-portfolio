"use client";

import React from 'react'
import { useRef } from 'react'

export function Modal():JSX.Element | null {
  const dialogRef: React.MutableRefObject<HTMLDialogElement | null> = useRef(null);
  const iframeEl = dialogRef.current?.querySelector('iframe');

  /** iframe要素のwindowオブジェクトを取得 */
  const targetWidow = iframeEl?.contentWindow;

  if(!dialogRef) {
    return null;
  }

  const showModal = ():void => {
    dialogRef.current?.showModal();
  }

  /** iframeの動画を操作する関数 */
  const videoControll = (action: string, arg=null) => {
    targetWidow?.postMessage('{"event":"command", "func":"'+action+'", "args":'+arg+'}', '*');
  }

  const closeModal = ():void => {
    dialogRef.current?.close();
    videoControll('pauseVideo');
    
  }

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  }

  console.log(dialogRef.current);
  

  return (
    <div>
      <div>
          <button type="button" id="modal-01" onClick={showModal}>クリックすると。。。</button>
      </div>
      <dialog ref={dialogRef} className='backdrop:bg-gray-800/[.54]' onClick={closeModal}>
          <div onClick={stopPropagation}>
            <div className="modal-head">
              <h2>モーダルが開きます</h2>
            </div>
            <div className="relative">
              <p>エイペックス-Season6-トレーラー</p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/qzdGo7FBndA?enablejsapi=1&origin=https://my-portfolio-nine-omega-74.vercel.app" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              <div className="absolute -top-[25px] right-[0px]">
                <button onClick={closeModal} className="block w-12 h-12 relative before:content-[''] before:block before:w-full before:h-1 before:bg-black before:origin-[0%_50%] before:rotate-45 after:content-[''] before:absolute before:left-[14%] before:top-[calc(14%_-_5px)] after:block after:w-full after:h-1 after:bg-black after:-rotate-45 after:origin-[100%_50%] after:right-[14%] after:absolute after: left-auto after:top-[calc(14%_-_5px)]">
                    <span className="sr-only">閉じる</span>
                </button>
              </div>
            </div>
          </div>
      </dialog>
    </div>
  )
}

