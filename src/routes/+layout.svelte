<script>
	import "../fonts.css";
	import "../app.css";

	import Navbar from "../lib/Navbar.svelte";
	import Footer from "../lib/Footer.svelte";
</script>

<div class="flex flex-col justify-between w-screen h-screen">
	<Navbar />
	<slot />
	<Footer />
</div>