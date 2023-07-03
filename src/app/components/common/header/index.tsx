import Link from 'next/link'


export const Header = () => {
  return (
    <header className={`py-8 px-8 md:py-10 md:px-20 bg-gray-800 text-white`}>
      <div className={`max-w-5xl mx-auto flex justify-between`}>
        <h1>
          <Link href="/">My portfolio</Link>
        </h1>
        <p className="absolute w-14 h-16 top-0 right-0">
          <button className="text-white content-[''] absolute block bg-black h-0.5 before:top-6 before:right-4" type="button" aria-controls="hamburger-menu" aria-expanded="false" aria-label="メニュー項目を開く"></button>
        </p>
        <nav>
          <ul className={`flex gap-5`}>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

