<script context="module" lang="ts">
	import { getContext, setContext } from 'svelte';

	const key = {};
	export const getChartContext = (): {
		width: Writable<number>;
		height: Writable<number>;
		x1: Writable<number>;
		x2: Writable<number>;
		y1: Writable<number>;
		y2: Writable<number>;
		x_scale: Readable<(x: number) => number>;
		y_scale: Readable<(y: number) => number>;
	} => getContext(key);
</script>

<script lang="ts">
	import { derived, writable, type Readable, type Writable } from 'svelte/store';
	import { scale, style } from 'vissi';

	export let x1 = 0;
	export let x2 = 0;
	export let y1 = 1;
	export let y2 = 1;
	export let clip = false;

	const _x1: Writable<number> = writable();
	const _x2: Writable<number> = writable();
	const _y1: Writable<number> = writable();
	const _y2: Writable<number> = writable();

	const width: Writable<number> = writable();
	const height: Writable<number> = writable();

	$: _x1.set(x1);
	$: _x2.set(x2);
	$: _y1.set(y1);
	$: _y2.set(y2);

	const x_scale = derived([_x1, _x2], ([$x1, $x2]) => scale([$x1, $x2], [0, 100]));
	const y_scale = derived([_y1, _y2], ([$y1, $y2]) => scale([$y1, $y2], [100, 0]));

	setContext(key, { width, height, x1: _x1, x2: _x2, y1: _y1, y2: _y2, x_scale, y_scale });
</script>

<div
	class="v-chart"
	bind:clientWidth={$width}
	bind:clientHeight={$height}
	style={style({
		overflow: clip ? 'hidden' : 'visible'
	})}
>
	<slot />
</div>

<style>
	.v-chart {
		width: 100%;
		height: 100%;
		display: block;
		position: relative;
	}
</style>
