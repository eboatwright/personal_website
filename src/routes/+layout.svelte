<script>
	import { afterNavigate } from "$app/navigation";
	import { fade, fly, blur } from "svelte/transition";
	import { elasticOut, bounceOut } from "svelte/easing";

	import "../fonts.css";
	import "../app.css";

	import Navbar from "../lib/Navbar.svelte";
	import Footer from "../lib/Footer.svelte";

	export let data;

	let visible = false;
	let inDuration = 0;

	afterNavigate(({ from }) => {
		inDuration = (from === null ? 1100 : 0);
		visible = true;
	});
</script>

{#if visible}
	<div class="relative w-screen h-screen overflow-x-hidden" in:blur={{ duration: inDuration, amount: 15 }}>
		{#key data.url}
			<div class="fixed flex justify-center z-[-1] w-screen h-screen items-center" transition:fade={{ duration: 200 }}>
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

		<div class="flex flex-col justify-between items-center h-full space-y-6">
			<Navbar />

			{#key data.url}
				<div class="" in:fly={{ delay: 50, duration: 1300, y: 40, easing: elasticOut }}> <!--out:fade={{ duration: 200 }}-->
					<slot />
				</div>
			{/key}

			<Footer />
		</div>
	</div>
{/if}