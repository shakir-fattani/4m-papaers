const RestApi = require('faster-api-deploy');
const cookieParser = require('cookie-parser');
const { getUser } = require('./../services/index');

const router = new RestApi.RESTRouter();
router.filter((req, res, next) => {
    try {
        if (!req.cookies.loginToken)
            throw 'Please login first.';
        const token = req.cookies.loginToken;
        const currentUser = getUser(token);
        res.locals.currentUser = currentUser;
        res.locals.token = token;
        req.compute = { token, currentUser };
        next();
    } catch (e) {
        res.newRedirect('/login?reason=' + (e.message || e) + '&goBackToUrl=' + encodeURIComponent(req.originalUrl));
    }
});
router.use('/', require('./home-controller'))
const NonSecureRouter = new RestApi.RESTRouter();
NonSecureRouter.expressUseParam(cookieParser());

NonSecureRouter.filter((req, res, next) => {
    const webBaseUrl = "";
    res.locals.webBaseUrl = webBaseUrl;
    const redirect = res.redirect.bind(res);
    res.newRedirect = (urlStr) => {
        console.log("newRedirect", webBaseUrl + urlStr);
        redirect(webBaseUrl + urlStr);
    };

    res.locals.currentUrl = req.originalUrl;
    res.locals.error = false;
    res.locals.isBlockPattern = false;
    res.locals.pageName = "home";
    res.locals.blocks = [];
    res.locals.pageTitle = "4m papers Admin Panel";
    res.locals.query = req.query;
    res.locals.body = req.body || {};
    next();
});

NonSecureRouter.use('/', require('./login-controller'));
NonSecureRouter.use('/', router);
module.exports = NonSecureRouter;