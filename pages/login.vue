<template>
    <div class="login-page">
        <el-form 
            :model="ruleForm" 
            status-icon 
            :rules="rule" 
            ref="ruleForm" 
            class="xw-form">
            <div class="title-container">
                <h3 class="title">Login Form</h3> 
            </div>
            <el-form-item
                prop="account">
                <el-input 
                    v-model="ruleForm.account"
                    prefix-icon="el-icon-service"
                    placeholder="用户名">
                </el-input>
            </el-form-item>
            <el-form-item  
                prop="password">
                <el-input 
                    type="password" 
                    prefix-icon="el-icon-edit"
                    placeholder="密码"
                    v-model="ruleForm.password">
                </el-input>
            </el-form-item>
            <div class="tips">
                <nuxt-link 
                    to="/register">
                    还没有账号？
                </nuxt-link>
            </div>
            <el-button 
                type="primary" 
                class="w-100"
                @click="submitForm('ruleForm')">
                登录
            </el-button>
        </el-form>
    </div>
</template>
<script>
import api from "../request/api";
export default {
    data () {
      return {
            ruleForm: {
                password: '',
                account: '',
            },
            rule: {
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                account: [
                    { required: true, message: '请输入账号', trigger: 'blur' }
                ],
            }
        };
    },      
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    let res = await api.login(this.ruleForm)
                    if (res.code === 200) {
                        this.$message({
                            message: '恭喜， 登录成功',
                            type: 'success'
                        })
                        return;
                    }
                    this.$message.error(res.msg)
                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
<style lang="less">
    .login-page {
        background-color: #2d3a4b;
        height: 100%;
        position: fixed;
        width: 100%;
        .el-form {
            left: 0;
            margin: 70px auto;
            max-width: 100%;
            padding: 35px 35px 15px;
            position: absolute;
            right: 0;
            width: 520px;
        }
    }
</style>

