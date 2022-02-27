import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import Monthly from './components/monthly/monthly/monthly';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Login from './components/login/login';
import Memo from './components/memo/memo';
import Nav from './components/nav/nav';
import NotFound from './components/not_found/not_found';
import Setting from './components/setting/setting';
import Weekly from './components/weekly/weekly/weekly';
import Daily from './components/daily/daily';

function App({ authService }) {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <div className={styles.box}>
          <div className={styles.nav}>
            <Nav />
          </div>
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={<Login authService={authService} />}
              />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/weekly" element={<Weekly />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/memo" element={<Memo />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
