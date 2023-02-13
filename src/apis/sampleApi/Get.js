import axios from "axios";
import BaseUrl from "../BaseUrl";

const Get = (url) => {
	return axios
		.get(`${BaseUrl}${url}`)
		.then((response) => {
			return { result: response.data };
		})
		.catch((error) => {
			return { error: error.response.data };
		});
};

export default Get;
