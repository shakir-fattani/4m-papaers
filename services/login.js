const { get, del, post, put } = require('./http');

const login = (email, password) => {
    console.log({ email, password });

    if (email != "mujtaba@4m.com")
        throw "email is wrong"

    if (password != "1234567")
        throw "password is wrong"

    return {
        data: {
            token: "admin-admin",
            userInfo: {
                userId: 1,
                email: "admin@admin.com",
                name: "admin"
            }
        }
    };
    // return post(`/ns/login/main`, null, {
    //     email: email,
    //     password: password
    // });
};

module.exports = { login };
