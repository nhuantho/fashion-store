import axios from "axios";
import BaseUrl from "../BaseUrl";

const Post = async (url, data) => {
	try {
		const response = await axios.post(`${BaseUrl}${url}`, data);
		return response.data;
	} catch (error) {
		return error.response;
	}
};

export default Post;
