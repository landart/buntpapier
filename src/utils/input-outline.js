import { h as createElement, withDirectives, resolveDirective, onMounted, nextTick } from 'vue'
import { getTextMetrics } from './text-metrics'

export function useInputOutline (label) {
	let outlineStroke = $ref(null)
	let outline = $ref(null)

	const floatingLabelWidth = $computed(() => {
		return label.value ? getTextMetrics(label.value, '12px \'Roboto\', "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif').width + 8 : 0
	})

	function updateOutline () {
		const { width, height } = outline.getBoundingClientRect()
		const radius = 4
		const cornerWidth = radius + 1
		outlineStroke = `M ${cornerWidth} 1
		h ${width - 2 * cornerWidth}
		a ${radius} ${radius} 0 0 1 ${radius} ${radius}
		v ${height - 2 * cornerWidth}
		a ${radius} ${radius} 0 0 1 ${-radius} ${radius}
		h ${-width + 2 * cornerWidth}
		a ${radius} ${radius} 0 0 1 ${-radius} ${-radius}
		v ${-height + 2 * cornerWidth}
		a ${radius} ${radius} 0 0 1 ${radius} ${-radius}`
	}

	onMounted(async () => {
		await nextTick()
		updateOutline()
	})

	return {
		Outline () {
			return createElement('svg', {
				class: 'outline',
				ref: (el) => outline = el,
				style: {
					'--label-gap': floatingLabelWidth
				}
			}, [
				createElement('path', {
					d: outlineStroke
				})
			])
		},
		updateOutline
	}
}
