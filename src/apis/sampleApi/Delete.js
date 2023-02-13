import axios from "axios";
import BaseUrl from "../BaseUrl";

const Delete = (url) => {
	return axios
		.delete(`${BaseUrl}${url}`)
		.then((response) => {
			return { result: response.data };
		})
		.catch((error) => {
			return { error: error.response.data };
		});
};

export default Delete;
