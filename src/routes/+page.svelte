<script>
	import PostCard from './../components/post_card.svelte';
	import Header from '../components/header.svelte';
	import { load } from './+page.js';

	import { onMount } from 'svelte';
	let data = [];
	onMount(async () => {
		let res = await load();
		data = res.posts;
	});

	// data = readMetadataFromMarkdownFiles();
	// data = fetch("api/posts")
</script>

<!-- <svelte:head>
	<title>{'some title'}</title>
</svelte:head> -->

<Header />

<section class="flex gap-x-10 my-10 flex-wrap justify-center">
	{#each data as post}
		<PostCard {post} />
	{/each}
</section>
