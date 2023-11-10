import FilterCars from "../components/FilterCars";
import CarList from "../components/CarList";
import Hero from "../components/Hero";
import CarContextProvider from "../contexts/filterContext";

function Cars() {
  return (
    <CarContextProvider>
      <Hero landingPage={false} />
      <FilterCars />
      <CarList />
    </CarContextProvider>
  );
}

export default Cars;
