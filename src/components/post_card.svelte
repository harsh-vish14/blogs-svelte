<script>
	import { formatDate, slugGenerator } from '$lib/utils';
	export let post;
</script>

<a href={slugGenerator(post.title)} class="w-fit">
	<div
		class="p-3 border border-[#2C303A] hover:bg-[#2C303A] transition-all max-w-sm min-w-[300px] rounded-md font-league-spartan"
	>
		<!-- card header start -->
		<div>
			<img
				src={post.bannerImage}
				alt={post.title}
				loading="lazy"
				style="height: 221px;
    width: 359px;"
			/>
		</div>
		<!-- card header end -->
		<!-- card body start -->
		<div class="text-sm text-right m-2 opacity-70">{formatDate(post.date)}</div>
		<div class="text-4xl font-semibold">{post.title}</div>
		<div class="text-lg mb-3 custom-word-limit truncate pr-2" style="text-wrap:balance">
			{post.description}
		</div>
		<!-- card body end -->
		<!-- card footer start -->
		<div class="flex gap-5 my-5 opacity-80">
			{#each post.categories as categorie}
				<div>
					#{categorie}
				</div>
			{/each}
		</div>
		<!-- card footer end -->
	</div>
</a>
