import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import AdminProject from "./pages/AdminProject";
import UserList from "./pages/UserList";
import AdminInfo from "./pages/AdminInfo";
import AdminInfoRedact from "./pages/AdminInfoRedact";

function App() {
  return (
    <div>
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
