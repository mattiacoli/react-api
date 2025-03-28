export default function Header() {
  return (
    <>
      <header>
        <nav className="navbar bg-dark text-white">
          <div className="container">
            <div className="logo">My<b>Blog</b></div>

            <ul className="nav">
              <li className="nav-item">
                <a href="" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

    </>
  )
}