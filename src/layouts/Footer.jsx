import "./Footer.css";
function Footer() {
  return (
    <footer
      className='p-4 bg-white w-100 flex-column flex-lg-row justify-content-center gap-2'
      id='footer'
    >
      {/* component footer */}
      <div className=' row justify-content-start justify-content-sm-center footer'>
        <div
          className='  row row-cols-1 d-flex justify-content-center col-auto'
          style={{ marginTop: "100px" }}
        >
          {/* Address */}
          <div className='  col-auto  flex-column gap-1 me-4'>
            <p className='footerText'>
              Jalan Suroyo No. 161 Mayangan Kota
              Probolonggo 672000
            </p>
            <p className='footerText'>
              binarcarrental@gmail.com
            </p>
            <p className='footerText'>
              081-233-334-808
            </p>
          </div>
          {/* Navbar */}
          <div className='  col-auto d-flex flex-column gap-1 me-4'>
            <a
              href='#service'
              className='footerAnchor'
            >
              Our Services
            </a>
            <a
              href='#whyUs'
              className='footerAnchor'
            >
              Why Us
            </a>
            <a
              href='#testi'
              className='footerAnchor'
            >
              Testimonial
            </a>
            <a
              href='#faq'
              className='footerAnchor'
            >
              FAQ
            </a>
          </div>
          {/* Sosial Media */}
          <div className='  col-auto  flex-column gap-1 me-4'>
            <p className='footerText'>
              Connect With Us
            </p>
            <div className='d-flex flex-row gap-2'>
              <a>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='16'
                    cy='16'
                    r='16'
                    fill='#0D28A6'
                  />
                  <path
                    d='M21 7.66663H18.5C17.395 7.66663 16.3352 8.10561 15.5538 8.88701C14.7724 9.66842 14.3334 10.7282 14.3334 11.8333V14.3333H11.8334V17.6666H14.3334V24.3333H17.6667V17.6666H20.1667L21 14.3333H17.6667V11.8333C17.6667 11.6123 17.7545 11.4003 17.9108 11.244C18.0671 11.0878 18.279 11 18.5 11H21V7.66663Z'
                    stroke='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>

              <a>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='16'
                    cy='16'
                    r='16'
                    fill='#0D28A6'
                  />
                  <path
                    d='M20.1666 7.66663H11.8333C9.53211 7.66663 7.66663 9.53211 7.66663 11.8333V20.1666C7.66663 22.4678 9.53211 24.3333 11.8333 24.3333H20.1666C22.4678 24.3333 24.3333 22.4678 24.3333 20.1666V11.8333C24.3333 9.53211 22.4678 7.66663 20.1666 7.66663Z'
                    stroke='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M19.3334 15.475C19.4362 16.1685 19.3178 16.8769 18.9948 17.4992C18.6719 18.1215 18.161 18.6262 17.5347 18.9414C16.9085 19.2566 16.1987 19.3663 15.5065 19.2549C14.8143 19.1436 14.1748 18.8167 13.6791 18.321C13.1833 17.8252 12.8565 17.1857 12.7451 16.4935C12.6337 15.8013 12.7434 15.0916 13.0586 14.4653C13.3739 13.8391 13.8785 13.3281 14.5009 13.0052C15.1232 12.6823 15.8315 12.5638 16.525 12.6667C17.2325 12.7716 17.8874 13.1012 18.3931 13.6069C18.8988 14.1126 19.2285 14.7676 19.3334 15.475Z'
                    stroke='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M20.5834 11.4166H20.5917'
                    stroke='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>

              <a>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='16'
                    cy='16'
                    r='16'
                    fill='#0D28A6'
                  />
                  <path
                    d='M25.1667 8.49996C24.3687 9.06285 23.4851 9.49338 22.55 9.77496C22.0482 9.19788 21.3812 8.78887 20.6392 8.60323C19.8973 8.41759 19.1163 8.46429 18.4018 8.737C17.6873 9.00972 17.0737 9.49529 16.6442 10.1281C16.2146 10.7608 15.9898 11.5102 16 12.275V13.1083C14.5356 13.1463 13.0844 12.8215 11.7759 12.1628C10.4673 11.5042 9.34197 10.5322 8.50004 9.33329C8.50004 9.33329 5.16671 16.8333 12.6667 20.1666C10.9505 21.3316 8.906 21.9157 6.83337 21.8333C14.3334 26 23.5 21.8333 23.5 12.25C23.4993 12.0178 23.477 11.7863 23.4334 11.5583C24.2839 10.7195 24.8841 9.66055 25.1667 8.49996V8.49996Z'
                    stroke='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>

              <a>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='16'
                    cy='16'
                    r='16'
                    fill='#0D28A6'
                  />
                  <path
                    d='M9.33329 9.33337H22.6666C23.5833 9.33337 24.3333 10.0834 24.3333 11V21C24.3333 21.9167 23.5833 22.6667 22.6666 22.6667H9.33329C8.41663 22.6667 7.66663 21.9167 7.66663 21V11C7.66663 10.0834 8.41663 9.33337 9.33329 9.33337Z'
                    stroke='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M24.3333 11L16 16.8333L7.66663 11'
                    stroke='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>

              <a>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='16'
                    cy='16'
                    r='16'
                    fill='#0D28A6'
                  />
                  <path
                    d='M19.3333 15.1666V11.8333M23.5 7.66663H8.5V21H12.6667V24.3333L16 21H20.1667L23.5 17.6666V7.66663ZM15.1667 15.1666V11.8333V15.1666Z'
                    stroke='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* Copyright */}
          <div className='  col-1  flex-column gap-1 me-4'>
            <p className='footerText'>
              Copyright Binar 2022
            </p>

            <svg
              width='100'
              height='34'
              viewBox='0 0 100 34'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                width='100'
                height='34'
                fill='#0D28A6'
              />
            </svg>
          </div>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
