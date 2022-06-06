import React, { useEffect} from 'react';
import {Navbar } from '../../Components/Navbar/Navbar';
import { useSelector, useDispatch} from 'react-redux';
import { RootState, AppDispatch}  from '../../Store';
import {useNavigate} from "react-router-dom";
import {Loading} from "../../Components/Loading/Loading";
import {Reim} from "../../Components/Reim/Reim";
import {IUser} from "../../Interface/IUser";
import {IReim} from "../../Interface/IReim";
import {getReim} from "../../Slices/ReimSlice";
import { CreatePage } from '../../Components/ReimCreate/ReimCreate';
import './FeedPage.css';
export const FeedPage: React.FC = () => {

    const userInfo = useSelector((state:RootState) => state.user);
    const reimState = useSelector ((state :RootState) => state.reim);
    const dispatch:AppDispatch = useDispatch();
    const navigator = useNavigate();
        useEffect(() => {
        if(!userInfo.user){
          navigator("/login");

        }
        else if(userInfo.user && !reimState.reimburse){
            dispatch(getReim(userInfo.user.userId));

        }
    },[userInfo.user, reimState.reimburse]);
    console.log(userInfo.user?.privilege)
    return(
        <>
           <Navbar />
           <h1 className="rei"> Welcome: {userInfo.user?.firstName}</h1>
           <h2 className="rei"> All Your Reimbursements</h2>
           <table className="reim">
               <tr >
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
           <CreatePage />
        </>
    )

    }
