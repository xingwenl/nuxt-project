<template>
  <section class="container">
    <topic-list
      :list="topicData"
      />
        <!-- {{userinfo}} -->
        <!-- <el-button
            @click.native="logoutClick">
            推出登录
        </el-button> -->
  </section>
</template>

<script>
import TopicList from '../components/Topic/TopicList.vue'
import api from "../request/api";
import { mapState, mapActions } from "vuex";
export default {
    components: {
        TopicList
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
        
    },
    async created () {
        // console.log(this.$store.state.account)
    },
    methods: {
        ...mapActions('account', [
            'logout'
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
