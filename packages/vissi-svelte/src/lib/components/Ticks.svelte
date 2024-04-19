<script lang="ts">
	import { ticks as get_ticks, style } from 'vissi';
	import { getChartContext } from './Chart.svelte';

	const { x1, x2, y1, y2, x_scale, y_scale } = getChartContext();

	export let count: number | undefined = undefined;
	export let ticks: number[] | undefined = undefined;
	export let horizontal: boolean = false;

	$: _ticks =
		ticks || (horizontal ? get_ticks($y1, $y2, count || $y2) : get_ticks($x1, $x2, count || $x2));
	$: _style = (tick: number) =>
		horizontal
			? style({
					width: '100%',
					height: 0,
					top: $y_scale(tick) + '%'
				})
			: style({
					height: '100%',
					width: 0,
					left: $x_scale(tick) + '%'
				});
</script>

<div class="v-ticks">
	{#each _ticks as tick, i}
		<div class="v-tick" style={_style(tick)}>
			<slot value={tick} first={i === 0} last={i === _ticks.length - 1} />
		</div>
	{/each}
</div>

<style>
	.v-tick {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
</style>
