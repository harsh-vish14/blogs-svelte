import { error } from '@sveltejs/kit';
import * as config from '../../lib/config';
import { compile } from 'mdsvex';

export async function load({ params }) {
	try {
		// const response = await fetch(`${config.domain}/api/post/${params.slug}`);
		// const responseData = await response.json();
		// console.log({ responseData });
		// return responseData;

		const post = await import(`../../posts/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		console.log({ e });
		throw error(404, `Could not find ${params.slug}`);
	}
}
