function Menu() {
  return (
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
  );
}
export default Menu;
