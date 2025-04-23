import { useEffect, useRef, useState } from "react";
import "./Header.css";
import { FaPaperPlane,FaStream } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header(){

let refheader=useRef(null)
const[s,sets]=useState(0)



useEffect(() => {
    if (!refheader.current) return;

    const headerChildren = refheader.current.children;
    const nextSibling = refheader.current.nextSibling;
    if (!nextSibling && !nextSibling.children[0] && !headerChildren[1] && !headerChildren[1].children) {
        return
    }
    if (nextSibling && nextSibling.children[0] && headerChildren[1] && headerChildren[1].children) {
        let serve = new Set(nextSibling.children[0].children);
        let t = new Set(headerChildren[1].children);
    
            serve.forEach((e) => {           
            if (e.classList.contains("services")) {
                let c = 0;
                serve.forEach(() => {
                    c++;
                });
                if (c === 3) {
                    e.classList.add("padding");
                } else {
                    e.classList.remove("padding");
                }
            }
        });
        

        
            t.forEach((e) => {
            if (e.children[0].classList.contains("o")) {
                t.forEach((e) => {
                    e.classList.remove("sinon")
                    e.children[0].classList.remove("sinona")
                    e.children[0].classList.remove("ki");
                    e.children[0].classList.remove("o");
                });
                if(!e.classList.contains("five")){
                    e.children[0].classList.add("ki");
                }
                else if(e.classList.contains("five")){
                    e.classList.add("sinon")
                    e.children[0].classList.add("sinona")
                }
            
            }
            
        });
        

        
    }
}, [s]);



function p(e){
    sets(p=>p+1)
    if (!e.target) return;
    e.target.classList.add("o")
}

    const [value,setValue]=useState()
    function Move(){
        if(value==="p"){
            setValue(x=>"")
        }
        else{
            setValue(x=>"p")
        }
    }

    return(
        <div ref={refheader} className="Header" >
            <div className="icon">
                <Link to="/"><FaPaperPlane/></Link>
            </div>
         

            <ul className={value}>
                
                <li id="0" className="one"><Link className="ki" onClick={p} to="/">Home</Link></li>
                <li id="1" className="two"><Link onClick={p}  to="profile">About</Link></li>
                <li id="2" className="three"><Link onClick={p}  to="serve">Serve</Link></li>
                <li id="3" className="four"><Link onClick={p}  to="video">videos</Link></li>
                <li id="4" className="five"><Link onClick={p} to="sinup">Sing Up</Link></li>
                
                
            </ul>
            <span  className="stream" onClick={Move}><FaStream/></span>

        </div>
    )
}


