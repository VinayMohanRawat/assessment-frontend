
export const sendData = (data) => {
    console.log(data.data[0])
    if (data.data[0].update === true) {
        return async () => {

            const sendRequest = async () => {
                const response = await fetch(
                    'https://assissment-1.onrender.com/update',
                    {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: data.data[0].name
                        })
                    })

                if (!response.ok) {
                    throw new Error("Sending data failed!")
                }
            }

            try {
                await sendRequest();

            } catch (error) {
                console.log(error.message)
            }
        }
    } else {
        return async () => {

            const sendRequest = async () => {
                const response = await fetch(
                    'https://assissment-1.onrender.com/add',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: data.data[0].name
                        })
                    })

                if (!response.ok) {
                    throw new Error("Sending data failed!")
                }
            }

            try {
                await sendRequest();

            } catch (error) {
                console.log(error.message)
            }
        }
    }

}
