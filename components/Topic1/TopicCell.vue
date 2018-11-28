<template>
    <div class="topic-cell">
        <div class="topic-left">
            <a class="avatar">
                <img src="@/assets/images/default.jpeg">
            </a>
            <span class="reply-count">
                <span class="replies" title="回复数">{{item.reply_count}}</span>
                <span>/</span>
                <span class="visits" title="访问数">{{item.visit_count}}</span>
            </span>
            <div class="topic-title-wrapper">
                <span 
                    class="topic-type"
                    :class="!item.good && !item.top && 'normal'">
                    {{item | topicType}}
                </span>
                <nuxt-link 
                    class="topic-title"
                    :title="item.title"
                    :to="`/topic/${item.id}`">
                    {{item.title}}
                </nuxt-link>
            </div>
        </div>
        <span class="topic-time">
            两天前
        </span>
    </div>
</template>
<script>
export default {
    name: 'TopicCell',
    props: {
        item: {
            type: Object,
            default: () => {
                return {
                    title: "",
                    last_reply_at: "",
                    good: false, 
                    top: false, 
                    reply_count: 0,
                    visit_count: 0,
                    create_at: "",
                    author: {
                        loginname: "",
                        avatar_url: ""
                    }
                }
            }
        }
    },
    methods: {
        initData () {

        }
    },
    filters: {
        topicType (item) {
            return '精华'
            if (item.top) {
                return '置顶'
            }
            if (item.good) {
                return '精华'
            }
            return [
                {
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
            ].find((obj) => {
                return obj.type === item.tab
            }).text
        }
    }
}
</script>

<style lang="less" scoped>
.topic-cell {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    border-bottom: 1px solid #f0f0f0;
    padding: 10px;
    &:last-child {
        border-bottom: none;
    }
    &:hover {
        background-color: #f6f6f6;
    }
    .avatar {
        img {
            width: 30px;
            height: 30px;
            border-radius: 3px;
        }
    }
}
.topic-left {
    display: flex;
    align-items: center;
    flex: 1;
    overflow: hidden;
    padding-right: 20px;
}
.topic-title-wrapper {
    display: flex;
    align-items: center;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    flex: 1;
    .topic-type {
        padding: 2px 4px;
        background: #80bd01;
        border-radius: 3px;
        color: #fff;
        font-size: 12px;
        &.normal {
            background-color: #e5e5e5;
            color: #999;
        }
    }
    .topic-title {
        margin-left: 5px;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #333;
        &:visited {
            color: #888;
        }
        &:hover {
            text-decoration: underline;
        }
    }
}
.reply-count {
    width: 70px;
    display: inline-block;
    text-align: center;
    .replies {
        color: #9e78c0;
    }
    .visits {
        font-size: 10px;
        color: #b4b4b4;
    }
}
</style>
