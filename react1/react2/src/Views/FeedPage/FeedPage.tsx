import React, { useEffect } from 'react';
import {Navbar } from '../../Components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { RootState }  from '../../Store';
import {useNavigate} from 'react-router-dom';
export const FeedPage: React.FC = () => {

    const userInfo = useSelector((state:RootState) => state.user);
    const navigator = useNavigate();
      useEffect(() => {
          if(!userInfo.user){
            navigator("/login");

          }
      },[userInfo]);
    
    return(
        <>
           <Navbar />
           <h1> Welcome: {userInfo.user?.firstName}</h1>
           <h2> FeedPage</h2>

        </>
    )

    }