import "./SERVICES.css";
import { useEffect, useRef } from "react";
import SERVICESBOXINFO from "../../component/information/SERVICESBOXINFO"
import { SERVICESBOX } from "../../component/index";

export default function SERVICES(){
    let h2refservese=useRef(null)
    let mainbox=useRef(null)
    let ser=SERVICESBOXINFO.map(function(e){
        return (<SERVICESBOX key={e.id} icons={e.icon} h={e.h} icspan={e.icspan}/>)
    })
    useEffect(()=>{
        let b=new Set(mainbox.current.children)
        

        let option={
            root:null,
            threshold:0.6
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

        

        let obs1=new IntersectionObserver((ee)=>{
            ee.forEach((e)=>{
                if(e.isIntersecting){
                    e.target.classList.add("run")
                }
                else{
                    e.target.classList.remove("run")
                }
            })
        })
    
        observer.observe(h2refservese.current)
        
        b.forEach((e)=>{
            obs1.observe(e)
        })
    })
  

    return(
        <div className="services">
            <h2 ref={h2refservese}>services</h2>
            <div ref={mainbox} className="container">
                {ser}
            </div>
            
        </div>
    )
}