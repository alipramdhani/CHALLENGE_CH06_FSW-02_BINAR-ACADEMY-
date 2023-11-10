import { Users, Calendar, Settings } from "react-feather";

function CarCard({ car }) {
  function getImgUrl(name) {
    return new URL(`${name}`, "http://localhost:5173/src/assets/").href;
  }
  function thousandSeparator(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="card text-start" style={{ width: "20rem" }}>
      <img
        style={{ width: "100%", height: "200px" }}
        className="card-img-top object-fit-cover"
        src={getImgUrl(car.image)}
        alt="Card image cap"
      />
      <div className="card-body d-flex flex-column gap-3">
        <h5 style={{ fontSize: "14px", fontWight: "bold" }}>
          {" "}
          {car.model} / {car.type}
        </h5>
        <h3
          style={{ fontSize: "16px", fontWeight: "bolder" }}
          className="card-title"
        >
          Rp {thousandSeparator(car.rentPerDay)} / hari
        </h3>
        <p style={{ fontSize: "14px", height: "60px" }} className="card-text">
          {car.description}
        </p>

        <div className="d-flex flex-row gap-2 align-items-center">
          <Users />
          <p style={{ fontSize: "14px" }} className="card-text">
            {car.capacity} Orang
          </p>
        </div>

        <div className="d-flex flex-row gap-2 align-items-center">
          <Settings />
          <p style={{ fontSize: "14px" }} className="card-text">
            {car.transmission}
          </p>
        </div>

        <div className="d-flex flex-row gap-2 align-items-center">
          <Calendar />
          <p style={{ fontSize: "14px" }} className="card-text">
            Tahun {car.year}
          </p>
        </div>
        <a
          href="#"
          className="btn rounded-1 w-100"
          style={{ backgroundColor: "#5CB85F", color: "white" }}
        >
          Pilih Mobil
        </a>
      </div>
    </div>
  );
}

export default CarCard;
