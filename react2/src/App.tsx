import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {LoginPage} from './Views/LoginPage/LoginPage';
import { FeedPage } from './Views/FeedPage/FeedPage';
import {InfoPage} from './Views/InfoPage/InfoPage';
import {ReimPage} from './Views/ReimPage/ReimPage'; 
import {ApprovePage} from './Views/ViewApprove/ViewApprove';
import {ManagerPage} from './Views/ManagerPage/ManagerPage';
import {CreatePage} from './Views/CreatePage/CreatePage';
import {IndividualPage} from './Views/Individual/Individual';
import {AprovePage} from './Views/UApprove/UAprove';
import{PendPage} from './Views/UPend/UPend';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Navigate to="/login"replace />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/feed"  element={<FeedPage/>}/>
      <Route path="/info" element={<CreatePage/>}/>
      <Route path="/reim" element={<ReimPage/>}/>
      <Route path="/pend" element={<ManagerPage/>}/>
      <Route path="/approve" element={<ApprovePage/>}/>
      <Route path="/people" element={<InfoPage/>}/>
      <Route path="/individual" element={<IndividualPage/>}/>
      <Route path="/ufeed" element={<PendPage/>}/>
      <Route path="/uinfo" element={<AprovePage/>}/>




      </Routes>
          </BrowserRouter>
  );
}

export default App;
