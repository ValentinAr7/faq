import React from "react";
import { useState } from "react";


export function Faq(props) {
    
    const [fold, setFold] = useState(false)

    return(
        <div className="grid-section">
        <div className="faq">
            <h2 className="faq-title">
            {props.title}
       
        <button className="btn " onClick={() => setFold(!fold)}>
                {fold ? '-' : '+'}
            </button>

            {fold && <div className="content">{props.desc}</div>}
            </h2>

        </div>
        </div>
    )
}