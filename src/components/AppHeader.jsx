function appHeader() {
  return (
    <header className="header">
      <div className="container flex inbetween">
        <div className="logo">
          <img src="/img/dc-logo.png" alt="dc piccolo logo" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="">characters</a>
            </li>
            <li>
              <a href="">comics</a>
            </li>
            <li>
              <a href="">movies</a>
            </li>
            <li>
              <a href="">tv</a>
            </li>
            <li>
              <a href="">games</a>
            </li>
            <li>
              <a href="">collectibles</a>
            </li>
            <li>
              <a href="">videos</a>
            </li>
            <li>
              <a href="">fans</a>
            </li>
            <li>
              <a href="">news</a>
            </li>
            <li>
              <a href="">shop</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default appHeader;
