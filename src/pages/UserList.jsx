import React, { useState } from "react";

const UserList = () => {
  const [selectedValue, setSelectedValue] = useState("50");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
            <div className="project-container-title">Мои проекты</div>
            <div className="project-container-top">
              <div className="project-container-top-left">
                <div className="project-search">
                  <input type="text" placeholder="Поиск" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
                      stroke="#A2A6AD"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="user-list-select">
                  <select value={selectedValue} onChange={handleSelectChange}>
                    <option value="50" disabled>
                      Показать 50
                    </option>
                    <option value="30">Показать 30</option>
                    <option value="10">Показать 10</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="#A2A6AD"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <button type="button" className="btn-add-project">
                Добавить новый проект
              </button>
            </div>
            <table id="table">
              <thead>
                <tr>
                  <th>
                    <div className="table-top-block">
                      Имя пользователя
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M9.8586 7.2H6.14062C5.69002 7.2 5.43761 6.71775 5.716 6.38873L7.57499 4.19165C7.7912 3.93612 8.20802 3.93612 8.42423 4.19165L10.2832 6.38873C10.5616 6.71775 10.3092 7.2 9.8586 7.2Z"
                          fill="white"
                        />
                        <path
                          d="M6.14062 8.8L9.8586 8.8C10.3092 8.8 10.5616 9.28225 10.2832 9.61127L8.42423 11.8084C8.20802 12.0639 7.7912 12.0639 7.57499 11.8084L5.716 9.61127C5.43761 9.28225 5.69002 8.8 6.14062 8.8Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </th>
                  <th>Email</th>
                  <th>
                    <div className="table-top-block">
                      Роль
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M9.8586 7.2H6.14062C5.69002 7.2 5.43761 6.71775 5.716 6.38873L7.57499 4.19165C7.7912 3.93612 8.20802 3.93612 8.42423 4.19165L10.2832 6.38873C10.5616 6.71775 10.3092 7.2 9.8586 7.2Z"
                          fill="white"
                        />
                        <path
                          d="M6.14062 8.8L9.8586 8.8C10.3092 8.8 10.5616 9.28225 10.2832 9.61127L8.42423 11.8084C8.20802 12.0639 7.7912 12.0639 7.57499 11.8084L5.716 9.61127C5.43761 9.28225 5.69002 8.8 6.14062 8.8Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Имя пользователя</td>
                  <td>example@yandex.ru</td>
                  <td>Admin</td>
                  <td>
                    <div className="icons-table">
                      <span style={{ background: "#1D7D81" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M16.334 6.66602C17.7147 6.66602 18.834 5.54673 18.834 4.16602C18.834 2.7853 17.7147 1.66602 16.334 1.66602C14.9533 1.66602 13.834 2.7853 13.834 4.16602C13.834 5.54673 14.9533 6.66602 16.334 6.66602Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.33398 10.834H10.5007"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.33398 14.166H13.834"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.166 1.66602H7.99935C3.83268 1.66602 2.16602 3.33268 2.16602 7.49935V12.4993C2.16602 16.666 3.83268 18.3327 7.99935 18.3327H12.9993C17.166 18.3327 18.8327 16.666 18.8327 12.4993V8.33268"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span style={{ background: "#4881F5" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M10.5 12.5C11.8807 12.5 13 11.3807 13 10C13 8.61929 11.8807 7.5 10.5 7.5C9.11929 7.5 8 8.61929 8 10C8 11.3807 9.11929 12.5 10.5 12.5Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.75 9.25C18.75 12.7767 14.6232 15.5 10.5 15.5C6.37683 15.5 2.25 12.7767 2.25 9.25"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span style={{ background: "#EA5455" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M11.666 11.666L17.333 17.333M11.666 17.333L17.333 11.666M11.666 3.333C13.2 3.333 14.333 4.466 14.333 6C14.333 7.534 13.2 8.666 11.666 8.666H5.66699C4.13366 8.666 3 7.534 3 6C3 4.466 4.13366 3.333 5.66699 3.333H11.666Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Имя пользователя</td>
                  <td>example@yandex.ru</td>
                  <td>Admin</td>
                  <td>
                    <div className="icons-table">
                      <span style={{ background: "#1D7D81" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M16.334 6.66602C17.7147 6.66602 18.834 5.54673 18.834 4.16602C18.834 2.7853 17.7147 1.66602 16.334 1.66602C14.9533 1.66602 13.834 2.7853 13.834 4.16602C13.834 5.54673 14.9533 6.66602 16.334 6.66602Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.33398 10.834H10.5007"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.33398 14.166H13.834"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.166 1.66602H7.99935C3.83268 1.66602 2.16602 3.33268 2.16602 7.49935V12.4993C2.16602 16.666 3.83268 18.3327 7.99935 18.3327H12.9993C17.166 18.3327 18.8327 16.666 18.8327 12.4993V8.33268"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span style={{ background: "#4881F5" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M10.5 12.5C11.8807 12.5 13 11.3807 13 10C13 8.61929 11.8807 7.5 10.5 7.5C9.11929 7.5 8 8.61929 8 10C8 11.3807 9.11929 12.5 10.5 12.5Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.75 9.25C18.75 12.7767 14.6232 15.5 10.5 15.5C6.37683 15.5 2.25 12.7767 2.25 9.25"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span style={{ background: "#EA5455" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M11.666 11.666L17.333 17.333M11.666 17.333L17.333 11.666M11.666 3.333C13.2 3.333 14.333 4.466 14.333 6C14.333 7.534 13.2 8.666 11.666 8.666H5.66699C4.13366 8.666 3 7.534 3 6C3 4.466 4.13366 3.333 5.66699 3.333H11.666Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Имя пользователя</td>
                  <td>example@yandex.ru</td>
                  <td>Admin</td>
                  <td>
                    <div className="icons-table">
                      <span style={{ background: "#1D7D81" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M16.334 6.66602C17.7147 6.66602 18.834 5.54673 18.834 4.16602C18.834 2.7853 17.7147 1.66602 16.334 1.66602C14.9533 1.66602 13.834 2.7853 13.834 4.16602C13.834 5.54673 14.9533 6.66602 16.334 6.66602Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.33398 10.834H10.5007"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.33398 14.166H13.834"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.166 1.66602H7.99935C3.83268 1.66602 2.16602 3.33268 2.16602 7.49935V12.4993C2.16602 16.666 3.83268 18.3327 7.99935 18.3327H12.9993C17.166 18.3327 18.8327 16.666 18.8327 12.4993V8.33268"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span style={{ background: "#4881F5" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M10.5 12.5C11.8807 12.5 13 11.3807 13 10C13 8.61929 11.8807 7.5 10.5 7.5C9.11929 7.5 8 8.61929 8 10C8 11.3807 9.11929 12.5 10.5 12.5Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.75 9.25C18.75 12.7767 14.6232 15.5 10.5 15.5C6.37683 15.5 2.25 12.7767 2.25 9.25"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span style={{ background: "#EA5455" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M11.666 11.666L17.333 17.333M11.666 17.333L17.333 11.666M11.666 3.333C13.2 3.333 14.333 4.466 14.333 6C14.333 7.534 13.2 8.666 11.666 8.666H5.66699C4.13366 8.666 3 7.534 3 6C3 4.466 4.13366 3.333 5.66699 3.333H11.666Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Имя пользователя</td>
                  <td>example@yandex.ru</td>
                  <td>Admin</td>
                  <td>
                    <div className="icons-table">
                      <span style={{ background: "#1D7D81" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M16.334 6.66602C17.7147 6.66602 18.834 5.54673 18.834 4.16602C18.834 2.7853 17.7147 1.66602 16.334 1.66602C14.9533 1.66602 13.834 2.7853 13.834 4.16602C13.834 5.54673 14.9533 6.66602 16.334 6.66602Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.33398 10.834H10.5007"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.33398 14.166H13.834"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.166 1.66602H7.99935C3.83268 1.66602 2.16602 3.33268 2.16602 7.49935V12.4993C2.16602 16.666 3.83268 18.3327 7.99935 18.3327H12.9993C17.166 18.3327 18.8327 16.666 18.8327 12.4993V8.33268"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span style={{ background: "#4881F5" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M10.5 12.5C11.8807 12.5 13 11.3807 13 10C13 8.61929 11.8807 7.5 10.5 7.5C9.11929 7.5 8 8.61929 8 10C8 11.3807 9.11929 12.5 10.5 12.5Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.75 9.25C18.75 12.7767 14.6232 15.5 10.5 15.5C6.37683 15.5 2.25 12.7767 2.25 9.25"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span style={{ background: "#EA5455" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M11.666 11.666L17.333 17.333M11.666 17.333L17.333 11.666M11.666 3.333C13.2 3.333 14.333 4.466 14.333 6C14.333 7.534 13.2 8.666 11.666 8.666H5.66699C4.13366 8.666 3 7.534 3 6C3 4.466 4.13366 3.333 5.66699 3.333H11.666Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Имя пользователя</td>
                  <td>example@yandex.ru</td>
                  <td>Admin</td>
                  <td>
                    <div className="icons-table">
                      <span style={{ background: "#1D7D81" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M16.334 6.66602C17.7147 6.66602 18.834 5.54673 18.834 4.16602C18.834 2.7853 17.7147 1.66602 16.334 1.66602C14.9533 1.66602 13.834 2.7853 13.834 4.16602C13.834 5.54673 14.9533 6.66602 16.334 6.66602Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.33398 10.834H10.5007"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.33398 14.166H13.834"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.166 1.66602H7.99935C3.83268 1.66602 2.16602 3.33268 2.16602 7.49935V12.4993C2.16602 16.666 3.83268 18.3327 7.99935 18.3327H12.9993C17.166 18.3327 18.8327 16.666 18.8327 12.4993V8.33268"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span style={{ background: "#4881F5" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M10.5 12.5C11.8807 12.5 13 11.3807 13 10C13 8.61929 11.8807 7.5 10.5 7.5C9.11929 7.5 8 8.61929 8 10C8 11.3807 9.11929 12.5 10.5 12.5Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.75 9.25C18.75 12.7767 14.6232 15.5 10.5 15.5C6.37683 15.5 2.25 12.7767 2.25 9.25"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span style={{ background: "#EA5455" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M11.666 11.666L17.333 17.333M11.666 17.333L17.333 11.666M11.666 3.333C13.2 3.333 14.333 4.466 14.333 6C14.333 7.534 13.2 8.666 11.666 8.666H5.66699C4.13366 8.666 3 7.534 3 6C3 4.466 4.13366 3.333 5.66699 3.333H11.666Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserList;
