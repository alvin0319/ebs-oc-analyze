const axios = require("axios");

const GET_URLS = {
	LECTURE_LIST: "https://kyg3.ebsoc.co.kr/common_domain/lecture/api/v1/{school_name}/remotelecture/list/",
	LEARNING: "https://kyg3.ebsoc.co.kr/common_domain/lecture/api/v1/student/learning",
	NOTICE_SCHOOL_MAIN_LIST: "https://kyg3.ebsoc.co.kr/common_domain/common/api/v1/noticeCommonMainList",
	LESSON_LIST: "https://kyg3.ebsoc.co.kr/common_domain/lecture/api/v1/{school_name}/lesson/list"
};

const POST_URLS = {
	CLASS_LIST: "https://kyg3.ebsoc.co.kr/common_domain/cls/api/v1/school/schoolClassList"
};

/**
 * @param {string} url
 * @param {string} x_auth_token
 * @param {Object} replace_params
 * @returns {Promise<any>}
 */
async function tryGetUrl(url, x_auth_token, replace_params= {}){
	for(let name in replace_params){
		let value = replace_params[name];
		url = url.replace(name, value);
	}
	const result = await axios.get(url, {
		headers: {
			"X-AUTH-TOKEN": x_auth_token,
			accept: "application/json",
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36"
		},
	});
	//console.log(data);
	return result.data;
}

/**
 * @param {string} url
 * @param {string} x_auth_token
 * @param {Object} post_body
 * @param {Object} replace_params
 * @returns {Promise<any>}
 */
async function tryPostUrl(url, x_auth_token, post_body = {}, replace_params = {}){
	for(let name in replace_params){
		let value = replace_params[name];
		url = url.replace(name, value);
	}
	const result = await axios.post(url, post_body, {
		headers: {
			"X-AUTH-TOKEN": x_auth_token,
			accept: "application/json",
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36"
		},
	});
	return result.data;
}

module.exports = {
	tryGetUrl,
	tryPostUrl,
	POST_URLS,
	GET_URLS
}