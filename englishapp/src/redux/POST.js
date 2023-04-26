class POST {

    static async post(newWord) {
        try {
            const response = await fetch(
                "http://itgirlschool.justmakeit.ru/api/words/add",
                {
                    mode: "no-cors",
                    method: "POST",
                    body: JSON.stringify({ newWord }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.status === 200) {
                const data = await response.json();
                return data;
                // dictionary.push(newWord);
                // SetDictionary([...dictionary]);
            }

        } catch (e) {
            console.error(e);
        }
    };

}

export default POST
