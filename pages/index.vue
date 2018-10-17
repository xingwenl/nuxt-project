<template>
  <section class="container">
    <topic-list
      :list="topicData"
      />
  </section>
</template>

<script>
import TopicList from '../components/index/TopicList.vue'
import api from "../request/api";
export default {
  components: {
    TopicList
  },
  data () {
    return {
      topicData: [],
    }
  },
  created() {
    
  },
  async asyncData ({isDev, isServer}) {
    let res = await api.topics({
      page: 1,
    })
    return {
      topicData: res.data
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
  
</style>
