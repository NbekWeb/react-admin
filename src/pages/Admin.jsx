import React from "react";

const Admin = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-container">
            <a href="#">
              <img src="/img/logo-myd.svg" alt="MyDfiles Logo" />
            </a>
            <div className="header-container-right">
              <div className="header-container-right-avatar">
                <img src="/img/memoji.png" alt="Admin Avatar" />
              </div>
              <div className="header-container-right-text">
                <span>Admin</span>
                <a href="#">Выйти</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="project">
        <div className="container">
          <div className="project-container">
            <div className="project-container-title">Название проекта</div>
            <div className="project-name-btn">
              <button className="project-name-btn-back" type="button">
                Назад
              </button>
              <button className="project-name-btn-add-user" type="button">
                Добавить пользователя
              </button>
            </div>
            <div className="project-name-text">
              <h3>Описание проекта</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
              </p>
              <h4>Список пользователей закреплённых за проектом</h4>
              <div className="project-name-text-block">
                Ответственный: <span>Олег Петров</span>
              </div>
              <div className="project-name-text-block">
                Ответственный: <span>Олег Петров</span>
              </div>
              <div className="project-name-text-block">
                Ответственный: <span>Олег Петров</span>
              </div>
              <div className="project-name-text-block">
                Ответственный: <span>Олег Петров</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
