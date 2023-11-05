function Faq() {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "100px" }}
      id="faq"
    >
      <div className="d-flex flex-column flex-sm-row" style={{ width: "90%" }}>
        <div className="d-flex flex-column mb-3 text-center text-sm-start">
          <h1 id="whyTitle">Frequently Asked Question</h1>
          <p id="whyDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div
          className="accordion d-flex flex-column gap-4 w-100"
          id="accordionExample"
        >
          <div className="accordion-item border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed rounded-1 border border-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Apa saja syarat yang dibutuhkan?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse border-1 border rounded-1"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                varius, ligula ut imperdiet sodales, risus mi maximus felis,
                consectetur malesuada leo velit in diam. Quisque eget gravida
                augue. In mi eros, accumsan non blandit sed, finibus sed odio.
                Aliquam nec rutrum urna. Donec venenatis lacinia quam sed
                scelerisque. Donec nec tempor mi. Proin viverra rutrum
                facilisis.
              </div>
            </div>
          </div>
          <div className="accordion-item border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed rounded-1 border border-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Berapa hari minimal sewa mobil lepas kunci?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse border border-1 rounded-1"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                varius, ligula ut imperdiet sodales, risus mi maximus felis,
                consectetur malesuada leo velit in diam. Quisque eget gravida
                augue. In mi eros, accumsan non blandit sed, finibus sed odio.
                Aliquam nec rutrum urna. Donec venenatis lacinia quam sed
                scelerisque. Donec nec tempor mi. Proin viverra rutrum
                facilisis.
              </div>
            </div>
          </div>
          <div className="accordion-item border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed border border-1 rounded-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Berapa hari sebelumnya sebaiknya booking sewa mobil?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse border border-1 rounded-1"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                varius, ligula ut imperdiet sodales, risus mi maximus felis,
                consectetur malesuada leo velit in diam. Quisque eget gravida
                augue. In mi eros, accumsan non blandit sed, finibus sed odio.
                Aliquam nec rutrum urna. Donec venenatis lacinia quam sed
                scelerisque. Donec nec tempor mi. Proin viverra rutrum
                facilisis.
              </div>
            </div>
          </div>

          <div className="accordion-item border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed border border-1 rounded-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Apakah Ada biaya antar-jemput?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse border border-1 rounded-1"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                varius, ligula ut imperdiet sodales, risus mi maximus felis,
                consectetur malesuada leo velit in diam. Quisque eget gravida
                augue. In mi eros, accumsan non blandit sed, finibus sed odio.
                Aliquam nec rutrum urna. Donec venenatis lacinia quam sed
                scelerisque. Donec nec tempor mi. Proin viverra rutrum
                facilisis.
              </div>
            </div>
          </div>

          <div className="accordion-item border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed border border-1 rounded-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Bagaimana jika terjadi kecelakaan
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse border border-1 rounded-1"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                varius, ligula ut imperdiet sodales, risus mi maximus felis,
                consectetur malesuada leo velit in diam. Quisque eget gravida
                augue. In mi eros, accumsan non blandit sed, finibus sed odio.
                Aliquam nec rutrum urna. Donec venenatis lacinia quam sed
                scelerisque. Donec nec tempor mi. Proin viverra rutrum
                facilisis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
