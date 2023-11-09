import CarsCardFilter from "../components/pages.cars.components/CarsCardFilter";
import Hero from "../components/pages.landingpage.components/Hero";

function Cars() {
  return (
    <>
      <Hero landingPage={false} />
      <CarsCardFilter />
    </>
  );
}
export default Cars;
