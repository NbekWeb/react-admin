import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <section
      className="sec1"
      style={{
        backgroundImage:
          "url('/img/telegram-cloud-photo-size-2-5271946114322522287-y 1.png')",
      }}
    >
      <div className="sec1-bg"></div>
      <div className="sec1-container-bg" style={{ bottom: 0 }}></div>
      <div className="container">
        <div className="head-mob">
          <ul className="head-menu">
            <li>
              <NavLink to="/aboutUs">О нас</NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className="btn-active-mob">
                Контакты
              </NavLink>
            </li>
            <li>
              <NavLink to="/vakansi">Вакансии</NavLink>
            </li>
          </ul>
        </div>
        <div className="contacts-container">
          <div className="contacts-title">Контакты</div>
          <div className="contacts-container-into">
            <div className="contacts-container-content">
              <div className="contacts-container-content-part">
                <p>Приезжайте:</p>
                <div className="contacts-container-content-part-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M19.9998 22.384C22.8717 22.384 25.1998 20.0559 25.1998 17.184C25.1998 14.3122 22.8717 11.984 19.9998 11.984C17.1279 11.984 14.7998 14.3122 14.7998 17.184C14.7998 20.0559 17.1279 22.384 19.9998 22.384Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6.0335 14.15C9.31683 -0.283334 30.7002 -0.266667 33.9668 14.1667C35.8835 22.6333 30.6168 29.8 26.0002 34.2333C22.6502 37.4667 17.3502 37.4667 13.9835 34.2333C9.3835 29.8 4.11683 22.6167 6.0335 14.15Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                  г. Пятигорск, Черкесское шоссе 15
                </div>
              </div>
              <div className="contacts-container-content-part">
                <p>Пишите:</p>
                <a
                  href="mailto:example@yandex.ru"
                  className="contacts-container-content-part-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M20.0002 34.1667H11.6668C6.66683 34.1667 3.3335 31.6667 3.3335 25.8333V14.1667C3.3335 8.33333 6.66683 5.83333 11.6668 5.83333H28.3335C33.3335 5.83333 36.6668 8.33333 36.6668 14.1667V19.1667"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.3332 15L23.1165 19.1667C21.3998 20.5333 18.5832 20.5333 16.8665 19.1667L11.6665 15"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M32.0166 24.6167L26.1166 30.5167C25.8833 30.75 25.6666 31.1833 25.6166 31.5L25.2999 33.75C25.1832 34.5667 25.7499 35.1334 26.5666 35.0167L28.8166 34.7C29.1332 34.65 29.5832 34.4333 29.7999 34.2L35.6999 28.3C36.7166 27.2834 37.1999 26.1 35.6999 24.6C34.2166 23.1167 33.0332 23.6 32.0166 24.6167Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M31.1665 25.4667C31.6665 27.2667 33.0665 28.6667 34.8665 29.1667"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  example@yandex.ru
                </a>
              </div>
            </div>
            <div className="contacts-container-content">
              <div className="contacts-container-content-part">
                <p>Наши соц. сети:</p>
                <div className="contacts-container-content-part-social">
                  <a href="https://t.me/+37377844221">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <circle cx="15" cy="15" r="15" fill="#2F89CE" />
                      <path
                        d="M7.01303 15.2806L10.4616 16.5665L11.8059 20.8918C11.8644 21.184 12.2151 21.2425 12.4489 21.0671L14.3778 19.489C14.5531 19.3136 14.8454 19.3136 15.0792 19.489L18.5277 22.0023C18.7615 22.1777 19.1122 22.0608 19.1707 21.7685L21.7425 9.49399C21.8009 9.20174 21.5087 8.90949 21.2164 9.02639L7.01303 14.5207C6.66232 14.6376 6.66232 15.1637 7.01303 15.2806ZM11.6306 15.9235L18.4108 11.7735C18.5277 11.7151 18.6446 11.8905 18.5277 11.9489L12.975 17.151C12.7996 17.3263 12.6242 17.5601 12.6242 17.8524L12.4489 19.2552C12.4489 19.4305 12.1566 19.489 12.0982 19.2552L11.3968 16.6834C11.2214 16.3911 11.3384 16.0404 11.6306 15.9235Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a href="https://wa.me/+37377844221">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <circle cx="15" cy="15" r="15" fill="#48C95F" />
                      <path
                        d="M20.9451 9.04687C19.4634 7.57031 17.4878 6.75 15.4024 6.75C11.0671 6.75 7.55488 10.25 7.55488 14.5703C7.55488 15.9375 7.93902 17.3047 8.59756 18.4531L7.5 22.5L11.6707 21.4062C12.8232 22.0078 14.0854 22.3359 15.4024 22.3359C19.7378 22.3359 23.25 18.8359 23.25 14.5156C23.1951 12.4922 22.4268 10.5234 20.9451 9.04687ZM19.189 17.3594C19.0244 17.7969 18.2561 18.2344 17.872 18.2891C17.5427 18.3437 17.1037 18.3438 16.6646 18.2344C16.3902 18.125 16.0061 18.0156 15.5671 17.7969C13.5915 16.9766 12.3293 15.0078 12.2195 14.8438C12.1098 14.7344 11.3963 13.8047 11.3963 12.8203C11.3963 11.8359 11.8902 11.3984 12.0549 11.1797C12.2195 10.9609 12.439 10.9609 12.6037 10.9609C12.7134 10.9609 12.878 10.9609 12.9878 10.9609C13.0976 10.9609 13.2622 10.9062 13.4268 11.2891C13.5915 11.6719 13.9756 12.6562 14.0305 12.7109C14.0854 12.8203 14.0854 12.9297 14.0305 13.0391C13.9756 13.1484 13.9207 13.2578 13.811 13.3672C13.7012 13.4766 13.5915 13.6406 13.5366 13.6953C13.4268 13.8047 13.3171 13.9141 13.4268 14.0781C13.5366 14.2969 13.9207 14.8984 14.5244 15.4453C15.2927 16.1016 15.8963 16.3203 16.1159 16.4297C16.3354 16.5391 16.4451 16.4844 16.5549 16.375C16.6646 16.2656 17.0488 15.8281 17.1585 15.6094C17.2683 15.3906 17.4329 15.4453 17.5976 15.5C17.7622 15.5547 18.75 16.0469 18.9146 16.1562C19.1341 16.2656 19.2439 16.3203 19.2988 16.375C19.3537 16.5391 19.3537 16.9219 19.189 17.3594Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a href="viber://chat?number=+37377844221">
                    <img src="/img/free-icon-viber-3670059.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="contacts-container-content-part">
                <p>Звоните:</p>
                <a
                  href="tel:+70000000000"
                  className="contacts-container-content-part-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M36.6168 30.55C36.6168 31.15 36.4835 31.7667 36.2002 32.3667C35.9168 32.9667 35.5502 33.5333 35.0668 34.0667C34.2502 34.9667 33.3502 35.6167 32.3335 36.0333C31.3335 36.45 30.2502 36.6667 29.0835 36.6667C27.3835 36.6667 25.5668 36.2667 23.6502 35.45C21.7335 34.6333 19.8168 33.5333 17.9168 32.15C16.0002 30.75 14.1835 29.2 12.4502 27.4833C10.7335 25.75 9.1835 23.9333 7.80016 22.0333C6.4335 20.1333 5.3335 18.2333 4.5335 16.35C3.7335 14.45 3.3335 12.6333 3.3335 10.9C3.3335 9.76666 3.5335 8.68333 3.9335 7.68333C4.3335 6.66666 4.96683 5.73333 5.85016 4.89999C6.91683 3.85 8.0835 3.33333 9.31683 3.33333C9.7835 3.33333 10.2502 3.43333 10.6668 3.63333C11.1002 3.83333 11.4835 4.13333 11.7835 4.56666L15.6502 10.0167C15.9502 10.4333 16.1668 10.8167 16.3168 11.1833C16.4668 11.5333 16.5502 11.8833 16.5502 12.2C16.5502 12.6 16.4335 13 16.2002 13.3833C15.9835 13.7667 15.6668 14.1667 15.2668 14.5667L14.0002 15.8833C13.8168 16.0667 13.7335 16.2833 13.7335 16.55C13.7335 16.6833 13.7502 16.8 13.7835 16.9333C13.8335 17.0667 13.8835 17.1667 13.9168 17.2667C14.2168 17.8167 14.7335 18.5333 15.4668 19.4C16.2168 20.2667 17.0168 21.15 17.8835 22.0333C18.7835 22.9167 19.6502 23.7333 20.5335 24.4833C21.4002 25.2167 22.1168 25.7167 22.6835 26.0167C22.7668 26.05 22.8668 26.1 22.9835 26.15C23.1168 26.2 23.2502 26.2167 23.4002 26.2167C23.6835 26.2167 23.9002 26.1167 24.0835 25.9333L25.3502 24.6833C25.7668 24.2667 26.1668 23.95 26.5502 23.75C26.9335 23.5167 27.3168 23.4 27.7335 23.4C28.0502 23.4 28.3835 23.4667 28.7502 23.6167C29.1168 23.7667 29.5002 23.9833 29.9168 24.2667L35.4335 28.1833C35.8668 28.4833 36.1668 28.8333 36.3502 29.25C36.5168 29.6667 36.6168 30.0833 36.6168 30.55Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M30.8333 15C30.8333 14 30.05 12.4667 28.8833 11.2167C27.8167 10.0667 26.4 9.16666 25 9.16666"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M36.6667 15C36.6667 8.55 31.45 3.33333 25 3.33333"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  +7 (000) 000 00-00
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
