<script lang="ts">
	import BarChart from '$lib/components/prebuilt/BarChart.svelte';
	import ScatterChart from '$lib/components/prebuilt/ScatterChart.svelte';
	import { spring } from 'svelte/motion';
	import { range, type Data, domain } from 'vissi';

	let start = 0;
	const getPoints = (s: number, n: number) => range(s, n, 1).map((x) => ({ x: x, y: x * x }));
	let d = domain(getPoints(0, 10));
	const data = spring<Data>(range(0, 10, 1).map((x) => ({ x: x, y: 0 })));
	$: data.set(getPoints(start, start + 10));
	$: console.log($data);
</script>

<BarChart maxWidth={800} height={500} data={$data} gap={0.1} {...d} />
<ScatterChart maxWidth={800} height={500} data={$data} {...d} />

<button on:click={() => start--}>back</button>
<button on:click={() => start++}>forward</button>
