const RestApi = require('faster-api-deploy');
const router = new RestApi.RESTRouter();

router.get('/', async (req, res) => {
    res.render('home', {  });
});

router.get('/product', async (req, res) => {
    res.render('product', {  });
});

router.get('/category', async (req, res) => {
    res.render('category', {  });
});

router.get('/brand', async (req, res) => {
    res.render('brand', {  });
});

router.get('/user', async (req, res) => {
    res.render('user', {  });
});

router.get('/inventory', async (req, res) => {
    res.render('inventory', {  });

});

router.get('/add-category', async (req, res) => {
    res.render('add-category', {  });

});





module.exports = router;