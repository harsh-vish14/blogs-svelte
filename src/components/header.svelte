<script>
	import me_photo from '../public/website/my_photo.png';
</script>

<div
	class="font-semibold md:text-6xl xl:text-7xl text-4xl relative flex gap-5 justify-evenly items-center min-h-[40vh] pt-10 font-league-spartan"
>
	<div class="sm:w-1/2 w-full px-5 sm:px-0">
		<h1 class="sm:text-left text-center">
			Hand Crafted Blogs Related to
			<div class="relative w-fit m-auto sm:m-0">
				<div>Technology</div>
				<svg
					style="width: -webkit-fill-available;"
					height="63"
					class="absolute top-[20px] z-[-2] left-[-10px]"
					viewBox="0 0 549 63"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16 47C16 47 176.09 15 268.263 15C360.436 15 533 47 533 47"
						stroke="#C941DF"
						stroke-opacity="0.92"
						stroke-width="30"
						stroke-linecap="round"
					/>
				</svg>
			</div>
		</h1>
	</div>
	<div class="sm:block hidden">
		<img src={me_photo} class="max-h-[200px] max-w-[200px]" alt="My emoticon" />
	</div>
</div>
