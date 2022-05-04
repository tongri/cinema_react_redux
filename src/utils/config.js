export const config = {
    headers: {
        'Content-type': 'application/json'
    }
}


const getConfig = (getState) => {
    const token = getState().users.token
    if (token) config.headers['Authorization'] = `Token ${token}`
    return config
}

export default getConfig
