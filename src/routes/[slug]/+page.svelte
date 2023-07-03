<script>
	import { component } from './../../../.svelte-kit/output/server/nodes/1.js';
	import { formatDate } from '$lib/utils';
	export let data;
</script>

<!-- SEO  -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta name="description" content={data.meta.description} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<meta name="keywords" content={data.meta.categories.join(' ')} />
	<meta name="author" content="Harshkumar Vishwakarma" />
	<meta property="og:title" content={data.meta.title} />
	<meta content={data.meta.bannerImage} property="og:image" />
</svelte:head>

<article class="mx-5">
	<!-- Title   -->
	<hgroup class="font-league-spartan">
		<div class="h-auto w-full relative">
			<img src={data.meta.bannerImage} alt="banner image" class="h-full w-full rounded-lg" />
			<svg
				width="105"
				height="89"
				style="height: 50px;"
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 animate-pulse -z-10"
				viewBox="0 0 105 89"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M31.6146 30.4982C33.4381 27.4713 35.0302 24.5487 36.8192 21.7456C37.6741 20.4061 37.6214 19.4177 36.8003 18.0737C33.7388 13.0624 30.8188 7.9688 27.8574 2.89962C27.3806 2.08347 26.9632 1.23436 26.3244 0.0370107C30.4393 0.0370107 34.1866 -0.0335848 37.926 0.103159C38.5863 0.127304 39.4433 0.887869 39.8211 1.52668C45.8478 11.7173 51.8241 21.9363 57.7593 32.1779C58.1488 32.85 58.5121 33.9621 58.2095 34.5198C56.4121 37.8324 54.4147 41.0419 52.3027 44.5917C49.5328 39.8909 46.9748 35.5497 44.2414 30.911C42.1305 34.5062 40.0888 37.7335 38.3632 41.1141C37.9756 41.8735 38.4286 43.3154 38.9416 44.1954C45.0503 54.6757 51.2032 65.1322 57.4567 75.5308C58.4402 77.1663 58.5853 78.3763 57.4879 80.0006C55.6983 82.6498 54.1705 85.467 52.303 88.5975C34.8163 58.9885 17.5366 29.7303 0 0.0369661C4.15078 0.0369661 7.8847 -0.0927174 11.5958 0.133713C12.4578 0.186311 13.4963 1.30687 14.0227 2.18229C19.3675 11.0698 24.6144 20.0132 29.9209 28.9227C30.3072 29.5715 30.9438 30.0787 31.6146 30.4982Z"
					fill="#EBEBEB"
				/>
				<path
					d="M56.9055 7.18822C55.5203 4.82045 54.2554 2.63276 52.8438 0.191162C70.1331 0.191162 87.1303 0.191162 104.573 0.191162C91.4924 22.3288 78.4828 44.3462 65.2935 66.6677C63.2502 63.2211 61.2601 60.1165 59.5889 56.8566C59.2008 56.0996 59.6299 54.6628 60.1391 53.7925C67.8469 40.6194 75.6316 27.4893 83.3951 14.3472C83.9809 13.3556 84.5424 12.3503 85.361 10.9227C81.0657 10.9227 77.1296 10.8357 73.2047 11.0012C72.4812 11.0317 71.5926 11.9595 71.1406 12.6862C69.301 15.6433 67.6017 18.6832 65.6368 22.0603C62.638 16.9439 59.8319 12.1561 56.9055 7.18822Z"
					fill="#EBEBEB"
				/>
			</svg>
		</div>
		<h1 class="font-bold text-center text-5xl md:text-6xl xl:text-7xl my-10">{data.meta.title}</h1>
		<div
			class="font-normal text-lg opacity-90 m-auto"
			style="max-width: 700px;
	text-wrap: balance;"
		>
			<span>
				Written By - <a href="https://harshvish.vercel.app/" target="_blank" class="text-pink"
					>Harshkumar Vishwakarma</a
				>
			</span><br />
			<span>{formatDate(data.meta.date)}</span>
		</div>
	</hgroup>
	<!-- blog -->
	<div class="flex gap-5 my-5 mb-10 opacity-60 font-league-spartan blog m-auto">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>
	<div class="blog m-auto font-league-spartan">
		<svelte:component this={data.content} />
	</div>
	<!-- blog footer -->
	<div
		class="m-auto mt-28 flex flex-col gap-8 font-league-spartan text-2xl bg-[#e54efe30] p-5 rounded-md"
		style="max-width: 700px;
	text-wrap: balance;"
	>
		<div class="font-bold text-4xl">Found A Mistake ?</div>
		<div>
			Every post is a Markdown file so contributing is simple as following the link below and
			pressing the pencil icon inside GitHub to edit it.
		</div>
		<div class="blog"><a href="" target="_blank">Link to Github ></a></div>
	</div>
</article>
