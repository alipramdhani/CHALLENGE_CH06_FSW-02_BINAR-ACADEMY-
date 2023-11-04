import Address from "./layouts.footer.components/Address";
import Copyright from "./layouts.footer.components/Copyright";
import NavbarFooter from "./layouts.footer.components/Navbar-footer";
import IconSosmed from "./layouts.footer.components/Sosmed";
import "./Footer.css";

function Footer() {
  return (
    <footer
      className="w-100 p-3 p-sm-5 d-flex justify-content-start justify-content-sm-center align-items-start align-items-sm-start w-100"
      id="footer"
    >
      <div className="row justify-content-start justify-content-sm-center gap-2 w-100 footer">
        {/* Address */}
        <Address />
        {/* Navbar link */}
        <NavbarFooter />
        {/* sosial media */}
        <IconSosmed />
        {/* Copyright */}
        <Copyright />
      </div>
    </footer>
  );
}
export default Footer;
