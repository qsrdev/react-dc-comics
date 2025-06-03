function appHeader() {
  const headerMenu = [
    { title: "characters", url: "/characters" },
    { title: "comics", url: "/comics" },
    { title: "movies", url: "/movies" },
    { title: "tv", url: "/tv" },
    { title: "games", url: "/games" },
    { title: "collectibles", url: "/collectibles" },
    { title: "videos", url: "/videos" },
    { title: "fans", url: "/fans" },
    { title: "news", url: "/news" },
    { title: "shop", url: "/shop" },
  ];

  return (
    <header className="header">
      <div className="container flex inbetween">
        <div className="logo">
          <img src="/img/dc-logo.png" alt="dc piccolo logo" />
        </div>
        <nav className="nav">
          <ul>
            {headerMenu.map((curNav, index) => (
              <li key={`nav-${index}`}>
                <a href={curNav.url}>{curNav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default appHeader;
