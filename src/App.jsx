import { Routes, Route, NavLink } from "react-router-dom";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Vakansi from "./pages/Vakansi";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header-container">
            <NavLink to="/" className="head-logo">
              <img src="/img/opticode-logo.png" alt="Logo" />
            </NavLink>
            <ul className="head-menu">
              <li>
                <NavLink
                  to="/aboutUs"
                  className={({ isActive }) =>
                    `btn2 btn3 ${isActive ? "btn-active" : ""}`
                  }
                  style={{ margin: 0 }}
                >
                  <span>О нас</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `btn2 btn3 btn4 ${isActive ? "btn-active" : ""}`
                  }
                  style={{ margin: 0 }}
                >
                  <span>Контакты</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/vakansi"
                  className={({ isActive }) =>
                    `btn2 btn3 btn5 ${isActive ? "btn-active" : ""}`
                  }
                  style={{ margin: 0 }}
                >
                  <span>Вакансии</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vakansi" element={<Vakansi />} />
      </Routes>
    </div>
  );
}

export default App;
