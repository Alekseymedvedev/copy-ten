

const userToken = localStorage.getItem('token')

export const headersContent = "application/json"
export const headersAccept = "application/json"
export const headersAuthorization = `Bearer ${userToken}`

// process.env.REACT_APP_TOKEN