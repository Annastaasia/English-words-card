import React, { createContext, useState, useEffect } from "react";
import Louder from "./Louder";
import Error from "./Error";

export const Context = createContext();

export const Apiwords = (props) => {
    const [dictionary, SetDictionary] = useState([]);
    const [isLouding, SetIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [updatedWord, setUpdatedWord] = useState({});


    useEffect(() => {
        fetch("http://itgirlschool.justmakeit.ru/api/words")
            .then((response) => response.json())
            .then((data) => {
                SetDictionary(data);
            })
            .catch((error) => {
                console.error("Error fetching words: ", error);
            })
            .finally(() => {
                SetIsLoading(false);
            });
    }, [dictionary]);


    const addWord = async (newWord) => {
        try {
            const res = await fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
                mode: "no-cors",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newWord)
            });
            if (res.status === 200) {
                dictionary.push(newWord);
                SetDictionary([...dictionary]);
            }
        } catch (error) {
            console.error("Error adding word: ", error);
            setError(error); // Обработка ошибок соединения с сервером
        } finally {
            SetIsLoading(false);
        }
    }

    const updateWord = (updatedWord) => {
        console.log(updatedWord);
        SetIsLoading(true);
        fetch(
            `http://itgirlschool.justmakeit.ru/api/words/${updatedWord.id}/update`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedWord),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("Error updating word: ", error);
                setError(error);
            })
            .finally(() => {
                SetIsLoading(false);
            });
    };

    const deleteWord = (id) => {
        SetIsLoading(true);
        fetch(
            `http://itgirlschool.justmakeit.ru/api/words/${id}/delete`,
            {
                method: "POST",
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to delete word");
                }
                const newDictionary = [...dictionary].filter((item) => item.id !== id)
                SetDictionary(newDictionary)
            })
            .catch((error) => {
                console.error("Error deleting word: ", error);
                setError(error);
            })
            .finally(() => {
                SetIsLoading(false);
            });
    }

    if (isLouding) {
        return <Louder />
    }

    if (error) {
        return <Error />
    }


    return (
        <Context.Provider value={{
            dictionary, isLouding, SetDictionary, error, addWord, deleteWord, updateWord, updatedWord,
            setUpdatedWord
        }}>
            {props.children}
        </Context.Provider>
    )

}

















// useEffect(() => {
    //     getWords();
    // }, []);

    // const getWords = async () => {
    //     SetIsloading(true);
    //     fetch(
    //         "http://itgirlschool.justmakeit.ru/api/words"
    //     )
    //         .then((response) => {
    //             if (response.ok) {
    //                 return response.json();
    //             }
    //         })
    //         .then((data) => { SetDictionary(data) })
    //         .catch(() => {
    //             setError(true);
    //         })
    //         .finally(() => { SetIsloading(false) })
    // };

    // useEffect(() => {
    //     const fetchWords = async () => {
    //         SetIsloading(true);
    //         fetch("http://itgirlschool.justmakeit.ru/api/words")
    //             .then((response) => response.json())
    //             .then((data) => { SetDictionary(data) })
    //             .catch(() => {
    //                 setError(true);
    //             })
    //             // .catch((error) => {
    //             //     console.error("Error fetching words:", error);
    //             // })
    //             .finally(() => { SetIsloading(false) })
    //     }
    //     fetchWords();
    // }, []);

    // const addWord = async (word) => {
    //     await fetch("https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/add", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(word),
    //     })
    //         .then(() => {
    //             getWords();
    //         })
    //         .catch(() => {
    //             setError(true);
    //         })
    // };

    // const editWords = (dictionary) => {
    //     fetch(`http://itgirlschool.justmakeit.ru/api/words/${dictionary.id}/update`, {
    //         method: "POST",
    //         body: JSON.stringify(dictionary),
    //     })
    //         .then(() => {
    //             getWords();
    //         })
    //         .then((data) => {
    //             console.log(data);
    //         })
    //         .catch((errors) => setError(errors));
    // };

    // const updateWord = async (word) => {
    //     fetch(`http://itgirlschool.justmakeit.ru/api/${word.id}/update`, {
    //         method: "POST",
    //         body: JSON.stringify(word),
    //     })
    //         .then(() => {
    //             getWords();
    //         })
    //         .then((data) => {
    //             SetDictionary((prevDictionary) =>
    //                 prevDictionary.map((newword) =>
    //                     word.id === newword.id ? data : word
    //                 )
    //             );
    //         })
    //         .catch((errors) => setError(errors));
    // };

    // const updateWord = async (id) => {
    //     const newWord = {
    //         english: dictionary.english,
    //         transcription: dictionary.transcription,
    //         russian: dictionary.russian,
    //     }
    //     try {
    //         const res = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
    //             method: "POST",
    //             body: JSON.stringify(newWord)
    //         });
    //         if (res.ok) {
    //             const newList = [...list].map(item => {
    //                 if (item.id === id) {
    //                     item.english = dictionary.english;
    //                     item.transcription = dictionary.transcription;
    //                     item.russian = dictionary.russian;
    //                 }
    //                 return item;
    //             });
    //             setList(newList);// Обновляем список слов
    //         }
    //     } catch (e) {
    //         alert(`Ошибка соединения с сервером. ${e}`);
    //     } finally {
    //         SetDictionary(false)
    //         // Очищаем поля
    //     }
    // }


    // const deleteWords = async (id) => {
    //     await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
    //         method: "POST",
    //     })
    //         .then(() => {
    //             getWords();
    //         })
    //         .catch(() => {
    //             setError(true);
    //         })
    // };

    // const deleteWords = async (id) => {
    //     try {
    //         const res = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
    //             method: "POST",
    //         });
    //         if (res.ok) {
    //             const newList = [...list].filter(item => item.id !== id);
    //             // Обновляем список слов
    //             setList(newList)
    //         };

    //     } catch (e) {
    //         alert(`Ошибка соединения с сервером. ${e}`);
    //     } finally {
    //         // Очищаем поля
    //     }
    // }


    // const addWords = async () => {
    //     // Получаем значения полей
    //     try {
    //         const res = await fetch(`http://itgirlschool.justmakeit.ru/api/words/add`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 // Преобразуем данные в формат JSON
    //             })
    //         });
    //         if (res.status === 200) {
    //             const newlist = await res.json();
    //             // Обновляем список слов с новым словом
    //         }
    //     } catch (e) {
    //         alert(`Ошибка соединения с сервером. ${e}`); // Обработка ошибок соединения с сервером
    //     } finally {
    //         // Очищаем поля
        // }


            // const addWord = (newWord) => {
    //     console.log(newWord)
    //     SetIsLoading(true);
    //     fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
    //         mode: "no-cors",
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(newWord)
    //     })
    //         .then((response) => response.json())
    //         .then(() => {
    //             dictionary.push(newWord);
    //             SetDictionary([...dictionary]);
    //         })
    //         .catch((error) => {
    //             console.error("Error adding word: ", error);
    //             setError(error);
    //         })
    //         .finally(() => {
    //             SetIsLoading(false);
    //         });
    // };