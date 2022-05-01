const config = {
    headers: {
        'Content-type': 'application/json'
    }
}


const getConfig = (getState) => {
    console.log({'state': getState()})
    const token = getState().users.token
    if (token) config.headers['Authorization'] = `Token ${token}`
    console.log({'the conf': config})
    return config
}

export default getConfig
