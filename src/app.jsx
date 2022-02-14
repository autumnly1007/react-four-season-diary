import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.scss";
import Calendar from "./components/calendar/calendar";
import Login from "./components/login/login";
import Setting from "./components/setting/setting";
import Weekly from "./components/weekly/weekly";

function App({ authService }) {
  return (
    <div>
      <BrowserRouter />
      <Routes>
        <Route path="/" element={<Login authService={authService} />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
