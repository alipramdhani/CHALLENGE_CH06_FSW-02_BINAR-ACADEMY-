import photo from "../assets/images/img_person1.png";
import "./Testimonial.css";

function Testimonial() {
  return (
    <div
      className='d-flex justify-content-center'
      id='testi'
    >
      <div className='d-flex flex-column carouselBody'>
        <div className='d-flex flex-column align-items-center m-3 text-center gap-3'>
          <h1 id='whyTitle'>Testimonial</h1>
          <p id='whyDesc'>
            Berbagai review positif dari para
            pelanggan kami
          </p>
        </div>

        <div
          id='carouselExample'
          className='carousel slide rounded-3 border  border-opacity-25 p-3 py-5'
          style={{ backgroundColor: "#F1F3FF" }}
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <div className='d-flex justify-content-center'>
                <div className='d-flex flex-column flex-md-row gap-4 align-items-center'>
                  <img
                    className='carouselImage'
                    src={photo}
                    alt='...'
                  />

                  <div className='d-flex flex-column gap-4 gap-sm-2 align-items-center align-items-md-start'>
                    <div>
                      <svg
                        width='80'
                        height='16'
                        viewBox='0 0 80 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z'
                          fill='#F9CC00'
                        />
                        <path
                          d='M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z'
                          fill='#F9CC00'
                        />
                        <path
                          d='M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z'
                          fill='#F9CC00'
                        />
                        <path
                          d='M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z'
                          fill='#F9CC00'
                        />
                        <path
                          d='M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z'
                          fill='#F9CC00'
                        />
                      </svg>
                    </div>
                    <h id='carouselDesc'>
                      “Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum
                      dolor sit amet, consectetur
                      adipiscing elit, sed do
                      eiusmod lorem ipsum dolor
                      sit amet, consectetur
                      adipiscing elit, sed do
                      eiusmod”
                    </h>
                    <h id='carouselName'>
                      John Dee 32, Bromo
                    </h>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column flex-md-row gap-4 align-items-center">
                  <img className="carouselImage" src={photo} alt="..." />

                  <div className="d-flex flex-column gap-4 gap-sm-2 align-items-center align-items-md-start">
                    <img src={rate} />
                    <h id="carouselDesc">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </h>
                    <h id="carouselName">John Dee 32, Bromo</h>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column flex-md-row gap-4 align-items-center">
                  <img className="carouselImage" src={photo} alt="..." />

                  <div className="d-flex flex-column gap-4 gap-sm-2 align-items-center align-items-md-start">
                    <img src={rate} />
                    <h id="carouselDesc">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </h>
                    <h id="carouselName">John Dee 32, Bromo</h>
                  </div>
                </div>
              </div>
            </div> */}
            <div className='d-flex align-items-start justify-content-between'>
              <div className='carousel-control-prev d-flex align-items-start align-items-sm-center'>
                <button
                  className='bg-transparent border-0'
                  type='button'
                  data-bs-target='#carouselExample'
                  data-bs-slide='prev'
                >
                  <span
                    className=''
                    aria-hidden='true'
                  >
                    {" "}
                    <svg
                      width='57'
                      height='68'
                      viewBox='0 0 57 68'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M35.4836 51L21.2902 34L35.4836 17'
                        stroke='black'
                        strokeWidth='8'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                  <span className='visually-hidden'>
                    Previous
                  </span>
                </button>
              </div>
              <div className='carousel-control-next d-flex align-items-start align-items-sm-center'>
                <button
                  className='bg-transparent border-0'
                  type='button'
                  data-bs-target='#carouselExample'
                  data-bs-slide='next'
                >
                  <span
                    className=''
                    aria-hidden='true'
                  >
                    <svg
                      width='57'
                      height='68'
                      viewBox='0 0 57 68'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21.5164 51L35.7098 34L21.5164 17'
                        stroke='black'
                        strokeWidth='8'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                  <span className='visually-hidden'>
                    Next
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
