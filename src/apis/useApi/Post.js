import Post from "../sampleApi/Post";

const result = await Post("/api/data", {
	name: "John Doe",
	email: "johndoe@example.com",
});

if (result.error) {
	console.error(result.error);
} else {
	console.log(result);
}
