<script lang="ts">
	import { Box, Chart } from '$lib/index.js';
</script>

<div class="container">
	<Chart>
		<Box><div class="axes"></div></Box>
	</Chart>
</div>

<style>
	.container {
		width: 800px;
		height: 500px;
		border: 1px solid gray;
		padding: 3em 2em 2em 3em;
		box-sizing: border-box;
	}

	.axes {
		width: 100%;
		height: 100%;
		border-left: 1px solid black;
		border-bottom: 1px solid black;
	}
</style>
