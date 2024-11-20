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
              <img src="/img/opticode-logo.png" alt="" />
            </NavLink>
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
