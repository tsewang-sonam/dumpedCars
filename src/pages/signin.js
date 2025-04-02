import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useState } from "react";
import styles from './signin.module.css'

import { Container } from "postcss";

const SingInPage = () =>
{

    const [inputValue, setInputValue] = useState("");

    return(
        <div className = {styles.contianerBox}>
            <div className = {styles.inputBox}>
            <h3 className= {styles.title}> Welcome to DumpedCars</h3>
            <h4 className= {styles.subTitle}> To get started, please sign in </h4>
            {/* <div className = "textInput">
            <input type = "text" value = {inputValue} onChange ={(e) => setInputValue(e.target.value)}
             className="textBox1" />
             <input type = "text" value = {inputValue} onChange ={(e) => setInputValue(e.target.value)}
             className="textBox1" />
             </div> */}
             <div className = {styles.textInput2}>
             <input type = {styles.text} value = {inputValue} onChange ={(e) => setInputValue(e.target.value)}
             className={styles.textBox2} />
             
             </div>
             <button className = {styles.submitBtn}>Submit</button>

            <h3> --------- or -----------</h3> 

            <button className = {styles.gmailBtn}><img src="/icons-gmail.png" class="icon"/>Gmail</button>
            </div>
        </div>

    );

}

export default SingInPage;
