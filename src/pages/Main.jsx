import { useState } from "react";

import { NavLink } from "react-router-dom";

const MyComponent = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      className="sec1"
      style={{
        backgroundImage: `url("/img/telegram-cloud-photo-size-2-5271946114322522287-y 1.png")`,
      }}
    >
      <div className="sec1-bg"></div>
      <div className="sec1-container-bg"></div>
      <div className="container">
        <div className="head-mob">
          <ul className="head-menu">
            <li>
              <NavLink to="/aboutUs">О нас</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Контакты</NavLink>
            </li>
            <li>
              <NavLink to="/vakansi">Вакансии</NavLink>
            </li>
          </ul>
        </div>
        <div className="sec1-container">
          <div className="sec1-container-text">
            <h1>
              Stability and strength of our team - A guarantee of quality for
              your projects!
            </h1>
            <p>
              We believe that every brand has a unique story to tell, and we
              strive to bring that story to life through innovative solutions.
              From concept to implementation, we work hand-in-hand with our
              clients to develop innovative digital products and create a
              compelling online presence that sets them apart from the
              competition.
            </p>
          </div>
          <div className="video__about-us">
            {!showVideo ? (
              <div
                className="video-prev"
                style={{
                  cursor: "pointer",
                  backgroundImage: `url('/img/Rectangle 7.png')`,
                }}
                onClick={() => setShowVideo(true)}
              >
                <div className="video-prev-bg"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="217"
                  height="217"
                  viewBox="0 0 217 217"
                  fill="none"
                >
                  <rect
                    x="9"
                    y="9"
                    width="200"
                    height="200"
                    rx="100"
                    fill="white"
                  />
                  <path
                    d="M108.5 0C48.5779 0 0 48.5771 0 108.5C0 168.423 48.5779 217 108.5 217C168.422 217 217 168.423 217 108.5C217 48.5771 168.422 0 108.5 0ZM146 114.251L91.7503 148.158C90.6526 148.843 89.4044 149.188 88.1562 149.188C87.0255 149.188 85.893 148.906 84.8682 148.336C82.7126 147.141 81.375 144.873 81.375 142.406V74.5938C81.375 72.1271 82.7126 69.8587 84.8682 68.6635C87.0238 67.4616 89.6596 67.5345 91.7503 68.8424L146 102.749C147.982 103.99 149.188 106.163 149.188 108.5C149.188 110.837 147.982 113.01 146 114.251Z"
                    fill="#485865"
                  />
                </svg>
              </div>
            ) : (
              <div className="video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/bSMZgXzC9AA?controls=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="cliensts" id="cliensts">
        <div className="container">
          <div className="cliensts-container">
            <p>Наши клиенты</p>
            <div className="cliensts-container-logo">
              <a to="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="152"
                  height="46"
                  viewBox="0 0 152 46"
                  fill="none"
                >
                  <g clipPath="url(#clip0_110_956)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M37.9209 16.1621V37.2972H45.5051V44.7567H37.9209C33.7497 44.7567 30.3369 41.4 30.3369 37.2972H29.7047C27.4296 41.5864 23.2582 44.7567 18.3284 45.6892C17.3172 45.8757 16.2428 46 15.1684 46C6.76258 46 0 39.3487 0 31.081C0 22.8136 6.76258 16.1621 15.1684 16.1621V7.45946H7.5842C3.41288 7.45946 0 4.1027 0 0H13.2723C13.2723 5.15946 17.5069 9.32433 22.7526 9.32433V16.1621H30.3369V7.45946H22.7526C18.5813 7.45946 15.1684 4.1027 15.1684 0H30.3369C34.5081 0 37.9209 3.35676 37.9209 7.45946V16.1621ZM22.1211 23H29.7053V27.7755C29.0259 26.7706 27.8642 26.1082 26.5452 26.1082C24.4508 26.1082 22.7531 27.778 22.7531 29.8379C22.7531 31.8977 24.4508 33.5676 26.5452 33.5676C27.7406 33.5676 28.8069 33.0235 29.5019 32.1733C28.7093 35.4571 25.6933 37.919 22.1211 37.919C17.9497 37.919 14.5369 34.5621 14.5369 30.4595C14.5369 26.3567 17.9497 23 22.1211 23ZM45.5054 0H54.3536L58.7777 37.6703H59.5993L66.3619 0H76.9798L83.6792 37.6703H84.5007L88.9881 0H97.4571L91.0737 44.7567H77.9911L71.9236 10.0081H71.1021L64.9082 44.7567H51.8256L45.5054 0ZM99.7322 0H108.58L113.005 37.6703H113.826L120.589 0H131.207L137.906 37.6703H138.728L143.215 0H151.684L145.301 44.7567H132.218L126.15 10.0081H125.329L119.135 44.7567H106.052L99.7322 0Z"
                      fill="#ABCFDD"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_110_956">
                      <rect width="152" height="46" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a to="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="46"
                  viewBox="0 0 48 46"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M38.9189 37.2972V16.1621V7.45946C38.9189 3.35676 35.4162 0 31.1352 0H15.5676C15.5676 4.1027 19.0703 7.45946 23.3514 7.45946H31.1352V16.1621H23.3514V9.32433C17.9676 9.32433 13.6216 5.15946 13.6216 0H0C0 4.1027 3.5027 7.45946 7.78379 7.45946H15.5676V16.1621C6.94055 16.1621 0 22.8136 0 31.081C0 39.3487 6.94055 46 15.5676 46C16.6703 46 17.7729 45.8757 18.8108 45.6892C23.8703 44.7567 28.1514 41.5864 30.4865 37.2972H31.1352C31.1352 41.4 34.6379 44.7567 38.9189 44.7567H46.7027V37.2972H38.9189ZM30.4871 23H22.7033C18.4221 23 14.9194 26.3567 14.9194 30.4595C14.9194 34.5621 18.4221 37.919 22.7033 37.919C26.3694 37.919 29.4648 35.4571 30.2783 32.1733C29.565 33.0235 28.4706 33.5676 27.2438 33.5676C25.0943 33.5676 23.3519 31.8977 23.3519 29.8379C23.3519 27.778 25.0943 26.1082 27.2438 26.1082C28.5975 26.1082 29.7897 26.7706 30.4871 27.7755V23Z"
                    fill="#8BAAB7"
                  />
                </svg>
              </a>
              <a to="">
                <img src="/img/Слой 2 1.png" alt="" />
              </a>
              <a to="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="46"
                  viewBox="0 0 48 46"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M38.9189 37.2972V16.1621V7.45946C38.9189 3.35676 35.4162 0 31.1352 0H15.5676C15.5676 4.1027 19.0703 7.45946 23.3514 7.45946H31.1352V16.1621H23.3514V9.32433C17.9676 9.32433 13.6216 5.15946 13.6216 0H0C0 4.1027 3.5027 7.45946 7.78379 7.45946H15.5676V16.1621C6.94055 16.1621 0 22.8136 0 31.081C0 39.3487 6.94055 46 15.5676 46C16.6703 46 17.7729 45.8757 18.8108 45.6892C23.8703 44.7567 28.1514 41.5864 30.4865 37.2972H31.1352C31.1352 41.4 34.6379 44.7567 38.9189 44.7567H46.7027V37.2972H38.9189ZM30.4871 23H22.7033C18.4221 23 14.9194 26.3567 14.9194 30.4595C14.9194 34.5621 18.4221 37.919 22.7033 37.919C26.3694 37.919 29.4648 35.4571 30.2783 32.1733C29.565 33.0235 28.4706 33.5676 27.2438 33.5676C25.0943 33.5676 23.3519 31.8977 23.3519 29.8379C23.3519 27.778 25.0943 26.1082 27.2438 26.1082C28.5975 26.1082 29.7897 26.7706 30.4871 27.7755V23Z"
                    fill="#8BAAB7"
                  />
                </svg>
              </a>
              <a to="">
                <img src="/img/Group 25761.png" alt="" />
              </a>
              <a to="">
                <img src="/img/vivalogo 1.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
