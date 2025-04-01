import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useState } from "react";

import './signin.css'
import { Container } from "postcss";

const SingInPage = () =>
{

    const [inputValue, setInputValue] = useState("");

    return(
        <div className = "contianerBox">
            <div className = "inputBox">
            <h3 className= "title"> Welcome to DumpedCars</h3>
            <h4 className= "subTitle"> To get started, please sign in </h4>
            {/* <div className = "textInput">
            <input type = "text" value = {inputValue} onChange ={(e) => setInputValue(e.target.value)}
             className="textBox1" />
             <input type = "text" value = {inputValue} onChange ={(e) => setInputValue(e.target.value)}
             className="textBox1" />
             </div> */}
             <div className = "textInput2">
             <input type = "text" value = {inputValue} onChange ={(e) => setInputValue(e.target.value)}
             className="textBox2" />
             
             </div>
             <button className = "submitBtn">Submit</button>

            <h3> --------- or -----------</h3> 

            <button className = "gmailBtn"><img src="/icons-gmail.png" class="icon"/>Gmail</button>
            </div>
        </div>

    );

}

export default SingInPage;
