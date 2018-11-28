<template>
    <div 
        class="article-view"
        :class="!render_content && 'not-article'">
        <i class="fa fa-times-circle close" @click="closeClick"></i>
        <div class="markdown-body" v-html="render_content">
        </div>
    </div>
</template>
<script>
import 'github-markdown-css/github-markdown.css'
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers('topic')
export default {
    name: 'Article',
    computed: {
        ...mapGetters([
            "render_content"
        ])
    },
    methods: {
        ...mapMutations([
            "SET_ARTICLE"
        ]),
        closeClick () {
            this.SET_ARTICLE('')
        }
    }
}
</script>
<style lang="less">
    .article-view {
        position: relative;
        flex: 1;
        margin-left: 34px;
        background: #304156;
        padding: 20px;
        height: 80vh;
        overflow: auto;
        transition: all 0.3s;
        .close {
            position: absolute;
            right: 0;
            padding: 10px;
            top: 0;
            cursor: pointer;
        }
        &.not-article {
            flex: 0;
            padding: 0;
        }
        .markdown-body {
            height: 100%;
            overflow: auto;
            color: #aec5de;
            pre {
                background-color: #a5bbd5;
                color: #7b1111;
            }
            h1,h2 {
                border-bottom: 1px solid #607389;
            }
        }
        code {
            background-color: rgba(253, 253, 253, 0.15);
        }
        .hljs {
            background-color: #a5bbd5;
        }
    }
</style>
