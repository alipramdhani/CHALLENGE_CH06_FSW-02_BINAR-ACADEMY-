import Logo from "./layouts.header.components/Logo";
import Menu from "./layouts.header.components/Menu";
import Register from "./layouts.header.components/Register";
import "./Header.css";

function Header() {
  return (
    <>
      <nav className="navbar" id="navbar">
        <div className=" container-fluid d-flex flex-row justify-content-between w-100">
          {/* logo */}
          <Logo />
          {/* Register */}
          <Register />
          {/* Menu */}
          <Menu />
        </div>
      </nav>
    </>
  );
}
export default Header;
