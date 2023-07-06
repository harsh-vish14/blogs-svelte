<script>
	import { formatDate } from '$lib/utils';
	export let post;
</script>

<a href={post.slug} class="w-fit">
	<div
		class="p-3 border border-[#2C303A] hover:bg-[#2C303A] transition-all max-w-sm min-w-[300px] rounded-md font-league-spartan h-[480px]"
	>
		<!-- card header start -->
		<div style="height: 221px; width: 359px;" class="relative">
			<img
				src={post.bannerImage}
				alt={post.title}
				loading="lazy"
				class="rounded-lg"
				style="height: 221px; width: 359px;"
			/>
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
		<!-- card header end -->
		<!-- card body start -->
		<div class="text-sm text-right m-2 opacity-70">{formatDate(post.date)}</div>
		<div class="text-3xl font-semibold flex">
			<div class="h-auto w-[5px] mr-1 mb-2 rounded-md bg-pink" />
			{post.title}
		</div>
		<div class="text-lg mb-3 font-normal custom-word-limit truncate pr-2" style="text-wrap:balance">
			{post.description}
		</div>
		<!-- card body end -->
		<!-- card footer start -->
		<div class="flex gap-5 opacity-80 mt-auto uppercase">
			{#each post.categories as categorie}
				<div>
					#{categorie}
				</div>
			{/each}
		</div>
		<!-- card footer end -->
	</div>
</a>
