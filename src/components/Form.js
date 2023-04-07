import React, {useState} from "react";
import './Form.css';
import ConfirmSubmit from "./ConfirmSubmit";

const Form = () => {
    const [userName, setUserName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirm, setConfirm] = useState('');

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
        // console.log('working!!');
    }
    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
    }
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const formSubmitHandler=(event)=>{
        event.preventDefault();
        const text = userName ? `Thank you ${userName}!` : "";

        setConfirm(text);

        const allInputs = {
            username: userName,
            lastname: lastName,
            email: email,
            password: password
        }
        console.log(allInputs);

        setUserName('');
        setLastName('');
        setEmail('');
        setPassword('');
    };


    return (
        <form onSubmit={formSubmitHandler}>
            <div  className="form-container">
                <div className="frm">
                    <input type="text" name="username" 
                    placeholder="Username" required
                    value={userName} 
                    onChange={userNameChangeHandler}></input>
                </div>
                <div className="frm">
                    <input type="text" name="lastname" 
                    placeholder="Lastname" required
                    value={lastName}
                    onChange={lastNameChangeHandler}></input>
                </div>
                <div className="frm">
                    <input type="email" name="email" 
                    placeholder="Email" required
                    value={email}
                    onChange={emailChangeHandler}></input>
                </div>
                <div className="frm">
                    <input type="password" name="password" 
                    placeholder="Password" required
                    value={password}
                    onChange={passwordChangeHandler}></input>
                </div>
                <div className="frm">
                    <button type="submit">CLAIM YOUR FREE TRIAL</button>
                </div>
                <h4 className="bottom-part">By clicking the button, 
                    you are agreeing to our 
                    <span className="text-danger"> Terms and Services</span>
                </h4>
            </div>
            <ConfirmSubmit confirm={confirm} />
        </form>
    )
}

export default Form;