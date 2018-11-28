<template>
    <div class="topic-cell">
        <div class="topic-cell-top">
            <nuxt-link class="topic-cell-title" to="/home">
                {{item.title}}
            </nuxt-link>
            <p class="topic-cell-time">{{item.create_time | formatDate}}</p>
        </div>
        <p class="topic-cell-intro ellipsis-2">
            {{item.content}}
        </p>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => {
                return {
                    title: '',
                    create_time: '',
                    content: ''
                }
            }
        }
    },
}
</script>
<style lang="less">
    .topic-cell {
        padding: 20px;
        background-color: #304156;
        text-shadow: 0 2px 2px #5e5f98;
        margin-top: 20px;
        cursor: pointer;
        &:first-child {
            margin-top: 0;
        }
        &:hover {
            box-shadow: 0px 3px 7px #1c2229;
        }
        .topic-cell-top {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        .topic-cell-title {
            color: #eee;
            font-size: 18px;
        }
        .topic-cell-time {
            color: #8395a9;
            font-size: 12px;
        }
        .topic-cell-intro {
            color: #aec5de;
            margin-top: 10px;
        }
    }
</style>

