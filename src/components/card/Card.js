import React , {useState} from 'react';

import "./Card.scss";
import wonder from "./img/ww.png";
import close from "./img/close.svg";


const Card = () =>{
    const [onChange, setOnChange] = useState(true);


    return (
        
        <div className="cardContainer" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)), url(${wonder})`}}>
            <div className="cardContent"
                style={{
                    width: onChange?"290px":"100%",
                    height: onChange? "190px":"100%",
                }}
            >
                <h4>Powerful Woman</h4>
                <h1>Wonder Woman</h1>
                
                <p>Diana Prince is the most recognizable female superhero in the world. Her debut film Wonder Woman is the highest grossing superhero origin film of all time. Created in 1941 and beloved for over 76 years, Diana Prince is a strong, compassionate
                    role model for men and women everywhere.
                </p>
                <a href="#">LINK</a>
                <button type="button" onClick={()=>setOnChange(!onChange)}>
                    <img src={close} style={{
                        transform: onChange? "rotate(45deg)":"rotate(0)"
                    }}/>
                </button>
            </div>
        </div>
        
    );

};
export default Card;