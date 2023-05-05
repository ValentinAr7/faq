import React from "react";
import { useState } from "react";
import { data } from '../data'

export function ImageGen() {

    const [show, setShowMore] = useState(false)
    const [index, setIndex] = useState(0)
    let hasNext = index < data.length - 1


    function handleNext() {
        if (hasNext) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }

    function handleShowMore() {
        setShowMore(!show)
    }

    let info = data[index]

    return (

        <section>
            <div>
                <button onClick={handleNext}>Next</button>
                <h2 className="crypto-title">{data.crypto}</h2>
                <h3>
                    ({index + 1} of {data.length})
                </h3>
                <img
                    src={info.img}
                />

                <div>
                    <button onClick={handleShowMore}>{show ? 'Hide Info' : 'Show More Info'}</button>
                    {show && <p>{info.purpose}</p>}

                </div>
            </div>
        </section>

    )
}

