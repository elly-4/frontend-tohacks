import React from 'react';
import "../../App.css";
import './Signup.css';

function SignUp () {
    return (
        <div> 
        
            <form >
                <h1 className = "signUp"> Sign up </h1>
                <label className = "firstName"> First Name </label> <input type = "text" className = "enterValue"  placeholder = "First Name "/><br />
                <label className = "phoneNumber"> Phone Number</label> <input type = "text"  className = "enterValue" placeholder = "Phone Number"/><br />
                <label  className = "password"> Password</label> <input type = "text"  className = "enterValue" placeholder = "Password"/> <br />  
                <label className = "confirmPassword"> Confirm Password</label> <input type = "text"  className = "enterValue" placeholder = "Confirm Password"/><br />
                <label  className = "lastName"> Last Name</label> <input type = "text" className = "enterValue" placeholder = "Last Name"/><br />

                <label className = "address"> Address</label> <input type = "text"  className = "enterValue" placeholder = "Address"/><br />
                <label className = "postalCode"> Postal Code</label> <input type = "text"  className = "enterValue" placeholder = "Postal Code"/><br />
                <label className = "emailAddress"> Email Address</label> <input type = "text"  className = "enterValue" placeholder = "Email Address"/><br />
               <input  className = "submitButton" type = "submit" value="Submit"/>
            </form>


        </div>


    )
    
        


}




export default SignUp