<template>
	<div class="content edit-page">
        <div class="edit-title">
            <el-input v-model="title" placeholder="请输入标题"></el-input>
        </div>
        <mavon-editor
            ref="edit"
			@save="onSave"
			@imgAdd="imgAdd"/>
	</div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data () {
        return {
            value: "",
            title: ''
        }
    },
    components: {
    },
    asyncData (context) {
    },
    head () {
        return {
            title: 'edit',
            meta: [
                { hid: 'edit', name: 'home', content: 'markdown编辑器' }
            ]
        }
    },
    created() {
    },
    methods: {
        ...mapActions("topic", [
            "uploadTopic"
        ]),
        async onSave (value, render) {
            if (!this.title) {
                this.$message({
                    message: '请输入标题',
                    type: 'warning'
                })
                return
            }
            let res = await this.uploadTopic({
                content: value,
                rander_content: render,
                title: this.title,
                intro: this.title
            })
            if (res.code === 200) {
                this.$message({
                    message: 'Success',
                    type: 'success'
                })
            }else {
                this.$message({
                    message: res.msg,
                    type: 'error'
                })
            }
        },
        async imgAdd (filename, imgfile) {
            let res = await this.$api.upload_images(imgfile)
            if (res.code === 200) {
                this.$refs.edit.$img2Url(filename, res.data.path);
            }
        }
    }
}
</script>
<style lang="less">
    .edit-page {
        .edit-title {
            width: 320px;
            margin: 40px auto;
        }
        .el-input__inner {
            background: transparent;
            border: none;
            border-bottom: 1px solid #a6b4c5c4;
            color: #eee;
            font-size: 20px;
            text-align: center;
            &::placeholder {
                font-size: inherit;
                color: #a6b4c5c4;
            }
        }
        .v-note-wrapper {
            min-height: 70vh;
            width: 80vw;
            max-width: 1400px;
            margin: 0 auto;
        }
    }
</style>
