import {
  Users,
  Calendar,
  Setting,
} from "react-feather";
// Fungsi-fungsi Cars Card
function CarsCard({ car }) {
  // funtion Render Image
  // fungsi Number dengan titik
  function NumberWithPoint(num) {
    return num
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div>
      <img src='' alt='' />
      <div>
        <h5></h5>
        <h3></h3>
        <p></p>
        <div>
          <Users /> <p> Orang </p>
        </div>
        <div>
          <Users /> <p></p>
        </div>
        <div>
          <Users /> <p> Tahun </p>
        </div>
        <a href=''>Pilih Mobil</a>
      </div>
    </div>
  );
}

export default CarsCard;
