import "./Home.css";
import { useEffect, useRef } from "react";
import {BUTTON,TEXTCHANGE,LOREM} from "../../component/index"
export default function Home(){
  let homeRef=useRef(null)
  
    useEffect(()=>{
      const t=new Set(homeRef.current.children);
      
      let observer=new IntersectionObserver((entris)=>{
          entris.forEach((e)=>{
            if(e.isIntersecting){
              e.target.classList.add("slides")
            }
            else{
              e.target.classList.remove("slides")
            }
          })
      })
  
      t.forEach((e)=>{
        observer.observe(e)
      })
  
      
  
    })
   

  

  return (
    <div className="Homes">
      <div className="container">
        <div ref={homeRef} className="content">
              <p>Hello,Im Hashem</p>
              <TEXTCHANGE/>
              <LOREM/>
              <BUTTON/>
        </div>
      
      </div>
    </div>  
  
  )
}
