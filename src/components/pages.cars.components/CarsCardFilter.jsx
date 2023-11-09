import {
  ChevronDown,
  Users,
  Clock,
  Calendar,
} from "react-feather";
import "./CarsCardFilter.css";
//fungsi filter data Cars
function CarsCardFilter() {
  // handle Input change
  // handle submit
  // styling font filter box
  const fontLabel = {
    fontFamily: "Rubik",
    fontSize: "14px",
  };
  const fontText = {
    fontFamily: "Rubik",
    fontSize: "12px",
    appearance: "none",
  };
  return (
    //Tampilan filter box
    <div
      className='d-flex w-100   position-absolute text-start justify-content-center'
      id='box'
    >
      <div
        className=' p-4 position-absolute bg-white shadow-lg w-75 rounded-3 d-flex flex-column flex-lg-row justify-content-center gap-2'
        style={{ marginTop: "-40px" }}
      >
        {/* Component Tipe Driver */}
        <div className='d-flex flex-column w-100 justify-content-between'>
          <label htmlFor='Tipe'>
            Tipe Driver
          </label>
          <div className='input-group'>
            <select
              className='icon-1  form-control border-end-0 input'
              name='type'
              id='tipe'
              aria-label='Pilih Tipe Driver'
            >
              <option value='default'>
                --- Pilih Tipe Driver---
              </option>
              <option value={true}>
                Dengan Sopir
              </option>
              <option value={false}>
                Tanpa Supir (Lepas Kunci)
              </option>
            </select>
            <span
              class='input-group-text'
              id='basic-addon1'
            >
              {/* icon users */}
              <ChevronDown
                style={{
                  width: "16",
                  height: "16",
                }}
              />
            </span>
          </div>
        </div>
        {/* component Tanggal */}
        <div className='d-flex flex-column w-100 justify-content-between'>
          <label htmlFor='tanggal'>Tanggal</label>
          <div className='input-group'>
            <input
              id='tanggal'
              type='date'
              name='date'
              style={{
                fontSize: "small",
                fontFamily: "Rubik",
              }}
              className='icon-2 form-control border-end-0 input'
            />
            <span
              class='input-group-text'
              id='basic-addon1'
            >
              {/* icon users */}
              <Calendar
                style={{
                  width: "16",
                  height: "16",
                }}
              />
            </span>
          </div>
        </div>
        {/* component Waktu */}
        <div className='d-flex flex-column w-100 justify-content-between'>
          <label htmlFor='Waktu'>
            Waktu Jemput/Ambil
          </label>
          <div className='input-group'>
            <select
              className='icon-1 form-control border-end-0 input'
              name='type'
              id='tipe'
              aria-label='Pilih Tipe Driver'
            >
              <option value='default'>
                --- Pilih Waktu ---
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
              class='input-group-text'
              id='basic-addon1'
            >
              {/* icon users */}
              <Clock
                style={{
                  width: "16",
                  height: "16",
                }}
              />
            </span>
          </div>
        </div>
        {/* component Jumlah Penumpang */}
        <div className='d-flex flex-column w-100 justify-content-between'>
          <label htmlFor='capacity'>
            Jumlah Penumpang (Opsional)
          </label>
          <div className='input-group'>
            <input
              type='number'
              name='capacity'
              id='capacity'
              style={{
                fontSize: "small",
                fontFamily: "Rubik",
              }}
              className='icon-3 form-control border-end-0 input'
              placeholder='Jumlah Penumpang'
            />
            <span
              class='input-group-text'
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
              fontSize: "12px",
              fontFamily: "Rubik",
            }}
            type='button'
            className='w-100 h-auto p-2 btn text-white rounded-1'
            id='load-btn'
          >
            Cari Mobil
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarsCardFilter;
