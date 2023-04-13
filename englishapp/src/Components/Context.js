import React, { createContext, useState, useEffect } from "react";
import loading from "../assets/image/loading.gif";
import "../style/context.module.scss";



export const Context = createContext();

export const Apiwords = (props) => {
    const [dictionary, SetDictionary] = useState([]);
    const [isLouding, SetIsloading] = useState(true);

    useEffect(() => {
        SetIsloading(true);
        fetch("http://itgirlschool.justmakeit.ru/api/words")
            .then((response) => response.json())
            .then((data) => { SetDictionary(data) })
            .catch((error) => {
                console.error("Error fetching words:", error);
            })
            .finally(() => { SetIsloading(false) })
    }, []);

    if (isLouding) {
        return <img
            src={loading}
            alt="loading"
            className="Context__loading"
        //style={{ height= 10 rem }}
        />;
    }

    return (
        <Context.Provider value={{ dictionary, isLouding, SetDictionary }}>
            {props.children}
        </Context.Provider>
    )

}