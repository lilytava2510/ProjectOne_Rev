import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {LoginPage} from './Views/LoginPage/LoginPage';
import { FeedPage } from './Views/FeedPage/FeedPage';
import {InfoPage} from './Views/InfoPage/InfoPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Navigate to="/login"replace />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/feed"  element={<FeedPage/>}/>
      <Route path="/user/:id" element={<InfoPage/>}/>
      </Routes>
          </BrowserRouter>
  );
}

export default App;
