import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useState } from "react";
import styles from './signin.module.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useRouter } from 'next/router';
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
 
import { Container } from "postcss";
import { async } from "@firebase/util";

const SignInPage = ({ children, onClose }) =>
{
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleGoogleAuth = async () => {

        const provider = new GoogleAuthProvider();
        try{
            const resultAuth = await signInWithPopup(auth, provider);
            const user = resultAuth.user;
            console.log("✅ Google Auth successful:", user);
            router.push("/search"); // redirect anywhere post-login
        } catch (error) {
        console.error("❌ Google Auth error:", error.message);
      }

    };

    const handleLogin = async (e) =>{
        e.preventDefault();
        try {
            const userCredential =  await signInWithEmailAndPassword(auth, email, password);
            console.log("✅ Signup successful:", userCredential.user);
            console.log("➡️ Attempting to route to /search...");
            router.push("/");
            console.log("🚀 push() called");
        } catch (err) {
          console.error(" Login error:", err.code, err.message);
            setError(err.message);
        }
    };
    

    return(

        <form onSubmit = {handleLogin}>
        <div className = {styles.overlay}>
        <div className = {styles.contianerBox}>
            <button className = {styles.closeBtn } onClick={onClose} > x </button>
            <div className = {styles.inputBox}>
            <h3 className= {styles.title}> Welcome to DumpedCars</h3>
            <h4 className= {styles.subTitle}> To get started, please log in </h4>
            {/* <div className = "textInput">
            <input type = "text" value = {inputValue} onChange ={(e) => setInputValue(e.target.value)}
             className="textBox1" />
             <input type = "text" value = {inputValue} onChange ={(e) => setInputValue(e.target.value)}
             className="textBox1" />
             </div> */}
             <div className = {styles.textInput2}>

             <button onClick = {handleGoogleAuth} className = {styles.gmailBtn}><img src="/icons-gmail.png" class="icon"/>Gmail</button>

             <h3> --------- or -----------</h3> 
             <input type = {styles.text} placeholder = "Enter your email" value = {email} onChange ={(e) => setEmail(e.target.value)}
             className={styles.textBox2} />
             <input type = {styles.text} placeholder = "Enter your password" value = {password} onChange ={ (e) => setPassword(e.target.value)}
             className={styles.textBox2} />
             </div>
             <button  type = "submit" className = {styles.submitBtn}>Submit</button>

            

            <a href = "./search"  className={styles.reset}> Reset password</a>
            <p> <span>No account?</span> <a href="./">Sign up</a></p>

            </div>

        </div>
        </div>
        </form>

    );

}

export default SignInPage;
