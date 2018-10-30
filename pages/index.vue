<template>
  <section class="container">
    <!-- <topic-list
      :list="topicData"
      /> -->
      {{topicData}}
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
  async asyncData () {
    let res = await api.topics({
      page: 1,
    })
    return {
      topicData: res
    }
  },
  async created () {
    
  },
  methods: {
  }
}
</script>

<style lang="less">
  
</style>
