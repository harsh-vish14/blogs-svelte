import fs from 'fs';
import marked from 'marked';
import { json } from '@sveltejs/kit';
import matter from 'gray-matter';
import { compile } from 'mdsvex';

function process_markdown(markdown) {
	const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
	const content = markdown.slice(match[0].length);
	return { content };
}

const getPost = async (slug) => {
	const options = {
		mangle: false,
		headerIds: false
	};
	const file = `./src/posts/${slug}.md`;
	if (!fs.existsSync(file)) return null;

	const markdown = fs.readFileSync(file, 'utf-8');

	const { content } = process_markdown(markdown);
	const { data } = matter(markdown);
	console.log({ data });

	const compiledResponse = await compile(content);

	// console.log('compiledResponse is: ', compiledResponse);

	return {
		content,
		html: compiledResponse.code,
		meta: data
	};
};

export async function GET({ params }) {
	const res = await getPost(params.slug);

	return json(res);
}
