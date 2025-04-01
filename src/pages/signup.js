import './signup.css'
import { useState } from 'react';
const SignUpPage = () =>{

    const[inputValue, setInputValue]= useState("");

    return(

        <div className = "contianerBox">


            <div className = "inputBox">
            <h3 className= "title"> Create an account</h3>
            <h4 className= "subTitle"> Join us in making a difference </h4>
          
            <button className = "gmailBtn"><img src="/icons-gmail.png" class="icon"/>Gmail</button>
            <h3> --------- or -----------</h3> 
            
            </div>
            
             <div className = "textInput2">
             <input type = "text" value = {inputValue} onChange ={(e) => setInputValue(e.target.value)}
             className="textBox2" />
             <button className = "submitBtn">Submit</button>
             <p className = "confirmation">By signing up, I agree to the 
             DumpedCars <a href="/signin" className = "Side-a-link" >Privacy Policy </a>and  <a href="/signin" className = "Side-a-link" >Terms</a>Terms of Service.</p>
             </div>
             
        </div>
    );

}

export default SignUpPage;
