<script lang="ts">
	import type { Data } from 'vissi';
	import Box from './Box.svelte';
	export let width = 1;
	export let color = 'red';

	export let data: Data = [];
</script>

{#each data as point, i}
	<Box x1={point.x - width / 2} x2={point.x + width / 2} y1={0} y2={point.y}>
		<slot value={point.x} first={i === 0} last={i === data.length - 1} />
	</Box>
{/each}
