// async/await is just syntatic sugar over Promises.
// It lets you write asynchronous code that looks like synchronous

async function getData() {
    const response = await fetch("/api/data")
    const data = await response.json()
    console.log(data)
}

// async makes function to return a Promise
// await pauses function untill the Promise resolve

// If the Promise is rejected, it throws - so we use try/catch
async function safeFetch() {
    try {
        const response = await fetch("/api/data")
        if (response.status != 200) {
            throw new Error("Error")
        }
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
