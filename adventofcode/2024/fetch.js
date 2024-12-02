import axios from "axios"

export async function fetchData(url, cookie) {
    try {
        const response = await axios.get(url, {
            headers: {
                Cookie: `session=${cookie}`,
            },
        })
        return response.data
    } catch (error) {
        console.error("Error fetching Advent of Code input:", error.message)
    }
}
