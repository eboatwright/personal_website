<script>
	import { fade, fly } from "svelte/transition";
	import { elasticOut, bounceOut } from "svelte/easing";

	import "../fonts.css";
	import "../app.css";

	import Navbar from "../lib/Navbar.svelte";
	import Footer from "../lib/Footer.svelte";

	export let data;
</script>

<div class="relative w-screen h-screen overflow-hidden">
	{#key data.url}
		<div class="absolute flex justify-center z-[-1] w-screen h-screen items-center" transition:fade={{ duration: 200 }}>
			<p class="font-bookman text-center text-gray-800 text-[20vw]">
				{#if data.url == "/"}
					LANDING
				{:else if data.url == "/about"}
					ABOUT
				{:else if data.url == "/projects"}
					PROJECTS
				{:else if data.url == "/contact"}
					CONTACT
				{/if}
			</p>
		</div>
	{/key}

	<div class="absolute flex flex-col justify-between w-screen h-screen">
		<Navbar />

		<div class="relative flex justify-center items-center">
			{#key data.url}
				<div class="absolute" in:fly={{ delay: 200, duration: 1300, y: 40, easing: elasticOut }} out:fade={{ duration: 200 }}>
					<slot />
				</div>
			{/key}
		</div>

		<Footer />
	</div>
</div>