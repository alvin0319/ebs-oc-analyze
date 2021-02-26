const app = require("./ebs-oc");
const config = require("./config.json");

(async () => {
	console.log("X-Auth-Token: " + config["x-auth-token"]);
	const res = await app.tryGetUrl(app.GET_URLS.LESSON_LIST, config["x-auth-token"], {
		"{school_name}": config["school-name"]
	});
	console.log(res);

})().catch((err) => console.error(err));