import { setDefaultResultOrder } from 'dns';
import React, {useState} from 'react';
//import "./LoginForm.css";
import { loginUser,toggleError, updateUser } from '../../Slices/UserSlice';
import {RootState, AppDispatch} from "../../Store";
import {useDispatch, useSelector} from "react-redux";
import './UserInfo.css';

export const UserIn: React.FC = () => {
    
    const dispatch:AppDispatch = useDispatch();

     
     const user = useSelector((state:RootState) => state.user);



    // const [userId, setUserId] = useState<number>(0);
    const [first, setFirstName] = useState<string>("");
    const [last, setlastName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const trust = false;

    const id = user.user?.userId;
    //const [privilege, setPrivilege] = useState<boolean>(user.user?.privilege?);

 

    const handleInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "email"){
            setEmail(event.target.value);
        }
        else if(event.target.name === "firstname"){
            setFirstName(event.target.value);  
        }
        else if(event.target.name === "lastname"){
            setlastName(event.target.value);  
        }
        else if(event.target.name === "username"){
            setUsername(event.target.value);  
    }
    else if(event.target.name === "password"){
        setPassword(event.target.value);
    } // else if(user.user) 
    //  const userId = user.user?.userId;
    
//     else if(user.user?.privilege)
//     {setPrivilege(user.user?.privilege)
// }  
 }
        
    const handleUpdate = (event:React.MouseEvent<HTMLButtonElement>) => {
        let credentials = {
            id,
            first,
            last,
            username,
            email,
            password,
            trust 

        };

      dispatch(updateUser(credentials));
        
        
    }
    return(
        <div className="ilogin">
            <div className="text-container">
                <h1 className="login-header"></h1>
                <h2 className="login-header">Please sign in to submit a reimbursement</h2>
            </div>
            <form className="login-form">
            <div className="input-div">
                  <h4 className="input-h4">Enter Firstname</h4>
                    <input autoComplete="off" className="login-input" type="text" name="firstname" placeholder="firstname" onChange={handleInput}/>
                </div>
            <div className="input-div">
                  <h4 className="input-h4">Enter Lastname</h4>
                    <input autoComplete="off" className="login-input" type="text" name="lastname" placeholder="lastname" onChange={handleInput}/>
                </div>
                <div className="input-div">
                  <h4 className="input-h4">Enter Username</h4>
                    <input autoComplete="off" className="login-input" type="text" name="username" placeholder="username" onChange={handleInput}/>
                </div>
                <div className="input-div">
                  <h4 className="input-h4">Enter Email</h4>
                    <input autoComplete="off" className="login-input" type="text" name="email" placeholder="email" onChange={handleInput}/>
                </div>
                <div className="input-div">
                    <h4 className="input-h4">Enter Password</h4>
                    <input className="login-input" type="password" name="password" placeholder="password" onChange={handleInput}/>
                </div>
                <div className="input-div">

                </div>
            </form>
                <button className="login-button" onClick={handleUpdate}>Update</button>
        </div>
    )
}