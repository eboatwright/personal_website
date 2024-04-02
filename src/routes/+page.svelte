<svelte:head>
	<title>Evan Boatwright</title>
</svelte:head>

<script>
	import { fade, blur } from "svelte/transition";

	let imageIndex = 1;

	setInterval(() => {
		imageIndex += 1;
		if (imageIndex > 10) {
			imageIndex = 1;
		}
	}, 5000);
</script>

<div class="flex flex-row items-center justify-center space-x-8 px-12">
	<p class="font-bookman text-gray-100 text-center max-w-[400px] text-right text-xs md:text-sm lg:text-base">Born in 2007, programming since 2016, most experienced with Game-dev, Web-dev, and CLIs.</p>
	<div class="bg-gradient-to-br from-[#9ec1a3] to-[#1f363d] rounded-full aspect-square flex relative w-[275px]">
		{#key imageIndex}
			<img src="/images/me/{imageIndex}.png" width="275px" class="rounded-full p-1 absolute" alt="Me" in:blur={{ duration: 500, amount: 5 }} out:fade={{ delay: 500, duration: 500 }} />
		{/key}
	</div>
</div>