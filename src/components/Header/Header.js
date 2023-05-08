export const Header = () => {
  return (
    <header className="header">
        <div className="nav-row">
          <a href="/" className="logo"><strong>My</strong> portfolio</a>
          <ul className="nav-list">
            <li className="nav-list__item active">
              <a href="/"
                className="nav-list__link active"
              >
                About me
              </a>
            </li>
            <li className="nav-list__item">
              <a href="/projects.html"
                className="nav-list__link"
              >
                Projects
              </a>
            </li>
            <li className="nav-list__item">
              <a href="/contacts.html"
                className="nav-list__link"
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </header>
  )
}