/*
 * @Author: xingwen 
 * @Date: 2018-03-27 12:43:52 
 * @Last Modified by: xingwen
 * @Last Modified time: 2018-05-24 02:28:43
 */
<template>
	<div class="content home-page">
		我是home页面
	</div>
</template>
<script>
	// import { mapGetters, mapActions, mapMutations, mapState} from 'vuex'
	export default {
		data () {
			return {
				swiper2: {
					interval: 2000,
					dots: false
				},
				noticeList: [],
				toppairsTmp: [],
				swiperHeight: 0,
				swiperShow: true,
				list: ''
			}
		},
		components: {
			
		},
		asyncData (context) {
			console.log(context)
		},
		head () {
			return {
				title: 'nihao',
				meta: [
					{ hid: 'test', name: 'home', content: 'My custom home' }
				]
			}
		}
		
	}
</script>