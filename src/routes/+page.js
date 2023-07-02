import * as config from '../lib/config';

export async function load() {
	const response = await fetch(`${config.domain}/api/posts`);
	const responseData = await response.json();
	console.log(responseData);
	return { posts: responseData };
}
