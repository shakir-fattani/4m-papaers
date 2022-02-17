const { get, del, post, put } = require('./http');

const login = (email, password) => {
    console.log({ email, password });

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
