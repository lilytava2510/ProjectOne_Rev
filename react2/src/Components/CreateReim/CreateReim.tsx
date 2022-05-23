import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store";
import {writeReim} from "../../Slices/ReimSlice";

export const CreateRiem: React.FC = () => {

    const [amount, setAmount] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
    const [author, setAuthor] = useState<number>(0);
    const [type, setType] = useState<number>(0);

   const dispatch: AppDispatch = useDispatch();

    const handleInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "amount"){
            //setAmount(event.target.value);
        }
        else if(event.target.name === "description"){
            setDescription(event.target.value);
        }else if(event.target.name === "author"){
            setDescription(event.target.value);
        }else if(event.target.name === "type"){
            setDescription(event.target.value);
        }
        }

    
    const handleCreate = (event:React.MouseEvent<HTMLButtonElement>) => {
        let credentials = {
            amount,
            description,
            author,
            type

        };

      dispatch(writeReim(credentials));
        
        
    }
    return(
        <div className="createReim">
            <div className="text-container">
                <h1 className="creation-header">Welcome to your reimburement website </h1>
                <h2 className="creation-header">Please sign in to submit a reimbursement</h2>
            </div>
            <form className="creation-form">
                <div className="creation-div">
                  <h4 className="input-h4">Enter amount</h4>
                    <input autoComplete="off" className="login-input" type="text" name="amount" placeholder="amount" onChange={handleInput}/>
                </div>
                <div className="input-div">
                    <h4 className="input-h4">Enter description</h4>
                    <input className="login-input" type="password" name="description" placeholder="password" onChange={handleInput}/>
                </div>
                <div className="input-div">

                </div>
            </form>
                <button className="login-button" onClick={handleCreate}>Login</button>
        </div>
    )
}