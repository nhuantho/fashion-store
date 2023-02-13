import Delete from "../sampleApi/Delete";

Delete("/items/1").then((response) => {
	if (response.error) {
		console.error(response.error);
	} else {
		console.log(response.result);
	}
});
