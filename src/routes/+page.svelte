<script>
	import PostCard from './../components/post_card.svelte';
	import Header from '../components/header.svelte';
	import logo from '../public/website/logo.png';

	export let data;
	console.log(data);

	// data = readMetadataFromMarkdownFiles();
	// data = fetch("api/posts")
</script>

<!-- <svelte:head>
	<title>{'some title'}</title>
</svelte:head> -->

<svelte:head>
	<title>Harsh ✌🏽 / Blogs</title>
	<meta property="og:type" content="website" />
	<meta
		name="description"
		content="Hi, I am harshkumar vishwakarma this is my blogs, trying to share my knowledege to the internet"
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<meta name="author" content="Harshkumar Vishwakarma" />
	<meta content={logo} property="og:image" />
</svelte:head>

<Header />

<section class="flex gap-3 my-10 mx-3 flex-wrap justify-around">
	{#each data.posts as post}
		<div data-aos="zoom-in">
			<PostCard {post} />
		</div>
	{/each}
</section>
