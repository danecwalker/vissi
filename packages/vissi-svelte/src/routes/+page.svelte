<script lang="ts">
	import { BarChart,ScatterChart,LineChart } from '$lib/index.js';
	import { spring } from 'svelte/motion';
	import { range, type Data, domain, fn } from 'vissi';

	let start = 0;
	const getPoints = (s: number, n: number) => fn((x: number) => x*Math.random(), range(s, n, 1));
	const data = spring<Data>(range(0, 10, 1).map((x) => ({ x: x, y: 0 })));
	const points = getPoints(start, start + 10);
	$: data.set(points);
	$: d = domain(points);
	$: console.log($data);
</script>

<h1>Vissi</h1>
<div class="graphs">
	<BarChart maxWidth={800} height={400} data={$data} gap={0.1} {...d} />
	<ScatterChart maxWidth={800} height={400} data={$data} {...d} />
	<LineChart maxWidth={800} height={400} data={$data} {...d} />
</div>

<style>
	h1 {
		text-align: center;
		margin: 2rem 0;
		font-family: sans-serif;
		font-size: 2rem;
		color: #333;
		text-transform: uppercase
	}
	.graphs {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		max-width: 1000px;
		margin: 0 auto;
	}
</style>