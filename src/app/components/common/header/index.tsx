export const Header = () => {
  return (
    <header className={`py-10 px-20 bg-gray-800 text-white`}>
      <div className={`max-w-5xl mx-auto`}>
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

