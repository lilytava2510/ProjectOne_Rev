import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {LoginPage} from './Views/LoginPage/LoginPage';
import { FeedPage } from './Views/FeedPage/FeedPage';
import {InfoPage} from './Views/InfoPage/InfoPage';
import {ReimPage} from './Views/ReimPage/ReimPage'; 
import {ApprovePage} from './Views/ViewApprove/ViewApprove';
import {ManagerPage} from './Views/ManagerPage/ManagerPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Navigate to="/login"replace />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/feed"  element={<FeedPage/>}/>
      <Route path="/user/:id" element={<InfoPage/>}/>
      <Route path="/reim" element={<ReimPage/>}/>
      <Route path="/pend" element={<ManagerPage/>}/>
      <Route path="/approve" element={<ApprovePage/>}/>
      </Routes>
          </BrowserRouter>
  );
}

export default App;
