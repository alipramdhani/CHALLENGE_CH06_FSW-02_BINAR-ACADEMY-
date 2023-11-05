import "./Header.css";
function Header() {
  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="container-fluid d-flex flex-row justify-content-between w-100">
          <a href="/">
            <span className="navbar-brand h1" id="navbar-brand">
              <svg
                width="100"
                height="34"
                viewBox="0 0 100 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="34" fill="#0D28A6" />
              </svg>
            </span>
          </a>

          <button
            id="openMenu"
            className="btn btn-primary d-lg-none bg-transparent border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-controls="offcanvasResponsive"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 18H21"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12H21"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className="offcanvas-lg w-50 offcanvas-end"
            tabIndex="-1"
            id="offcanvasResponsive"
            aria-labelledby="offcanvasResponsiveLabel"
          >
            <div className="offcanvas-header">
              <a
                href="#hero"
                className="offcanvas-title"
                id="offcanvasResponsiveLabel"
              >
                BCR
              </a>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasResponsive"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body justify-content-sm-end me-sm-5">
              <div className="d-flex flex-column flex-lg-row align-items-start align-items-sm-center anchor">
                <a href="#service" className="navLink">
                  <button
                    type="button"
                    className="border-0 p-0"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#offcanvasResponsive"
                    aria-label="Close"
                  >
                    Our Services
                  </button>
                </a>
                <a href="#whyUs" className="navLink">
                  <button
                    type="button"
                    className="border-0 p-0"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#offcanvasResponsive"
                    aria-label="Close"
                  >
                    Why Us
                  </button>
                </a>
                <a href="#testi" className="navLink">
                  <button
                    type="button"
                    className="border-0 p-0"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#offcanvasResponsive"
                    aria-label="Close"
                  >
                    Testimony
                  </button>
                </a>
                <a href="#faq" className="navLink">
                  <button
                    type="button"
                    className="border-0 p-0"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#offcanvasResponsive"
                    aria-label="Close"
                  >
                    FAQ
                  </button>
                </a>
                <a
                  style={{
                    width: "fit-content",
                    height: "auto",
                    backgroundColor: "#5CB85F",
                    marginRight: "40px",
                  }}
                  type="button"
                  className="btn text-white"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
