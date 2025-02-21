function Header() {
  return (
    <>
      <header>
        <div>
          <nav className="flex justify-between p-4 md:items-center fixed right-0 left-0 ">
            <a className="text-2xl" href="index.html">
              R
            </a>
            <ul className=" md:flex bg-[#DEE2E6] p-3">
              <li>
                <a className="pr-3" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="pr-3" href="/">
                  About
                </a>
              </li>
              <li>
                <a className="pr-3" href="/">
                  Services
                </a>
              </li>
              <li>
                <a className="pr-3" href="/">
                  Blog
                </a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
