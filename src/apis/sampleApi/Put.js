import axios from "axios";
import BaseUrl from "../BaseUrl";

const Put = async (url, data) => {
	try {
		const response = await axios.put(`${BaseUrl}${url}`, data);
		return response.data;
	} catch (error) {
		return error.response;
	}
};

export default Put;
