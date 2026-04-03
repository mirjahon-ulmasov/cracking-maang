interface User {
    readonly id: number
    email: string
    name?: string
    address: {
        country: {
            id: number
            title: string
        }
        city: string
    }
}