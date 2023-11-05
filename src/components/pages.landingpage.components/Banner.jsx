import "./Banner.css";
function BannerCTA() {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "100px" }}
    >
      <div style={{ width: "90%" }}>
        <div className="p-5 rounded-3" style={{ backgroundColor: "#0d28a6" }}>
          <div className="d-flex flex-column gap-3 align-items-center align-content-center">
            <h1 id="BannerTitle">Sewa Mobil di Bekasi Sekarang</h1>
            <p id="BannerDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="/cars"
              style={{
                width: "fit-content",
                height: "auto",
                backgroundColor: "#5cb85f",
              }}
              type="button"
              className="btn text-white"
            >
              Mulai Sewa Mobil
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCTA;
