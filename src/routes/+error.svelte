<script>
	import error_me from '../public/website/error_me.webp';
</script>

<section
	class="h-[80vh] flex justify-center items-center font-league-spartan relative overflow-hidden"
	style="text-wrap: balance"
>
	<div
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[500px] font-black -z-10 text-[#2C303A] break-keep"
	>
		404
	</div>
	<div>
		<div>
			<img src={error_me} alt="got something wrong?" class="h-80 m-auto mb-5" />
		</div>
		<div class="text-4xl font-semibold text-center">This page is removed or Does not exist</div>
		<div class="text-center mt-10">
			<a href="/" class="px-10 py-5 border rounded-lg border-[#2C303A] hover:bg-[#2C303A]">
				🏠 Home
			</a>
		</div>
	</div>
</section>
