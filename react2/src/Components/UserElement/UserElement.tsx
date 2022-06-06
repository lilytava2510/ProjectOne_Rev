import React from "react";
import {IUser} from "../../Interface/IUser";
import { RootState, AppDispatch } from "../../Store";
import { useDispatch, useSelector } from "react-redux";
import { clearReim } from '../../Slices/ReimSlice';
import { clearHold, getUser } from '../../Slices/UserSlice';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './UserElement.css';
export const UserElement:React.FC<IUser> = (ticket:IUser) => {
    
    const navigator = useNavigate();
     
    const dispatch:AppDispatch = useDispatch();
    const user = useSelector((state:RootState) => state.user);
    const handleIndividual = (event:React.MouseEvent<HTMLButtonElement>) =>{
        dispatch(clearReim());
        const id = parseInt((event.target as HTMLButtonElement).value);
        dispatch(getUser(id));
        navigator("/individual");
    }

    return(
        <tr className="itick">
            <td>{ticket.userId}</td>
            <td>{ticket.firstName}</td>
            <td>{ticket.lastName}</td>
            <td>{ticket.email}</td>
            <td>{ticket.username}</td>
            
            
            {  user.user?.privilege?
                <td>
                    
                    <button className="ida" onClick={handleIndividual}  value={ticket.userId}>{ticket.userId}
                    </button>
                    
                </td>
                : <></> }
        </tr>
    )
}







