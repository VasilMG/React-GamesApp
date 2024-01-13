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

export const getLatest = async () => {

    const query = encodeURIComponent(`offset=0&pageSize=3`);
    // console.log(query);
    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&${query}`);

    return result;
}

export const remove = async (gameId) => {
    request.remove(`${baseUrl}/${gameId}`);
}