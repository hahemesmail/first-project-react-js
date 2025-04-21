import react,{ useRef, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import Customer from "../../component/customer/Customer"
import InformationCustomer from "../../component/infromationcustomer/InformationCustomer"
import "./Customs.css"
export default function Customs() {
    let cref=useRef()
    let t=0
    let c=InformationCustomer.map((e)=>{
        return <Customer id={e.key} img={e.img} name={e.name} now={e.now}/>
    })


    function next(e){
        e.preventDefault()
        if(t>-51){
            t-=25.5
            cref.current.style.transform=`translatex(${t}%)`
        }
        
    }
    const before=(e)=>{
        e.preventDefault();
        if(t<0){
            t+=25.5;
            cref.current.style.transform=`translatex(${t}%)`
        }
    }
  
  return (
    <div className="customs">
        
        <h2>What Custom Say About Us</h2>
        <a className="left" href="#" onClick={before}>< FaArrowCircleLeft/></a>
        <a  className="right" href="#" onClick={next} >< FaArrowCircleRight/></a>
        <div className="slides">
            <div ref={cref} className="boxs">
                {c}
            </div>
        </div>
    </div>

        
   
  )
}
