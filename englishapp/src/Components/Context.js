import React, { createContext, useState, useEffect } from "react";
import loading from "../assets/image/loading.gif";
import "../style/context.module.scss";



export const Context = createContext();

export const Apiwords = (props) => {
    const [dictionary, SetDictionary] = useState([]);
    const [isLouding, SetIsloading] = useState(true);
    const styles = {
        height: "80vh",
        margin: "1% 10%",
    };



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
        return <div className="container"> <img
            src={loading}
            alt="loading"
            className="Context__loading"
            style={styles}
        /></div >
    }

    return (
        <Context.Provider value={{ dictionary, isLouding, SetDictionary }}>
            {props.children}
        </Context.Provider>
    )

}