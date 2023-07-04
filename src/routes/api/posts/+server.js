import { json } from '@sveltejs/kit';
import fs from 'fs';
import matter from 'gray-matter';

function sortPostsByDate(posts) {
	return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function readMetadataFromMarkdownFiles() {
	const mdFiles = fs.readdirSync('./src/posts'); // Update the path to match your file directory
	const metadataArray = [];

	mdFiles.forEach((file) => {
		const markdown = fs.readFileSync(`./src/posts/${file}`, 'utf-8'); // Update the path to match your file directory
		const { data } = matter(markdown);
		metadataArray.push(data);
	});
	const sortedPosts = sortPostsByDate(metadataArray);

	return sortedPosts;
}

export async function GET() {
	const posts = readMetadataFromMarkdownFiles();
	return json(posts);
}
