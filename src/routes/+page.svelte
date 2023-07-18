<script>
	import PostCard from './../components/post_card.svelte';
	import Header from '../components/header.svelte';

	export let data;
	console.log(data);

	// data = readMetadataFromMarkdownFiles();
	// data = fetch("api/posts")
</script>

<!-- <svelte:head>
	<title>{'some title'}</title>
</svelte:head> -->

<Header />

<section class="flex gap-3 my-10 mx-3 flex-wrap justify-around">
	{#each data.posts as post}
		<div data-aos="zoom-in">
			<PostCard {post} />
		</div>
	{/each}
</section>
