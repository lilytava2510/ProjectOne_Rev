import React, {useEffect} from 'react';
import {Navbar } from '../../Components/Navbar/Navbar';
import { useSelector, useDispatch} from 'react-redux';
import { RootState, AppDispatch}  from '../../Store';
import {useNavigate} from "react-router-dom";
import {Loading} from "../../Components/Loading/Loading";
import {Reim} from "../../Components/Reim/Reim";
import {IUser} from "../../Interface/IUser";
import {IReim} from "../../Interface/IReim";
import {allPendReim, allApproveReim} from "../../Slices/ReimSlice";
import './ViewApprove.css'
export const ApprovePage: React.FC = () => {

    const userInfo = useSelector((state:RootState) => state.user);
    const reimState = useSelector ((state :RootState) => state.reim);
    const dispatch:AppDispatch = useDispatch();
    const navigator = useNavigate();
        useEffect(() => {
        if(!userInfo.user){
          navigator("/login");

        }
       else if(!userInfo.user.privilege){
       navigator("/login")
    }
        else if(userInfo.user.privilege && !reimState.reimburse){
            dispatch(allApproveReim());

        }
    },[userInfo.user, reimState.reimburse]);
    console.log(userInfo.user?.privilege)
    return(
        <>
           <Navbar />
           <h1 className="eal"> Welcome Umpa Lumba: {userInfo.user?.firstName}</h1>
           <h2 className="eal" > Approved Reimburements </h2>
           <table className="eal">
               <tr>
               <th> #           </th>
                   <th>Amount       </th>
                   <th>Subimtion    </th>
                   <th>Resolution   </th>
                   <th> Description </th>
                   <th>Author       </th>
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
        </>
    )

    }
