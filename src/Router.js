import react from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPark from './pages/cheoljinPark/Login/Login';
import MainPark from './pages/cheoljinPark/Main/Main';

import LoginKim from './pages/hyejinKim/Login/Login';
import MainKim from './pages/hyejinKim/Main/Main';

import LoginLee from './pages/sangminLee/Login/Login';
import MainLee from './pages/sangminLee/Main/Main';

import LoginHan from './pages/younghyunHan/Login/Login';
import MainHan from './pages/younghyunHan/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-kim" element={<LoginKim />} />
        <Route path="/main-kim" element={<MainKim />} />

        <Route path="/login-park" element={<LoginPark />} />
        <Route path="/main-park" element={<MainPark />} />

        <Route path="/login-lee" element={<LoginLee />} />
        <Route path="/main-lee" element={<MainLee />} />

        <Route path="/login-han" element={<LoginHan />} />
        <Route path="/main-han" element={<MainHan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
