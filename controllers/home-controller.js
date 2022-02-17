const RestApi = require('faster-api-deploy');
const router = new RestApi.RESTRouter();

router.get('/', async (req, res) => {
    res.render('home', {  });
});

module.exports = router;