import { Routes, Route,NavLink  } from "react-router-dom";
import Admin from "./pages/Admin";
import AdminProject from "./pages/AdminProject";
import UserList from "./pages/UserList";
import AdminInfo from "./pages/AdminInfo";
import AdminInfoRedact from "./pages/AdminInfoRedact";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Admin</NavLink>
          </li>
          <li>
            <NavLink to="/user">User List</NavLink>
          </li>
          <li>
            <NavLink to="/admin-info">Admin Info</NavLink>
          </li>
          <li>
            <NavLink to="/admin-project">Admin Project</NavLink>
          </li>
          <li>
            <NavLink to="/admin-info-redact">Admin Info Redact</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/admin-info" element={<AdminInfo />} />
        <Route path="/admin-project" element={<AdminProject />} />
        <Route path="/admin-info-redact" element={<AdminInfoRedact />} />
      </Routes>
    </div>
  );
}

export default App;
