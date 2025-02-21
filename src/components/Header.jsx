function Header() {
  return (
    <>
      <header>
        <div>
          <nav className="flex justify-between p-4 md:items-center md:fixed right-0 left-0  bg-[#DEE2E6] ">
            <a className="text-[30px]" href="index.html">
              R
            </a>
            <ul className=" md:flex ">
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
