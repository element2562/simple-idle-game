const Api = Object.create(null, {
    getUsers: {
        value: () => {
            return fetch("https://localhost:5001/api/players")
                .then(res => res.json())
        }
    },
    updateValues: {
        value: (updatedObject) => {
            return fetch(`https://localhost:5001/api/players/${updatedObject.userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(updatedObject)
            })
        }
    }
})

export default Api;