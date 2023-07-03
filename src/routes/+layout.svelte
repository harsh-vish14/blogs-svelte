<script>
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	import PageTransition from './transition.svelte';
	// import 'open-props/style';
	// import 'open-props/normalize';
	// import 'open-props/buttons';
	import '../blog.css';
	export async function load({ url }) {
		return {
			url: url.pathname
		};
	}
</script>

<head>
	<title>Harsh ✌🏽 / Blogs</title>
</head>

<div class="mx-auto md:px-8 px-0" style="width: 100%; max-width:83.5rem">
	<Navbar />
	<main>
		<PageTransition>
			<slot />
		</PageTransition>
	</main>
	<Footer />
</div>
