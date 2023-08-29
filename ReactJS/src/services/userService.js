import axios from '../axios';

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('./api/login', {
        email: userEmail, password: userPassword
    });
}

const handleRegisterApi = (userEmail, userPassword, userFirstName, userLastName) => {
    return axios.post('./api/register', {
        email: userEmail, password: userPassword, firstName: userFirstName, lastName: userLastName
    });
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)
}

const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    })
}


export { handleLoginApi, getAllUsers, createNewUserService, deleteUserService, handleRegisterApi }