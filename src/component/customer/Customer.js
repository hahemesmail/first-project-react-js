import { FaAffiliatetheme } from "react-icons/fa";
import "./Customer.css"
export default function Customer(props) {
return(
    <div className="boccustom">
        <a href="#"><FaAffiliatetheme/></a>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores incidunt, veritatis accusantium eos nulla harum blanditiis minima a dolor obcaecati odit illo minus sint repudiandae ipsa? Obcaecati dolore adipisci esse!
            
        </p>
        <div className="nescustomers">
            <img src={props.img} alt="" />
            <div className="nescustomer">
                <h3>{props.name}</h3>
                <p>{props.now}</p>
            </div>
        </div>
    </div>
)
}