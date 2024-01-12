import * as request from '../lib/requests'

const baseUrl = "http://localhost:3030/data/games"

export const create = async (gameData) => {
    const result = await request.post(baseUrl, gameData)
    

    return result;
}

export const getAll = async () => {
    const result = await request.get(baseUrl)
    
    if (result.code == 404) {
        return [];
    }

    return result;
}

export const getOne = async (id) => {

    const result = await request.get(`${baseUrl}/${id}`)

    return result;
}


export const edit = async (gameId, gameData) => {
    const result = await request.put(`${baseUrl}/${gameId}`, gameData)
    

    return result;
}