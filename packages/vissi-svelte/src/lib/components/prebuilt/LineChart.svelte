<script lang="ts">
	import { Box, Chart, Svg, Line } from '$lib/index.js';
	import { domain, type Data, style } from 'vissi';
	import Ticks from '$lib/components/Ticks.svelte';

	export let data: Data;
	export let gridColor = '#ccc';
	export let axisColor = 'black';
	export let tickColor = '#999';
	export let lineColor = 'red';
	export let lineSize = 2;
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
	<Chart {x1} {x2} {y1} {y2}>
		<Box {x1} {x2} {y1} {y2}
			><div
				class="axes"
				style={style({
					borderColor: axisColor
				})}
			></div></Box
		>

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
					})}>{Math.round(value*10)/10}</span
				>
			</div>
		</Ticks>

		<Ticks count={9} let:value>
			<div
				class="grid-line vertical"
				style={style({
					borderColor: gridColor
				})}
			>
				<span
					style={style({
						color: tickColor
					})}>{Math.round(value)}</span
				>
			</div>
		</Ticks>

		<Svg>
			<Line {data} color={lineColor} size={lineSize} />
		</Svg>
	</Chart>
</div>

<style>
	.container {
		padding: 3em 2em 2em 3em;
		box-sizing: border-box;
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

	.grid-line.vertical {
		height: 100%;
		border-left: 1px solid;
	}

	.grid-line span {
		position: absolute;
		line-height: 1;
		font-family: sans-serif;
		font-size: 14px;
	}

	.grid-line.vertical span {
		left: 0;
		bottom: -1.2rem;
		transform: translateX(-50%);
	}

	.grid-line.horizontal span {
		left: -0.6rem;
		bottom: 0;
		transform: translateX(-100%) translateY(50%);
	}
</style>
