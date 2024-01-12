
const basUrl = "http://localhost:3030/users"

export const login = async (email, password) => {
    const res = await fetch(`${basUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })

    console.log(JSON.stringify({email, password}))


    const result = await res.json();



    return result;

}

export const register = async (email, password) => {
    const res = await fetch(`${basUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });


    const result = await res.json();

    return result;
}

export const logout = async () => {
    const res = await fetch(`${basUrl}/logout`, {
        headers: {
            'X-Authorization': localStorage.getItem('accessToken'),
        }
    });
    console.log(res)
    return res.status;
}
