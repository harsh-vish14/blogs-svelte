import { error } from '@sveltejs/kit';
import * as config from '../../lib/config';

export async function load({ params }) {
	try {
		const response = await fetch(`${config.domain}/api/post/${params.slug}`);
		const responseData = await response.json();
		return responseData;
	} catch (e) {
		console.log({ e });
		throw error(404, `Could not find ${params.slug}`);
	}
}
