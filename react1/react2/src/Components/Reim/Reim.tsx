import React, {useState} from 'react';
import {IReim} from "../../Interface/IReim";
import {RootState, AppDispatch} from "../../Store";
import {useDispatch, useSelector} from "react-redux";
import { IUser } from '../../Interface/IUser';
import { editReim } from '../../Slices/ReimSlice';

export const Reim:React.FC<IReim> = (ticket:IReim) => {

    const dispatch:AppDispatch = useDispatch();

     
    const user = useSelector((state:RootState) => state.user);
    

    const handleResolve = (event:React.MouseEvent<HTMLButtonElement>) => {
        
        const status = parseInt((event.target as HTMLButtonElement).value);
        const id = ticket.reimburse_id;
        
      
       
       const author = user.user?.userId;
       
              
        let note = {
            id,
            author,
            status
        }
        console.log(note);
               dispatch(editReim(note));
           }
    
        

            console.log(user.user?.privilege)
    
    return(
            <tr>
                <td>{ticket.reimburse_id}</td>
                <td>{ticket.amount}</td>
                <td>{ticket.start}</td>
                <td>{ticket.end}</td>
                <td>{ticket.description}</td>
                <td>{ticket.author}</td>
                <td>{ticket.manager}</td>
                <td>{ticket.status}</td>
                <td>{ticket.type}</td>
                  {  user.user?.privilege?
                <td>
                    <button className="deny" onClick={handleResolve}  value="3" data-id={ticket.reimburse_id}>Deny
                    </button>
                    <button className="aprrove" onClick={handleResolve}  value="2" data-id={ticket.reimburse_id}>Approve
                    </button>
                </td>
                : <></> }
            </tr>

    ) 
}
        /*
        <div className="reim" >
            <div className="reim-profile">
            </div>
<div className="reim-ticket" >
    <p>{post.amount} </p>
</div>
        </div>
        */
