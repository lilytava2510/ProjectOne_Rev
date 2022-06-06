import React, {useEffect} from "react";
import {Navbar } from '../../Components/Navbar/Navbar';
import { useSelector, useDispatch} from 'react-redux';
import { RootState, AppDispatch}  from '../../Store';
import {useNavigate} from "react-router-dom";
import { UserElement } from "../../Components/UserElement/UserElement";
import { IUser } from "../../Interface/IUser";
import { Loading } from "../../Components/Loading/Loading";
import { getPeople } from "../../Slices/UserSlice";
import './InfoPage.css';

export const InfoPage: React.FC = () => {

    const userInfo = useSelector((state:RootState) => state.user);
   
    const dispatch:AppDispatch = useDispatch();
    const navigator = useNavigate();
        useEffect(() => {
        if(!userInfo.user){
          navigator("/login");

        }else if(userInfo.user && userInfo.user.privilege && !userInfo.people){
            dispatch(getPeople());
        }

    },[userInfo]);
    console.log(userInfo.user?.privilege)
    return(
        <>

           <Navbar />
           <h1 className="page"> Welcome Umpa Lumpa: {userInfo.user?.firstName}</h1>
           <h2 className="page"> Umpa Lumpas</h2>
           <table className="info">
               <tr>
                   <th>User ID #</th>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th>Email</th>
                   <th>Username</th>
              
                   
               </tr>
                    {userInfo.people?
                     userInfo.people.map((post:IUser)=> {
                        return <UserElement {...post} key={post.userId}/>
                    }): <Loading/>
                    } 
         </table>
        </>
    )

    }