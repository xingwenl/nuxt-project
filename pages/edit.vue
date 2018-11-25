<template>
	<div class="content edit-page">
		<mavon-editor
			@save="onSave"
			@imgAdd="imgAdd"/>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				value: "",
			}
		},
		components: {
		},
		asyncData (context) {
		},
		head () {
			return {
				title: 'edit',
				meta: [
					{ hid: 'edit', name: 'home', content: 'markdown编辑器' }
				]
			}
		},
		created() {
		},
		methods: {
			onSave (value, render) {
				console.log(value, render)
			},
			imgAdd (filename, imgfile) {
				console.log(filename, imgfile)
			}
		}
	}
</script>