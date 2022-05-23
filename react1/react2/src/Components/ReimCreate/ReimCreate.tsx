import { setDefaultResultOrder } from 'dns';
import React, {useState, useEffect} from 'react';
//import "./LoginForm.css";
import { loginUser,toggleError, updateUser } from '../../Slices/UserSlice';
import {RootState, AppDispatch} from "../../Store";
import {useDispatch, useSelector} from "react-redux";
import { ReimSlice, writeReim } from '../../Slices/ReimSlice';


export const CreatePage: React.FC = () => {

    const [description, setDescription] = useState<string>("");
    const [amount, setAmount] = useState<any>();
    const [type, setType] = useState<any>();

    
    const dispatch:AppDispatch = useDispatch();

     
     const reim = useSelector((state:RootState) => state.reim);
     const user = useSelector((state:RootState) => state.user);
     const author = user.user?.userId;
    const handleInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "description"){
            setDescription(event.target.value);
        }
       else if(event.target.name === "amount"){
            setAmount(event.target.value);
        }
        else if(event.target.name === "type"){
            setType(event.target.value);
        }

        
        
      //  const type = ((event.target.name === "type");
        


    } // else if(user.user) 
    //  const userId = user.user?.userId;
    
//     else if(user.user?.privilege)
//     {setPrivilege(user.user?.privilege)
// }  
 
        
    const handleCreate = (event:React.MouseEvent<HTMLButtonElement>) => {
        let cred = {
            amount,
            description,
            author,
            type
             

        };

      dispatch(writeReim(cred));
        
    }
    

    //useEffect(()=>{ console.log(cred);
  //  }, [cr])
    return(
        <div className="login">
            <div className="text-container">
                <h1 className="login-header">Welcome to your reimburement website </h1>
                <h2 className="login-header">Submit a reimbursement</h2>
            </div>
            <form className="login-form">
            <div className="input-div">
                  <h4 className="input-h4">Enter Amount</h4>
                    <input  className="amount" type="text" name="amount" placeholder="amount" onChange={handleInput}/>
                </div>
            <div className="input-div">
               <input type="radio" id="type1" name="type" value="1"onChange={handleInput}/>
                     <label >lodging</label>
                   <input type="radio" id="2" name="type" value="2"onChange={handleInput}/>
                    <label>food</label>
                    <input type="radio" id="3" name="type" value="3"onChange={handleInput}/>
                    <label>travel</label>
                </div>
                <div className="input-div">
                  <h4 className="input-h4">Enter Description</h4>
                    <input  className="login-input" type="text" name="description" placeholder="description" onChange={handleInput}/>
                </div>
               
            </form>
                <button className="create-button" onClick={handleCreate}>Submit</button>
        </div>
    )
}