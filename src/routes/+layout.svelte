<script>
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	import PageTransition from './transition.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	import '../blog.css';
	export async function load({ url }) {
		return {
			url: url.pathname
		};
	}
</script>

<div class="mx-auto md:px-8 px-0" style="width: 100%; max-width:83.5rem">
	<Navbar />
	<main>
		<PageTransition>
			<slot />
		</PageTransition>
	</main>
	<Footer />
</div>
