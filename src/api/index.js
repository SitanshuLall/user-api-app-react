export const getPosts = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET', //'GET' is used to get data from the server
    });
    return await response.json(); // return the JSON data; await is used to wait for the promise to resolve
}

export const getUser = async() => {
    const response = await fetch('https://randomuser.me/api/', {
        method: 'GET',
    });
    return await response.json();
}

