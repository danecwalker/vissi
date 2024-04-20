<script lang="ts">
	import { style, type Data } from 'vissi';
	import { getChartContext } from './Chart.svelte';
	const { x_scale, y_scale } = getChartContext();
	export let data: Data;
	export let color = 'red';
	export let size = 2;

	// draw a line from the previous point to the current point
	// this is a simple line chart
	$: d = `M ${$x_scale(data[0].x)} ${$y_scale(data[0].y)} ${data.slice(1).map((point) => `L ${$x_scale(point.x)} ${$y_scale(point.y)}`).join(' ')}`;
</script>

{#each data as point}
	<path
		{d}
		vector-effect="non-scaling-stroke"
		stroke-width={size}
		stroke-linecap="round"
		stroke={color}
	/>
{/each}

<style>
	path {
		fill: none;
		vector-effect: non-scaling-stroke;
	}
</style>
