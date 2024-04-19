<script lang="ts">
	import { style, type Data } from 'vissi';
	import { getChartContext } from './Chart.svelte';
	const { x_scale, y_scale } = getChartContext();
	export let data: Data;
	export let color = 'red';
	export let size = 6;
</script>

{#each data as point}
	<path
		d={`M ${$x_scale(point.x)} ${$y_scale(point.y)} l 0 0`}
		vector-effect="non-scaling-stroke"
		stroke-width={size}
		stroke-linecap="round"
		stroke={color}
	/>
{/each}

<style>
	path {
		fill: black;
		vector-effect: non-scaling-stroke;
	}
</style>
