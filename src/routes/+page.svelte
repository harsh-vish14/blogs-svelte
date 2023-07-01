<script>
	import PostCard from './../components/post_card.svelte';
	import Header from '../components/header.svelte';
	import { onMount } from 'svelte';
	import { readMetadataFromMarkdownFiles } from '../lib/utils';
	let data = [];
	data = readMetadataFromMarkdownFiles();

	const post = {
		title: 'Second post',
		description:
			'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
		date: '2023-07-01',
		bannerImage: 'https://wallpapercave.com/wp/rtgOtlJ.jpg',
		categories: ['sveltekit', 'svelte'],
		published: true
	};
</script>

<!-- <svelte:head>
	<title>{'some title'}</title>
</svelte:head> -->

<Header />

<section class="flex gap-x-10 my-10">
	{#each data as post}
		<PostCard {post} />
	{/each}
</section>
