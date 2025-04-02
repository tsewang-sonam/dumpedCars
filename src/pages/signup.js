
import { useState } from 'react';
import styles from './signup.module.css';
const SignUpPage = () =>{

    const[inputValue, setInputValue]= useState("");

    return(

        <div className = {styles.contianerBox}>


            <div className = {styles.inputBox}>
            <h3 className= {styles.title}> Create an account</h3>
            <h4 className= {styles.subTitle}> Join us in making a difference </h4>
          
            <button className = {styles.gmailBtn}><img src="/icons-gmail.png" class="icon"/>Gmail</button>
            <h3> --------- or -----------</h3> 
            
            </div>
            
             <div className = {styles.textInput2}>
             <input type = {styles.text} value = {inputValue} onChange ={(e) => setInputValue(e.target.value)}
             className={styles.textBox2} />
             <button className = {styles.submitBtn}>Submit</button>
             <p className = {styles.confirmation}>By signing up, I agree to the 
             DumpedCars <a href="/signin" className = {styles.SideLink }>Privacy Policy </a>and  <a href="/signin" className = {styles.SideLink}>Terms</a>Terms of Service.</p>
             </div>
             
        </div>
    );

}

export default SignUpPage;
