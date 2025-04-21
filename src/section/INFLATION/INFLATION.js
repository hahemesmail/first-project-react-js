

import "./INFLATION.css"
import {INFLATIONBOX} from "../../component/index"
import inf from "../../component/information/INFLATIONINFO"
import { useEffect, useRef, useState } from "react"
export default function INFLATION(){
    const [bool,setbool]=useState(true);

    let boxse=useRef()
    
    let refs=useRef([])
    let h2ref=useRef([])
    let c=inf.map(function(e,index){
        return (<INFLATIONBOX key={e.id} number={e.number} icons={e.icons} text={e.text} ref={(el)=>(refs.current[index]=el)} h2ref={(el)=>(h2ref.current[index]=el)} />)
    })

useEffect(()=>{
    let option={
        root:null,
        threshold:0.3
    }

    let observe=new IntersectionObserver((entris)=>{
        entris.forEach((e)=>{
            if(e.isIntersecting && bool){
            
                
                refs.current.forEach((e)=>{
                    e.classList.add("slides")
                })
                let interval=setInterval(()=>{
                    if(h2ref.current[0].textContent>=75){
                        setbool(false)
                        clearInterval(interval)
                    
                    }
                    else{
            
                    h2ref.current[0].textContent++
                    h2ref.current[1].textContent=+h2ref.current[1].textContent + 13
                    h2ref.current[2].textContent=+h2ref.current[2].textContent + 94
                    h2ref.current[3].textContent=+h2ref.current[3].textContent + 45
                    }
                
            
            },20)
        
    
}

            
        
        })
    },option)
    
    observe.observe(boxse.current)

    
},[])



    return(
        <div ref={boxse} className="inflation">
            <div className="boxes">
            {c}
            </div>
            
        </div>
    )
}



