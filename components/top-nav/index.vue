<template>
    <el-menu
        :default-active="activeIndex"
        class="top-nav"
        mode="horizontal"
        @select="handleSelect"
        background-color="#304156"
        text-color="#bfcbd8"
        active-text-color="#ffd04b"
        style="border-bottom: none;"
        router>
        <el-menu-item index="/">笔记</el-menu-item>
        <el-menu-item index="/edit">记录</el-menu-item>
        <!-- <el-menu-item index="3" disabled></el-menu-item> -->
    </el-menu>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    computed: {
        activeIndex () {
            return this.$route.path
        }
    },
    methods: {
        handleSelect(params) {
            console.log(params)
        }
    }
}
</script>
<style lang="less">
    .el-menu.top-nav {
        box-shadow: 0 0 3px 2px #2c3a4b;
    }
</style>

