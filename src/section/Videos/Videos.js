import company from "../../component/image/company.jpg"
import { FaCaretRight } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

import video from "../../component/image/video.mp4"
import "./Videos.css"
import { useRef } from "react";
function Videos() {
let v=useRef()
  function show(){
        v.current.style.display="flex"
  }
  function off(){
    v.current.style.display="none"
  }

  return (
    <div className="videos">
        <div className="video">
          <div className="images">
            <FaCaretRight className="iconvideos" onClick={show}/>
              <img src={company} alt="" />
          </div>
        <div className="infoveideos">
            <p>what do you know about company</p>
            <h2>Nuturing Tomorrow's Leaders Todday</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo unde cum magnam distinctio ipsam repellat facere commodi deserunt harum consequatur officiis officia, possimus aliquam quos, sunt obcaecati quidem omnis nihil!

            </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque deleniti esse ducimus exercitationem reiciendis ea consequuntur obcaecati. Nobis quia laudantium vel deleniti perferendis? Itaque, eligendi. Neque repellendus voluptas minus nostrum?

            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maxime blanditiis aspernatur expedita sit asperiores, debitis iste commodi excepturi animi perspiciatis officia et, deleniti in consequatur qui ex adipisci sunt?

            </p>
        </div>
        
        </div>
        <div ref={v} className="v">
          <div className="v1">
              <FaX onClick={off} className="x"/>
              <video src={video} autoPlay muted controls></video>
        </div>

        </div>

    </div>
  )
 }
 export default Videos
