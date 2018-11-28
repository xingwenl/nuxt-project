<template>
  <section class="container flex-sb">
        <topic :list="topicData"/>
        <topic-article/>
        <!-- {{userinfo}} -->
        <!-- <el-button
            @click.native="logoutClick">
            推出登录
        </el-button> -->
  </section>
</template>

<script>
import Topic from '../components/topic'
import TopicArticle from '../components/topic-article'
import api from "../request/api";
import { mapState, mapActions } from "vuex";
export default {
    components: {
        Topic,
        TopicArticle
    },
    data () {
        return {
            topicData: [],
        }
    },
    computed: {
        ...mapState('account', [
            'userinfo'
        ])
    },
    async asyncData ({req}) {
        let res = await api.topic()
        if (res.code === 200) {
            return {
                topicData: res.data
            }
        }
    },
    async created () {
        console.log(this.topicData)
    },
    methods: {
        ...mapActions('account', [
            'logout'
        ]),
        ...mapActions('topic', [
            'topic'
        ]),
        async logoutClick() {
            let res = await this.logout()
            if (res.code === 200) {
                this.$router.replace('/login')
            }
        }
    }
}
</script>

<style lang="less">
  
</style>
