import { FaFacebookF,FaYoutube } from "react-icons/fa6";
import { ImRocket } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import "./SINUP.css"
function SINUP(){
    return(
        <>
            <div className="sinup">
                <h1>Contact Me</h1>
                <p>pleas fill out the information about what we need</p>
                <form action="#">
                    <input type="text" required placeholder="Your name"/>
                    <input type="email" required placeholder="Your Email"/>
                    <textarea required placeholder="Your Message"></textarea>
                    <input type="submit" value={"submit"} />
                </form>
                <div className="icons">
                    <FaFacebookF className="icon"/>
                    <FaYoutube className="icon"/>
                    <IoLogoTwitter className="icon"/>
                    <IoLogoInstagram className="icon"/>
                </div>
                
            </div>
        </>
    )
}
export default SINUP