<script>
	import { fade, fly } from "svelte/transition";
	import { elasticOut, bounceOut } from "svelte/easing";
	import { page } from "$app/stores";

	import "../fonts.css";
	import "../app.css";

	import Navbar from "../lib/Navbar.svelte";
	import Footer from "../lib/Footer.svelte";
</script>

<div class="relative">
	<div class="absolute flex justify-center z-[-1] w-screen h-screen items-center overflow-clip">
		<p class="font-bookman text-center text-gray-800 text-[20vw]">
			{#if $page.url.pathname == "/"}
				LANDING
			{:else if $page.url.pathname == "/about/"}
				ABOUT
			{:else if $page.url.pathname == "/projects/"}
				PROJECTS
			{:else if $page.url.pathname == "/contact/"}
				CONTACT
			{/if}
		</p>
	</div>
	<div class="flex flex-col justify-between w-screen h-screen">
		<Navbar />

		{#key $page.url.pathname}
			<div in:fly={{ delay: 150, duration: 800, y: 40, easing: bounceOut }}>
				<slot />
			</div>
		{/key}

		<Footer />
	</div>
</div>