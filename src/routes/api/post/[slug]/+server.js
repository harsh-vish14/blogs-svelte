import fs from 'fs';
import marked from 'marked';
import { json } from '@sveltejs/kit';
import matter from 'gray-matter';

function process_markdown(markdown) {
	const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
	const content = markdown.slice(match[0].length);
	return { content };
}

function getPost(slug) {
	const options = {
		mangle: false,
		headerIds: false
	};
	const file = `./src/posts/${slug}.md`;
	if (!fs.existsSync(file)) return null;

	const markdown = fs.readFileSync(file, 'utf-8');

	const { content } = process_markdown(markdown);
	const { data } = matter(markdown);

	const html = marked.parse(content, options);

	return {
		content,
		html,
		meta: data
	};
}

export function GET({ params }) {
	const res = getPost(params.slug);
	return json(res);
}
