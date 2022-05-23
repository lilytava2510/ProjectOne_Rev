import React, {useEffect} from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../Store";
import { useNavigate } from "react-router-dom";
import { UserIn } from "../../Components/UserInfo/UserInfo";

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
           <h1> Welcome: {userInfo.user?.firstName}</h1>
           <h2> Page</h2>
           <table>
               <tr>
                   <th>amount</th>
                   <th>Description</th>
                   <th>Date</th>
             
               </tr>

               <tr>
                <td>{userInfo.user?.userId}</td>
                <td>{userInfo.user?.firstName}</td>
                <td>{userInfo.user?.lastName}</td>
                <td>{userInfo.user?.email}</td>
                <td>{userInfo.user?.username}</td>
                <td>{userInfo.user?.password}</td>
                <td>{userInfo.user?.privilege}</td>
               
            </tr>

         </table>
        <UserIn/>
        </>
    )

    }