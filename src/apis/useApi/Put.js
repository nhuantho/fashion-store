import Put from "../sampleApi/Put";

const result = await Put("/api/data/1", {
	name: "Jane Doe",
	email: "janedoe@example.com",
});

if (result.error) {
	console.error(result.error);
} else {
	console.log(result);
}
