<script>
	import naruto from '../public/website/naruto.png';
	import quotation_bottom from '../public/website/quotation_bottom.png';
	import quotation_top from '../public/website/quotation_top.png';
</script>

<div
	class="p-10 relative -z-50 h-96 mt-36 flex justify-center items-center"
	style="text-wrap: balance"
>
	<div class="font-blod text-4xl w-[600px] text-center quote leading-snug my-10">
		If you don't like your destiny, don't accept it. Instead have the courage to change it the way
		you want it to be.
	</div>
	<img src={naruto} class="absolute -bottom-10 -left-10 h-60" alt="naruto anime" />
	<img
		src={quotation_bottom}
		class="absolute md:-bottom-10 -bottom-12 right-0 h-20"
		alt="quotation"
	/>
	<img src={quotation_top} class="absolute md:-top-10 -top-12 left-0 h-20" alt="quotation" />
</div>
