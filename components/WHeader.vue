<template>
    <header class="header">
        <a class="header-logo">
            <img src="~/assets/images/logo.png">
            <span class="header-title">HOMINE</span>
        </a>
        <ul class="header-menu">
            <li>主页</li>
            <li>活动中心</li>
            <li>交易中心</li>
            <li>自助挖矿</li>
            <li>公告中心</li>
            <li>帮助支持</li>
            <li>登录</li>
            <li>注册</li>
        </ul>
    </header>
</template>


<script>

export default {
    name: 'Header',
    data () {
        return {
        }
    },
    computed: {

    },
    methods: {
        
    },
    mounted () {
    },
    watch: {
        
    }

}
</script>


<style lang="less">
    .header {
        display: flex;
        justify-content: space-between;
        color: #333;
        font-size: 14px;
        background: #fff;
        box-shadow: 0 0 5px 0px #666;
        .header-logo {
            display: inline-block;
            padding: 14px 20px;
            color: #fff;
            background: #f4931d;
            img {
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
        }
        .header-title {
            top: 2px;
            margin-left: 5px;
            font-weight: 700;
            font-size: 14px;
        }
        .header-menu {
            display: flex;
            li {
                padding: 18px 10px 15px;
                font-weight: 700;
            }
        }
    }
</style>

