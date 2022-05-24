import React, {useEffect} from 'react';
import {Navbar } from '../../Components/Navbar/Navbar';
import { useSelector, useDispatch} from 'react-redux';
import { RootState, AppDispatch}  from '../../Store';
import {useNavigate} from "react-router-dom";
import {Loading} from "../../Components/Loading/Loading";
import {Reim} from "../../Components/Reim/Reim";
import {IReim} from "../../Interface/IReim";
import {getReim} from "../../Slices/ReimSlice";
import './Individual.css';

export const IndividualPage: React.FC = () => {

    const userInfo = useSelector((state:RootState) => state.user);
    const reimState = useSelector ((state :RootState) => state.reim);
    const dispatch:AppDispatch = useDispatch();
    const navigator = useNavigate();
        useEffect(() => {
        if(!userInfo.user){
          navigator("/login");

        }else if(userInfo.user && !userInfo.user.privilege){
            navigator("/feed");
       }
      // else if(userInfo.user && userInfo.user.privilege && !userInfo.currentProfile){
          //  navigator("/feed");
        else if(userInfo.user && userInfo.user.privilege && userInfo.currentProfile &&!reimState.reimburse){
            dispatch(getReim(userInfo.currentProfile.userId));

        }
    },[userInfo, reimState]);
    
    return(
        <>
           <Navbar />
           <h1 className="re"> Welcome Umpa Lumpa: {userInfo.user?.firstName}</h1>
           <h2 className="re"> Reimbbursements of {userInfo.currentProfile?.lastName}</h2>
           
           <table className="re">
               <tr>
               <th> #           </th>
                   <th>Amount       </th>
                   <th>Subimtion    </th>
                   <th>Resolution   </th>
                   <th> Description </th>
                   <th>  Author     </th>
                   <th> Manager     </th>
                   <th> Status      </th>
                   <th> Type        </th>
               </tr>
           {reimState.reimburse?
            reimState.reimburse.map((post:IReim)=> {
                return <Reim {...post} key={post.reimburse_id}/>
            }): <Loading/>
        } 
           </table>
           <table className="re" >
               <tr>
                   <th>userId</th>
                   <th>firstname</th>
                   <th>Lastname</th>
                   <th>Email</th>
                   <th>Username</th>
                   
                
             
               </tr>

               <tr>
                <td>{userInfo.currentProfile?.userId}</td>
                <td>{userInfo.currentProfile?.firstName}</td>
                <td>{userInfo.currentProfile?.lastName}</td>
                <td>{userInfo.currentProfile?.email}</td>
                <td>{userInfo.currentProfile?.username}</td>
                
                
               
            </tr>

         </table>
        </>
    )

    }