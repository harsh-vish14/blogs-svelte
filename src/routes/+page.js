export async function load({ fetch }) {
	const response = await fetch(`api/posts`);
	const responseData = await response.json();
	console.log({ responseData });
	return { posts: responseData };
}
