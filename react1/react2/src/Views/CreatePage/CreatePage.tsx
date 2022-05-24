import React, {useEffect} from 'react';
import {Navbar } from '../../Components/Navbar/Navbar';
import { useSelector, useDispatch} from 'react-redux';
import { RootState, AppDispatch}  from '../../Store';
import {useNavigate} from "react-router-dom";
import {Loading} from "../../Components/Loading/Loading";
import {Reim} from "../../Components/Reim/Reim";
import {IUser} from "../../Interface/IUser";
import {IReim} from "../../Interface/IReim";
import {getReim} from "../../Slices/ReimSlice";
import { getUser } from '../../Slices/UserSlice';
import { UserIn } from '../../Components/UserInfo/UserInfo';
import './Createpage.css';
export const CreatePage: React.FC = () => {

    const userInfo = useSelector((state:RootState) => state.user);
   
    const dispatch:AppDispatch = useDispatch();
    const navigator = useNavigate();
        useEffect(() => {
        if(!userInfo.user){
          navigator("/login");

        }
       /* else if(userInfo.user){
            dispatch(getUser(userInfo.user.userId));

        }*/
    },[userInfo.user]);
    console.log(userInfo.user?.privilege)
    return(
        <>

           <Navbar />
           <h1 className="crea"> Welcome: {userInfo.user?.firstName}</h1>
           <h2 className="crea"> Update Page</h2>
           <table className="crea" >
               <tr>
                   <th>userId</th>
                   <th>firstname</th>
                   <th>Lastname</th>
                   <th>Email</th>
                   <th>Username</th>
                   <th>Password</th>
                
             
               </tr>

               <tr>
                <td>{userInfo.user?.userId}</td>
                <td>{userInfo.user?.firstName}</td>
                <td>{userInfo.user?.lastName}</td>
                <td>{userInfo.user?.email}</td>
                <td>{userInfo.user?.username}</td>
                <td>{userInfo.user?.password}</td>
                
               
            </tr>

         </table>
        <UserIn/>
        </>
    )

    }
