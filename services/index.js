const UserManagement = {};
const saveUserByToken = (token, user) => {
    UserManagement[token] = user;
};

const getUser = (token) => {
    if (!UserManagement[token])
        throw "Please Login First";
    console.log({ token, UserManagement })
    return UserManagement[token] || {};
};

module.exports = {
    HTTPService: require('./http'),
    Login: require('./login'),
    getUser,
    saveUserByToken
};