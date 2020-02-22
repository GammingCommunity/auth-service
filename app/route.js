const URL_MAPPER = require("../system/url_mapper");
const MAPPER = new URL_MAPPER();

module.exports = () => {
	MAPPER.map("POST", "/login", require("./controllers/login"));
	MAPPER.map("POST", "/register", require("./controllers/register"));
	MAPPER.map("GET", "/auth", require("./controllers/auth"));
	MAPPER.map("GET", "/test", require("./controllers/test"));

	return MAPPER;
};