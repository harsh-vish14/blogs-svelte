import fs from 'fs';
import matter from 'gray-matter';

export function formatDate(date, dateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

export function readMetadataFromMarkdownFiles() {
	const mdFiles = fs.readdirSync('./src/posts'); // Update the path to match your file directory
	const metadataArray = [];

	mdFiles.forEach((file) => {
		const markdown = fs.readFileSync(`./src/posts/${file}`, 'utf-8'); // Update the path to match your file directory
		const { data } = matter(markdown);
		metadataArray.push(data);
	});

	return metadataArray;
}

export const slugGenerator = (path) => {
	return path.toLowerCase().replaceAll(' ', '-');
};
