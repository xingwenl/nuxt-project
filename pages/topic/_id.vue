<template>
	<div class="container home-page">
        <div class="topic-header">
            <div class="topic-full-title">
                {{topicData.title}}
            </div>
            <div class="topic-title-details">
                <span>发布于3年前</span>
                <span>作者{{topicData.author.loginname}}</span>
                <span>12018次浏览</span>
                <span>最后编辑是2年前</span>
                <span>来自 分享</span>
            </div>
        </div>
        <div class="inner"
            v-html="topicData.content">
        </div>
	</div>
</template>
<script>
    // import { mapGetters, mapActions, mapMutations, mapState} from 'vuex'
import api from "../../request/api";
export default {
    data () {
        return {
            topicData: {
                content: '',
                replies: {}
            }
        }
    },
    components: {
        
    },
    created () {
        console.log(this.$route)
    },
    async asyncData ({params}) {
        let res = await api.topicsId({
            id: params.id
        })
        return {
            topicData: res.data
        }
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
<style lang="less" scoped>
.home-page {
    .topic-header {
        background-color: #fff;
        .topic-full-title {
            font-size: 22px;
            font-weight: 700;
            margin: 8px 0;
            display: inline-block;
            vertical-align: bottom;
            width: 75%;
            line-height: 130%;
        }
        .topic-title-details {
            font-size: 12px;
            color: #838383;
        }
    }
}
</style>
