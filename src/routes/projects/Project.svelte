<script>
	export let project;
</script>

<div class="space-y-2">
	<div>
		<a class="font-bookman text-blue-400 underline decoration-1 text-lg md:text-xl md:text-2xl lg:text-3xl" href={project.link} target="_blank">{project.name}</a>
		<p class="font-bookman text-gray-400 text-[0.6rem] md:text-xs lg:text-md">({project.timeframe})</p>
	</div>

	{#each project.description as paragraph}
		<p class="font-bookman text-gray-100 text-xs md:text-sm lg:text-base">{paragraph}</p>
	{/each}
</div>