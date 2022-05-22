import React from "react";
import {IReim} from "../../Interface/IReim";

export const Reim:React.FC<IReim> = (ticket:IReim) => {

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
            </tr>

        /*
        <div className="reim" >
            <div className="reim-profile">
            </div>
<div className="reim-ticket" >
    <p>{post.amount} </p>
</div>
        </div>
        */
    )
}