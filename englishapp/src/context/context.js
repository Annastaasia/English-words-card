import React, { createContext, useState, useEffect } from "react";


export const Context = createContext();

export const Apiwords = (props) => {
    const [isLouding, SetIsloading] = useState(true);
    const [dictionary, SetDictionary] = useState([]);

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

    return (
        <Context.Provider value={{ dictionary, isLouding, SetDictionary }}>
            {props.children}
        </Context.Provider>
    )

}