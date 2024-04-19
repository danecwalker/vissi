<script lang="ts">
	import { Box, Chart, Svg, Scatter, Bars } from '$lib/index.js';
	import { domain, type Data, style } from 'vissi';
	import Ticks from '$lib/components/Ticks.svelte';

	export let data: Data;
	export let gridColor = '#ccc';
	export let axisColor = 'black';
	export let tickColor = '#999';
	export let barColor = 'hsla(180, 100%, 50%, 0.8)';
	export let barSize = 1;
	export let gap = 0;
	export let width: number | string = '100%';
	export let height: number | string = '100%';
	export let maxWidth: number | string = '100%';
	export let maxHeight: number | string = '100%';
	export let x1 = 0;
	export let x2 = 1;
	export let y1 = 0;
	export let y2 = 1;
</script>

<div
	class="container"
	style={style({
		maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
		maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
		width: typeof width === 'number' ? `${width}px` : width,
		height: typeof height === 'number' ? `${height}px` : height
	})}
>
	<div>
		<Chart x1={x1 - barSize / 2} x2={x2 + barSize / 2} {y1} {y2}>
			<Ticks ticks={data.map((p) => p.x)} let:value>
				<span
					class="x label"
					style={style({
						color: tickColor
					})}>{value}</span
				>
			</Ticks>

			<Bars {data} color={barColor} width={barSize}>
				<div
					class="bar"
					style={style({
						backgroundColor: barColor,
						width: `${100 - (gap / barSize) * 100}%`
					})}
				></div>
			</Bars>
		</Chart>
	</div>

	<div>
		<Chart {x1} {x2} {y1} {y2}>
			<Box {x1} {x2} {y1} {y2}>
				<div
					class="axes"
					style={style({
						borderColor: axisColor
					})}
				></div>
			</Box>
			<Ticks horizontal count={9} let:value>
				<div
					class="grid-line horizontal"
					style={style({
						borderColor: gridColor
					})}
				>
					<span
						style={style({
							color: tickColor
						})}>{value}</span
					>
				</div>
			</Ticks>
		</Chart>
	</div>
</div>

<style>
	.container {
		position: relative;
	}

	.label {
		position: absolute;
		font-size: 14px;
		line-height: 1;
		white-space: nowrap;
		font-family: sans-serif;
	}

	.x.label {
		bottom: -1.2rem;
		text-align: center;
		transform: translateX(-50%);
	}

	.container > div {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 3em 2em 2em 3em;
		box-sizing: border-box;
	}

	.bar {
		position: absolute;
		height: 100%;
		left: 50%;
		transform: translateX(-50%);
	}

	.axes {
		width: 100%;
		height: 100%;
		border-bottom: 1px solid;
		border-left: 1px solid;
	}

	.grid-line {
		position: relative;
		display: block;
	}

	.grid-line.horizontal {
		width: 100%;
		left: 0;
		border-bottom: 1px solid;
	}
	.grid-line span {
		position: absolute;
		line-height: 1;
		font-family: sans-serif;
		font-size: 14px;
	}

	.grid-line.horizontal span {
		left: -0.6rem;
		bottom: 0;
		transform: translateX(-100%) translateY(50%);
	}
</style>
