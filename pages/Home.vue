<template>
	<div class="content home-page">
		这是home界面
	</div>
</template>
<script>
	export default {
		data () {
			return {
				
			}
		},
		components: {
		},
		asyncData (context) {
		},
		head () {
			return {
				title: 'nihao',
				meta: [
					{ hid: 'test', name: 'home', content: 'My custom home' }
				]
			}
		},
		created() {
			
		},
		
	}
</script>