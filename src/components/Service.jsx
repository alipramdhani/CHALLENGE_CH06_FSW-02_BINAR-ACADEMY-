import ImgService from "../../public/img_service.png";
import "./Service.css";

function Services() {
  return (
    <div
      className='d-flex justify-content-center'
      id='service'
    >
      <div
        className='row gap-2 gap-sm-5 d-flex justify-content-center align-items-center'
        style={{ width: "90%" }}
      >
        <img
          className='col-12 col-sm-auto p-3'
          id='serviceImage'
          src={ImgService}
        />
        <div className='col-12 col-sm-auto p-3 d-flex flex-column gap-3 justify-content-center'>
          <div>
            <h1 id='serviceTitle'>
              {" "}
              Best Car Rental for any kind of trip
              in Bekasi!{" "}
            </h1>
            <p id='serviceDesc'>
              {" "}
              Sewa mobil di Bekasi bersama Binar
              Car Rental jaminan harga lebih murah
              dibandingkan yang lain, kondisi
              mobil baru, serta kualitas pelayanan
              terbaik untuk perjalanan wisata,
              bisnis, wedding, meeting, dll.
            </p>
          </div>
          <div
            id='serviceBenefits'
            className='d-flex flex-column align-items-start justify-content-start gap-3'
          >
            <div className='d-flex gap-3 align-items-center'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='12'
                  cy='12'
                  r='12'
                  fill='#CFD4ED'
                />
                <path
                  d='M17.3333 8L9.99996 15.3333L6.66663 12'
                  stroke='#0D28A6'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Sewa Mobil Dengan Supir di Bekasi 12
              Jam
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='12'
                  cy='12'
                  r='12'
                  fill='#CFD4ED'
                />
                <path
                  d='M17.3333 8L9.99996 15.3333L6.66663 12'
                  stroke='#0D28A6'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Sewa Mobil Lepas Kunci di Bekasi 24
              Jam
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='12'
                  cy='12'
                  r='12'
                  fill='#CFD4ED'
                />
                <path
                  d='M17.3333 8L9.99996 15.3333L6.66663 12'
                  stroke='#0D28A6'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Sewa Mobil Jangka Panjang Bulanan
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='12'
                  cy='12'
                  r='12'
                  fill='#CFD4ED'
                />
                <path
                  d='M17.3333 8L9.99996 15.3333L6.66663 12'
                  stroke='#0D28A6'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Gratis Antar - Jemput Mobil di
              Bandara
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='12'
                  cy='12'
                  r='12'
                  fill='#CFD4ED'
                />
                <path
                  d='M17.3333 8L9.99996 15.3333L6.66663 12'
                  stroke='#0D28A6'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Layanan Airport Transfer / Drop In
              Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
