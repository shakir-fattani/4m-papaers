const RestApi = require('faster-api-deploy');
const router = new RestApi.RESTRouter();
const { Login, saveUserByToken } = require('./../services/index');

router.get('/login', async (req, res) => {
    res.clearCookie('loginToken');
    res.render('login', { goBackToUrl: req.query.goBackToUrl || "/" });
});

const login = (email, password) => Login.login(email, password);

router.post('/login', async (req, res) => {
    res.clearCookie('loginToken');
    let {
        goBackToUrl,
        email,
        password,
    } = req.body;

    try {
        let result = await login(email, password);
        if (result.errorCode)
            throw result.message;

        const { token, userInfo } = result.data;

        saveUserByToken(token, userInfo);
        res.cookie('loginToken', token);
        res.newRedirect(goBackToUrl);
    } catch (e) {
        console.error(e);
        res.render('login', { goBackToUrl: req.query.goBackToUrl || "/", error: e.message || e });
    }
});

module.exports = router;