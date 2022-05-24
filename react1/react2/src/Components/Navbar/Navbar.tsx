import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {RootState, AppDispatch} from "../../Store";
import { clearReim } from '../../Slices/ReimSlice';
import { clearUser } from '../../Slices/UserSlice';
//import defaultImage from '../../defaultpic.jpg';
import { IReim } from '../../Interface/IReim';
import { IUser } from '../../Interface/IUser';

import './Navbar.css';


export const Navbar: React.FC = () => {

 
    const dispatch:AppDispatch = useDispatch();

    const handleLogout = () => {
         dispatch(clearReim());
         dispatch(clearUser());
     }
     const user = useSelector((state:RootState) => state.user.user);
     const handleLink = () =>{
        dispatch(clearReim());
    }
     
        return( 
            <nav className="navbar">
           
                <table>
                    <tr>
                    <td className="inav-item">
                        <Link to= {"/info"} className="inav-link">Profile</Link>
                    </td>
                    <td className="inav-item">
                        <Link to= {"/feed"} className="inav-link">Home</Link>
                    </td>
                    <td className="ilogout">
                        <Link to={"/login"}>
                            <button className="ilogout-btn" onClick={handleLogout}>Log out</button>
                        </Link>
                    </td>
                    <td className="inav-item">
                        <Link to= {"/uinfo"} className="inav-link" onClick={handleLink}>Your Approved</Link>
                    </td>
                    <td className="inav-item">
                        <Link to= {"/ufeed"} className="inav-link" onClick={handleLink}>Your Pending</Link>
                    </td>
                    <td>
                    {  user?.privilege?
                     <li className="inav-item">
                     <Link to= {"/pend"} className="inav-link">
                         <button className="ilogout-btn" onClick={handleLink}>Pending</button>
                         </Link>
                     
                     <li className="inav-item">
                        <Link to= {"/approve"} className="inav-link">
                        <button className="ilogout-btn" onClick={handleLink}>Approved</button>
                        </Link>
                    </li>
                     <li className="inav-item">
                     <Link to= {"/people"} className="nav-link">
                     <button className="ilogout-btn" onClick={handleLink}>People</button>
                     </Link>
                 </li>
                 </li>
                    : <></> }
                    </td>
                    </tr>
                </table>
            </nav>
            
        )
                    }