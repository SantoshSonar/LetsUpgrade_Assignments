import React from "react"
import "./style.css"
import Button from "./Button"



const Apple=()=>
{
    return(
        <div>
             <h1 style={{textAlign : "center"}}> Welcome to the First tutorial of LetsUpgrade ReactJS Essential</h1>
             <h2> Below there are three buttons which has no use till now. We'll give them some use later !! </h2>
             <Button buttonText= "Click Me"/>
             <Button buttonText= "No No Click Me"/>
             <Button buttonText= "You can Click Me"/>   
        </div>
        )
}

export default Apple