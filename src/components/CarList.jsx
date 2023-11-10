import { useContext } from "react";
import CarCard from "./CarCard";
import { CarContext } from "../contexts/filterContext";
function CarList() {
  const { cars, isLoading, error, isSubmitted } =
    useContext(CarContext);

  return (
    <div
      className='d-flex justify-content-center flex-row flex-wrap  gap-5'
      id='list-container'
    >
      {isLoading && (
        <h2 className='mt-5 '>Loading...</h2>
      )}

      {(cars.length === 0 &&
        isSubmitted.state === "submitted") ||
      isSubmitted.state === "not_complete" ||
      isSubmitted.state === "not_submitted" ? (
        <h5 className='bg-black text-white d-flex justify-content-center p-3 rounded-2 w-50 mt-5'>
          {isSubmitted.state === "submitted"
            ? "Data Tidak Ditemukan"
            : isSubmitted.state === "not_complete"
            ? "Lengkapi Data Terlebih Dahulu"
            : "Lakukan Filter Data"}
        </h5>
      ) : (
        !isLoading &&
        !error &&
        cars.map((car) => (
          <div key={car.id}>
            <CarCard car={car} />
          </div>
        ))
      )}

      {error && (
        <h1 className='mt-5'>Error: {error}</h1>
      )}
    </div>
  );
}

export default CarList;
