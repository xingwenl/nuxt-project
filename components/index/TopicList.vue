<template>
    <div class="topic-view">
        <div class="topic-header">
            <a  
                v-for="t in tab"
                :class="currentTab === t.type && 'current'"
                :key="t.type"
                @click="typeClick(t.type)">
                {{t.text}}
            </a>
        </div>
        <div 
            class="topic-container"
            v-loading="loading">
            <topic-cell 
                v-for="item in currentData"
                :key="item.id"
                :item="item"/>
        </div>
        <el-pagination
            layout="prev, pager, next"
            background
            :total="40"
            :page-size="10"
            :current-page="page + 1"
            @current-change="change">
        </el-pagination>
    </div>
</template>
<script>
import TopicCell from './TopicCell.vue'
import api from "../../request/api";

export default {
    components: {
        TopicCell
    },
    data () {
        return {
            tab: [
                {
                    type: 'all',
                    text: '全部'
                },{
                    type: 'good',
                    text: '精华'
                },{
                    type: 'share',
                    text: '分享'
                },{
                    type: 'ask',
                    text: '问答'
                },{
                    type: 'job',
                    text: '招聘'
                },
            ],
            currentTab: 'all',
            topicData: {
                all: [[]],
                ask: [[]],
                share: [[]],
                job: [[]],
                good: [[]],
            },
            page: 0,
            // tab: 'all',//all ask share job good 
            loading: false
        }
    },
    props: {
        list: {
            type: [Object, Array],
            default: () => []
        },
    },
    created() {
    },
    computed: {
        currentData () {
            let tmp = this.topicData[this.currentTab][this.page]
            return tmp.length ? tmp : this.list
        }
    },
    methods: {
        change (page) {
            this.fetchData({
                page,
                tab: this.currentTab
            })
        },
        typeClick (type) {
            if (this.currentTab === type) {
                return;
            }
            this.fetchData({
                page: 1,
                tab: type
            })
        },
        async fetchData (obj) {
            let page = obj.page || 1
            let tab = obj.tab || this.currentTab
            if (this.topicData[tab] && this.topicData[tab][page - 1] && this.topicData[tab][page - 1].length) {
                this.page = page - 1
                this.currentTab = tab
                return;
            }
            this.loading = true
            let res = await api.topics({
                page: page,
                ...obj
            })
            this.loading = false
            this.page = page - 1
            this.currentTab = tab
            this.topicData[this.currentTab] = this.topicData[this.currentTab] || []
            this.$set(this.topicData[this.currentTab], this.page, res.data)
        }
    }
}
</script>
<style lang="less" scoped>
.topic-view {
    background: #fff;
    box-shadow: 0 0 10px 0px #ccc;
    border-radius: 3px;
}
.topic-header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    a {
        margin: 0 10px;
        color: #80bd01;
        display: inline-block;
        &.current {
            background-color: #80bd01;
            color: #fff;
            padding: 3px 4px;
            border-radius: 3px;
        }
    }
}
.el-pagination {
    padding: 10px;
}
</style>
