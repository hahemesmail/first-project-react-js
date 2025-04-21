import "./TEXTCHANGE.css"
import { useState,useEffect } from "react";

export default function TEXTCHANGE(){
    const [value,setvalue]=useState("")
    const [index,setindex]=useState(0)
    const [counter,setcounter]=useState(0)
    let words=["Front End Developer","Back End Developer","Ui UX Developer"];

        useEffect(()=>{
            
            
            let bs=setInterval(()=>{
                let word=words[index]
                if(counter < word.length){
                    setvalue((prev) => prev + word[counter]);
                    setcounter((prev) => prev + 1); 
                    
                    
                }
                else{
                    setcounter(0)
                    setvalue("")  
                    setindex((e)=>(e+1) % words.length)
    
                    
                }
            },150)
           
        
            return()=>{
                clearInterval(bs)
            }
    
            },[index,counter]) 

            


return(
<div className="text">{value}</div>
)

}

