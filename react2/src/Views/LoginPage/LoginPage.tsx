import React, { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import { useSelector }  from 'react-redux';
import { RootState } from '../../Store';

import { Login } from '../../Components/LoginForm';

import "./LoginPage.css";

export const LoginPage: React.FC = () => {

    const userState = useSelector ((state:RootState) => state.user);

    const navigator = useNavigate();
     useEffect(()=> {
          if(!userState.error && userState.user && !userState.user.privilege){
              navigator('/feed');
          }else if(!userState.error && userState.user?.privilege){
            navigator('/pend');
          }
     }, [userState]);

    return(
        <div className="login-page">
            {userState.error ? <h2 className="login-error">Username or password incorrect</h2> : <></>}
          <Login />
        </div>
    )

}