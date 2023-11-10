import {
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export const CarContext = createContext({
  cars: [],
  carFilter: () => {},
  isLoading: false,
  error: "",
  isSubmitted: true,
});

function carListReducer(state, action) {
  if (action.type == "FILTER") {
    const filteredCars = [];
    const carsData = action.payload.carsData;

    const carList = carsData.filter((cars) => {
      const pickUpDate = new Date(
        cars.availableAt
      ).getTime();
      const date = new Date(
        `${action.payload.date} ${action.payload.pickUpTime}`
      ).getTime();
      return (
        cars.available ==
          JSON.parse(action.payload.driverType) &&
        date >= pickUpDate &&
        cars.capacity >= action.payload.passenger
      );
    });

    filteredCars.push(...carList);
    return {
      cars: filteredCars,
    };
  }
  return state;
}

export default function CarContextProvider({
  children,
}) {
  const [carListState, carListDispatch] =
    useReducer(carListReducer, {
      cars: [],
    });

  const submitState = {
    SUBMITTED: "submitted",
    NOT_SUBMITTED: "not_submitted",
    NOT_COMPLETE: "not_complete",
  };

  const [carsData, setCarsData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState({
    state: submitState.NOT_SUBMITTED,
  });

  useEffect(() => {
    async function getCars() {
      setIsLoading(true);
      try {
        setError("");
        const response = await fetch(
          "https:raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
        );
        const data = await response.json();
        setCarsData(data);
        setIsLoading(false);
      } catch (error) {
        console.error(
          "Error fetching data:",
          error.message
        );
        setError(error.message);
        setIsLoading(false);
      }
    }
    getCars();
  }, []);

  function handleCarFilter(
    driverType,
    date,
    pickUpTime,
    passenger
  ) {
    setIsSubmitted({
      state: submitState.NOT_COMPLETE,
    });
    carListState.cars = [];
    if (
      driverType != "" &&
      date != "" &&
      pickUpTime != ""
    ) {
      carListDispatch({
        type: "FILTER",
        payload: {
          driverType,
          date,
          pickUpTime,
          passenger,
          carsData: carsData,
        },
      });
      setIsSubmitted({
        state: submitState.SUBMITTED,
      });
    }
  }

  const ctxValue = {
    cars: carListState.cars,
    carFilter: handleCarFilter,
    isLoading: isLoading,
    error: error,
    isSubmitted: isSubmitted,
  };

  return (
    <CarContext.Provider value={ctxValue}>
      {" "}
      {children}{" "}
    </CarContext.Provider>
  );
}
