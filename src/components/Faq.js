import React from "react";
import { useState } from "react";


export function Faq(props) {
    
    const [fold, setFold] = useState(false)

    return(
        <div className="faq">
            <h2 className="faq-title">
            {props.title}

            <button className="button" onClick={() => setFold(!fold)}>
                {fold ? '-' : '+'}
            </button>

            {fold && <div className="content">{props.desc}</div>}
            </h2>

        </div>
    )
}