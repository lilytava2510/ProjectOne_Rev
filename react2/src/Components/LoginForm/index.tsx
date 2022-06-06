import React, {useState} from 'react';
import "./LoginForm.css";
import { useDispatch } from 'react-redux';
import { loginUser,toggleError } from '../../Slices/UserSlice';
import { AppDispatch } from '../../Store';


export const Login: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

   const dispatch: AppDispatch = useDispatch();

    const handleInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "email"){
            setEmail(event.target.value);
        }
        else {
            setPassword(event.target.value);
        }
        }

    
    const handleLogin = (event:React.MouseEvent<HTMLButtonElement>) => {
        let credentials = {
            email,
            password

        };

      dispatch(loginUser(credentials));
        
        
    }
    return(
        <div className="login">
            <div className="text-container">
                <h1 className="login-header">Welcome to Willy Wonkas Chocolate Factory: </h1>
                <h3 className="login-header">Where Umpa Lumpas can request a Reimbursement</h3>

                <h2 className="login-header">Login </h2>
            </div>
            <form className="login-form">
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
                <button className="login-button" onClick={handleLogin}>Login</button>
        </div>
    )
}