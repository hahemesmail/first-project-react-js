import { forwardRef } from "react";
import "./INFLATIONBOX.css";

let INFLATIONBOX=forwardRef((props,ref)=>{
    
    return(
        <div ref={ref} className="box">
            <a  href="#">{props.icons}</a>
            <h2 ref={props.h2ref}>{props.number}</h2>
            <p>{props.text}</p>
        </div>
    )
})
export default INFLATIONBOX