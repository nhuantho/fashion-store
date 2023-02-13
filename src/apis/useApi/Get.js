import Get from "../sampleApi/Get";

Get("/items").then((response) => {
	if (response.error) {
		console.error(response.error);
	} else {
		console.log(response.result);
	}
});
