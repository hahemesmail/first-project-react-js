import { useEffect, useState } from "react"
import "./Container.css"
export default function Container(props){
    const [bbtn,setbbtn]=useState("")
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY>50?setbbtn("bb"):setbbtn("")
        })
    })
    function onTop(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return(
        <div className="container">
            {props.children}
 
        <button onClick={onTop} className={bbtn}>on top</button>

        </div>

    )
}
