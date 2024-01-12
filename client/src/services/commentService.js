import * as request from '../lib/requests'

const baseUrl = 'http://localhost:3030/data/comments'

export const getCommentsAll = async (gameID) => {

    const query = new URLSearchParams({
        where: `gameID="${gameID}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export const commentCreate = async (gameID, text) => {
    const data = {gameID, text}

    const newComment = await request.post(baseUrl, data)

    return newComment;
}