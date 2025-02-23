import { Link ,NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div>
          <nav className="flex justify-between p-4 md:items-center md:fixed right-0 left-0  bg-[#DEE2E6] ">
            <Link className="text-[30px]" to="/">
              R
            </Link>
            <ul className=" md:flex ">
              <li>
                <Link className="pr-3" to="/">
                  Home
                </Link>
              </li>
              <li>
                <NavLink className="pr-3" to="/About">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="pr-3" to="/Services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink className="pr-3" to="/Blog">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/Footer">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
