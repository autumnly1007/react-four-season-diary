import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.scss";
import Calendar from "./components/calendar/calendar";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Login from "./components/login/login";
import NotFound from "./components/not_found/not_found";
import Setting from "./components/setting/setting";
import Weekly from "./components/weekly/weekly";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login authService={authService} />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
