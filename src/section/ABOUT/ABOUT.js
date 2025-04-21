import "./ABOUT.css";
import { useEffect, useRef } from "react";
import {LOREM,BUTTON,BUTTONCOLOR} from "../../component/index"
import t4 from "../../component/image/t4.png"
export default function ABOUT(){
    let aboutref=useRef();
    useEffect(()=>{
        let option={
            root:null,
            threshold:0.4
        }
        let observer=new IntersectionObserver((entris)=>{
            entris.forEach((e)=>{
                if(e.isIntersecting){
                    e.target.classList.add("slides")
                }
                else{
                    e.target.classList.remove("slides")
                }
            })
            
        },option)

        observer.observe(aboutref.current)
    },[])
    return(
    <div className="about">
        <img src={t4} alt="" />
        <div className="nested">
            <h2 ref={aboutref}>About Me</h2>
            <LOREM/> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptas placeat facere qui ab excepturi culpa debitis beatae. Recusandae error commodi blanditiis vitae quod minus ex.</p>
            <div className="buttons">
                <BUTTON/>
                <BUTTONCOLOR/>
            </div>
        </div>
        
    </div>
    )
}