<template>
    <div class="topic-view">
        <topic-cell 
            v-for="item in list" 
            :item="item" 
            :key="item.id"
            @click.native="readingClick(item.rander_content)">
        </topic-cell>
    </div>
</template>
<script>
import TopicCell from './TopicCell.vue'
import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers('topic')
export default {
    components: {
        TopicCell
    },
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        ...mapMutations([
            "SET_ARTICLE"
        ]),
        readingClick (rander_content) {
            console.log(rander_content)
            this.SET_ARTICLE(rander_content)
        }
    }
}
</script>
<style lang="less">
    .topic-view {
        max-width: 768px;
        flex: 1;
        transition: all 0.3s;
    }
    @media (max-width: 768px) {
        .topic-view {
            width: auto;
        }
    }  
</style>

