require('ejs');
process.env.BASEURL_FOR_WEB = "/";
const BasicServerStarter = require('basic-server-starter');
const { version } = require('./package.json');

BasicServerStarter.setConfigVar("APP_NAME", "4m Paper's Admin App");
BasicServerStarter.setConfigVar("API_VERSION", "1.0");
BasicServerStarter.setConfigVar("VERSION", version);
BasicServerStarter.setConfigVar("SERVER_PORT", 35005);
BasicServerStarter.InitServer(__dirname);

const WebRouter = BasicServerStarter.getWebController();
WebRouter.use('/', require('./controllers/index-controller'));
BasicServerStarter.startServer("0.0.0.0");