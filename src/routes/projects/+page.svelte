<svelte:head>
	<title>Evan Boatwright / Projects</title>
</svelte:head>

<script>
	import HorizontalDivider from "../../lib/HorizontalDivider.svelte";
	import Project from "./Project.svelte";

	const projects = [
			{
				name: "This Website!",
				link: "https://github.com/eboatwright/personal_website",
				timeframe: "March 28th, 2024 - April 5th, 2024",
				description: [
					"My first project in SvelteKit and TailwindCSS, and I really enjoyed creating it! SvelteKit is also the first JavaScript framework I've ever used, and it was so quick and easy to learn; I'll definitely be using it in the future.",
					"TailwindCSS was also a joy to learn; it takes regular CSS and just makes it so fast and intuitive to work with.",
				],
			},
			{
				name: "Maxwell",
				link: "https://github.com/eboatwright/maxwell",
				timeframe: "November 12th, 2023 - Present",
				description: [
					"My Alpha-Beta Chess engine written from scratch in Rust. It's currently rated about 2000-2200, depending on the rating list, and is one of my biggest projects!",
					"Version 3.2 is still in active development.",
				],
			},
		];
</script>

<div class="space-y-8">
	{#each projects as project}
		<Project {project} />
		<HorizontalDivider />
	{/each}
</div>