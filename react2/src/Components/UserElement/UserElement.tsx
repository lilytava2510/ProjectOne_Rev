import React from "react";
import {IUser} from "../../Interface/IUser";
import { RootState, AppDispatch } from "../../Store";
import { useDispatch, useSelector } from "react-redux";
import { clearReim } from '../../Slices/ReimSlice';
import { clearHold } from '../../Slices/UserSlice';

export const UserElement:React.FC<IUser> = (ticket:IUser) => {
   
    const dispatch:AppDispatch = useDispatch();
    const user = useSelector((state:RootState) => state.user);
    const handleIndividual = () =>{
        dispatch(clearReim());
        dispatch(clearHold());
    }

    return(
        <tr>
            <td>{ticket.userId}</td>
            <td>{ticket.firstName}</td>
            <td>{ticket.lastName}</td>
            <td>{ticket.email}</td>
            <td>{ticket.username}</td>
            <td>{ticket.password}</td>
            <td>{ticket.privilege}</td>
            {  user.user?.privilege?
                <td>
                    <button className="individual" onClick={handleIndividual}  value={ticket.userId}>{ticket.userId}
                    </button>
                </td>
                : <></> }
        </tr>
    )
}