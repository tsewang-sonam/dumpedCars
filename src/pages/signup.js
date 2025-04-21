
import { useState } from 'react';
import styles from './signup.module.css';
import { useRouter } from 'next/router';
import { auth } from "./lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPage = ({ children, onClose }) =>{

  const provider = new GoogleAuthProvider();

    const router = useRouter();
    const[inputEmail, setEmailValue]= useState("");
    const[passWord, setPassword]= useState("");
    const[repeatPassWord, setRepeatPassWord] = useState("");
    const [error, setError] = useState("");

   
   
    const handleGoogleAuth = async () => {
      try {
        const result1 = await signInWithPopup(auth, provider);
        const user = result1.user;

        console.log("Google Auth successful:", user);
        router.push("/search");
      }catch (error) {
        console.error(" Google Auth failed:", error.message);
      }
    };




    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
          const result =  createUserWithEmailAndPassword(auth, inputEmail, passWord, repeatPassWord);
          console.log("Navigating to /search...");
          await router.push("/"); // or any protected page
        } catch (err) {
          console.error(" SingUp Failed:", err.code, err.message);
            setError(err.message);
        }
      };



    return(

        <form onSubmit={handleSignUp}>
        <div className={styles.overlay}>
        <div className = {styles.contianerBox}>
        <button className={styles.closeBtn} onClick={onClose}>x</button>
            <div className = {styles.inputBox}>
            <h3 className= {styles.title}> Create an account</h3>
            <h4 className= {styles.subTitle}> Join us in making a difference </h4>
          
            <button className = {styles.gmailBtn} onClick={handleGoogleAuth}><img src="/icons-gmail.png" class="icon"/>Gmail</button>
            <h3> --------- or -----------</h3> 
            
            </div>
            
             <div className = {styles.textInput2}>
             <input type = {styles.text} placeholder = " Enter your email" value = {inputEmail} onChange ={(e) => setEmailValue(e.target.value)}
             className={styles.textBox2} />
             <input type = {styles.text} placeholder = " Create a password" value = {passWord} onChange ={(e) => setPassword(e.target.value)}
             className={styles.textBox2} />
             <input type = {styles.text} placeholder = " Repeat passoword" value = {repeatPassWord} onChange ={(e) => setRepeatPassWord(e.target.value)}
             className={styles.textBox2} />
             <button type="submit" className = {styles.submitBtn}>Submit</button>
             <p className = {styles.confirmation}>By signing up, I agree to the 
             DumpedCars <a href="/signin" className = {styles.SideLink }>Privacy Policy </a>and  <a href="/signin" className = {styles.SideLink}>Terms</a>Terms of Service.</p>
             </div>
             
        </div>
        </div>
        </form>
       
    );

}

export default SignUpPage;
