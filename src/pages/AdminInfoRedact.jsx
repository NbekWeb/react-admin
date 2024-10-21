import React from "react";

const AdminInfoRedact = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header-container">
            <a href="">
              <img src="/img/logo-myd.svg" alt="Logo" />
            </a>
            <div className="header-container-right">
              <div className="header-container-right-avatar">
                <img src="/img/memoji.png" alt="Avatar" />
              </div>
              <div className="header-container-right-text">
                <span>Admin</span>
                <a href="">Выйти</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="project">
        <div className="container">
          <div className="project-container">
            <div className="project-container-title">
              Личные данные пользователя
            </div>
            <div className="admin-info-avatar">
              <img
                src="/img/memoji-av.png"
                alt="Admin Avatar"
                className="admin-info-avatar-img"
              />
              <svg
                className="admin-info-avatar-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
              >
                <path
                  d="M27 30C30.3137 30 33 27.3137 33 24C33 20.6863 30.3137 18 27 18C23.6863 18 21 20.6863 21 24C21 27.3137 23.6863 30 27 30Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M39 6H27C12 6 6 12 6 27V45C6 60 12 66 27 66H45C60 66 66 60 66 45V30"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M57.4206 7.76996L46.5306 18.66C46.1106 19.08 45.6906 19.89 45.6306 20.49L45.0306 24.66C44.8206 26.16 45.8706 27.21 47.3706 27L51.5406 26.4C52.1106 26.31 52.9506 25.92 53.3706 25.5L64.2606 14.61C66.1506 12.72 67.0206 10.56 64.2606 7.79996C61.4706 4.97996 59.3106 5.87996 57.4206 7.76996Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M55.8594 9.33008C56.7894 12.6301 59.3694 15.2101 62.6694 16.1401"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.00977 56.8497L22.7998 46.9197C25.1698 45.3297 28.5898 45.5097 30.7198 47.3397L31.7098 48.2097C34.0498 50.2197 37.8298 50.2197 40.1698 48.2097L52.6498 37.4997C54.9898 35.4897 58.7698 35.4897 61.1098 37.4997L65.9998 41.6997"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="project-container-title">Имя пользователя</div>
            <div className="project-container-content">
              {["Фамилия", "Имя", "Отчество"].map((label, index) => (
                <div className="project-container-block" key={index}>
                  <p>{label}</p>
                  <div className="project-container-block-input">
                    <input type="text" placeholder={label} />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M11.3835 3.00002L4.54179 10.2417C4.28345 10.5167 4.03345 11.0584 3.98345 11.4334L3.67512 14.1333C3.56679 15.1083 4.26679 15.775 5.23345 15.6084L7.91679 15.15C8.29179 15.0834 8.81679 14.8084 9.07512 14.525L15.9168 7.28335C17.1001 6.03335 17.6335 4.60835 15.7918 2.86668C13.9585 1.14168 12.5668 1.75002 11.3835 3.00002Z"
                        stroke="white"
                        strokeWidth="0.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.2422 4.20898C10.6005 6.50898 12.4672 8.26732 14.7839 8.50065"
                        stroke="white"
                        strokeWidth="0.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.83398 18.334H17.834"
                        stroke="white"
                        strokeWidth="0.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="project-container-title">Общая информация</div>
            <div className="project-container-content">
              <div className="project-container-block">
                <p>Телефон</p>
                <div className="project-container-block-input">
                  <input type="text" placeholder="9 999 999 99 99" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M11.3835 3.00002L4.54179 10.2417C4.28345 10.5167 4.03345 11.0584 3.98345 11.4334L3.67512 14.1333C3.56679 15.1083 4.26679 15.775 5.23345 15.6084L7.91679 15.15C8.29179 15.0834 8.81679 14.8084 9.07512 14.525L15.9168 7.28335C17.1001 6.03335 17.6335 4.60835 15.7918 2.86668C13.9585 1.14168 12.5668 1.75002 11.3835 3.00002Z"
                      stroke="white"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.2422 4.20898C10.6005 6.50898 12.4672 8.26732 14.7839 8.50065"
                      stroke="white"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.83398 18.334H17.834"
                      stroke="white"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="project-container-block">
                <p>Организация</p>
                <div className="project-container-block-input">
                  <input type="text" placeholder="OOO dve" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M11.3835 3.00002L4.54179 10.2417C4.28345 10.5167 4.03345 11.0584 3.98345 11.4334L3.67512 14.1333C3.56679 15.1083 4.26679 15.775 5.23345 15.6084L7.91679 15.15C8.29179 15.0834 8.81679 14.8084 9.07512 14.525L15.9168 7.28335C17.1001 6.03335 17.6335 4.60835 15.7918 2.86668C13.9585 1.14168 12.5668 1.75002 11.3835 3.00002Z"
                      stroke="white"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.2422 4.20898C10.6005 6.50898 12.4672 8.26732 14.7839 8.50065"
                      stroke="white"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.83398 18.334H17.834"
                      stroke="white"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="project-container-block">
                <p>E-mail</p>
                <div className="project-container-block-input">
                  <input type="text" placeholder="example@yandex.ru" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M11.3835 3.00002L4.54179 10.2417C4.28345 10.5167 4.03345 11.0584 3.98345 11.4334L3.67512 14.1333C3.56679 15.1083 4.26679 15.775 5.23345 15.6084L7.91679 15.15C8.29179 15.0834 8.81679 14.8084 9.07512 14.525L15.9168 7.28335C17.1001 6.03335 17.6335 4.60835 15.7918 2.86668C13.9585 1.14168 12.5668 1.75002 11.3835 3.00002Z"
                      stroke="white"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.2422 4.20898C10.6005 6.50898 12.4672 8.26732 14.7839 8.50065"
                      stroke="white"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.83398 18.334H17.834"
                      stroke="white"
                      strokeWidth="0.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="project-container-title">Смена пароля</div>
            <div className="project-container-content">
              <div className="project-container-block">
                <p>Пароль</p>
                <div className="project-container-block-input">
                  <input type="password" />
                </div>
              </div>
              <div className="project-container-block">
                <p>Новый пароль</p>
                <div className="project-container-block-input">
                  <input type="password" />
                </div>
              </div>
              <div className="project-container-block">
                <p>Повторите пароль</p>
                <div className="project-container-block-input">
                  <input type="password" />
                </div>
              </div>
            </div>
            <button className="btn-save" type="button">
              Сохранить
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminInfoRedact;
