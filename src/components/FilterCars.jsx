import {
  ChevronDown,
  Users,
  Clock,
  Calendar,
} from "react-feather";
import { useContext, useState } from "react";
import { CarContext } from "../contexts/filterContext";
import "./FilterCars.css";
function FilterCars() {
  const { carFilter } = useContext(CarContext);
  const [filter, setFilter] = useState({
    type: "",
    date: "",
    time: "",
    capacity: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    carFilter(
      filter.type,
      filter.date,
      filter.time,
      filter.capacity
    );
    console.log(filter);
  };

  return (
    <div
      className='d-flex justify-content-center w-100 bg-white position-absolute text-start '
      id='box'
    >
      <form
        onSubmit={handleSubmit}
        className='d-flex justify-content-center'
      >
        <div
          className='p-4 position-absolute bg-white shadow-lg w-75 rounded-3 d-flex flex-column flex-lg-row justify-content-center gap-2'
          style={{ marginTop: "-40px" }}
        >
          {/* Component Tipe Driver */}
          <div className='d-flex flex-column w-100 justify-content-between'>
            <label htmlFor='tipe'>
              Tipe Driver
            </label>
            <div className='input-group'>
              <select
                id='tipe'
                name='type'
                style={{
                  fontSize: "small",
                  fontFamily: "Rubik",
                }}
                className='form-control border-end-0 input'
                onChange={handleInputChange}
              >
                <option value='default'>
                  Pilih Tipe Driver
                </option>
                <option value={true}>
                  Dengan Sopir
                </option>
                <option value={false}>
                  Tanpa Sopir (Lepas Kunci)
                </option>
              </select>
              <span
                className='input-group-text'
                id='basic-addon1'
              >
                {/* icon ChevronDown */}
                <ChevronDown
                  style={{
                    width: "16",
                    height: "16",
                  }}
                />
              </span>
            </div>
          </div>

          {/* Component Tanggal */}
          <div className='d-flex flex-column w-100 justify-content-between'>
            <label htmlFor='tanggal'>
              Tanggal
            </label>
            <div className='input-group'>
              <input
                id='tanggal'
                type='date'
                name='date'
                style={{
                  fontSize: "small",
                  fontFamily: "Rubik",
                }}
                className='form-control border-end-0 input'
                onChange={handleInputChange}
              />
              <span
                className='input-group-text'
                id='basic-addon1'
              >
                {/* icon Calendar */}
                <Calendar
                  style={{
                    width: "16",
                    height: "16",
                  }}
                />
              </span>
            </div>
          </div>

          {/* Component Waktu */}
          <div className='d-flex flex-column w-100 justify-content-between'>
            <label htmlFor='waktu'>
              Waktu Jemput/Ambil
            </label>
            <div className='input-group'>
              <select
                id='waktu'
                name='time'
                style={{
                  fontSize: "small",
                  fontFamily: "Rubik",
                }}
                className='form-control border-end-0 input'
                onChange={handleInputChange}
              >
                <option
                  defaultValue={null}
                  value='false'
                >
                  Pilih Waktu
                </option>
                <option value='08:00'>
                  08:00 WIB
                </option>
                <option value='09:00'>
                  09:00 WIB
                </option>
                <option value='10:00'>
                  10:00 WIB
                </option>
                <option value='11:00'>
                  11:00 WIB
                </option>
                <option value='12:00'>
                  12:00 WIB
                </option>
              </select>
              <span
                className='input-group-text'
                id='basic-addon1'
              >
                {/* icon Clock */}
                <Clock
                  style={{
                    width: "16",
                    height: "16",
                  }}
                />
              </span>
            </div>
          </div>

          {/* Component Jumlah Penumpang */}
          <div className='d-flex flex-column w-100 justify-content-between'>
            <label htmlFor='jumlah'>
              Jumlah Penumpang (Opsional)
            </label>
            <div className='input-group'>
              <input
                id='jumlah'
                type='number'
                name='capacity'
                placeholder='Jumlah Penumpang'
                style={{
                  fontSize: "small",
                  fontFamily: "Rubik",
                }}
                className='form-control border-end-0 input'
                onChange={handleInputChange}
              />
              <span
                className='input-group-text'
                id='basic-addon1'
              >
                {/* icon users */}
                <Users
                  style={{
                    width: "16",
                    height: "16",
                  }}
                />
              </span>
            </div>
          </div>

          {/* Button Submit */}
          <div className='d-flex align-items-end w-100'>
            <button
              style={{
                backgroundColor: "#5CB85F",
                fontSize: "small",
                fontFamily: "Rubik",
              }}
              type='submit'
              className='w-100 h-auto p-2 btn text-white rounded-1'
              id='load-btn'
            >
              Cari Mobil
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FilterCars;
