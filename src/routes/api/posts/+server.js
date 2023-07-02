import { json } from '@sveltejs/kit';
import fs from 'fs';
import matter from 'gray-matter';

function readMetadataFromMarkdownFiles() {
	const mdFiles = fs.readdirSync('./src/posts'); // Update the path to match your file directory
	const metadataArray = [];

	mdFiles.forEach((file) => {
		const markdown = fs.readFileSync(`./src/posts/${file}`, 'utf-8'); // Update the path to match your file directory
		const { data } = matter(markdown);
		metadataArray.push(data);
	});

	return metadataArray;
}

export async function GET() {
	const posts = readMetadataFromMarkdownFiles();
	return json(posts);
}
