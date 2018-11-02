<template>
    <div class="account-page register-page">
        <el-form 
            :model="ruleForm2" 
            status-icon 
            :rules="rules2" 
            ref="ruleForm2" 
            label-width="80px" 
            label-position="left"
            class="xw-form">
            <div class="title-container">
                <h3 class="title">Register Form</h3> 
            </div>
            <el-form-item 
                label="用户名">
                <el-input 
                    v-model="ruleForm2.account">
                </el-input>
            </el-form-item>
            <el-form-item 
                label="年龄" 
                prop="age">
                <el-input 
                    v-model.number="ruleForm2.age">
                </el-input>
            </el-form-item>
            <el-form-item 
                label="性别" 
                prop="age">
                <el-radio-group v-model="ruleForm2.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item 
                label="邮箱">
                <el-input 
                    v-model.number="ruleForm2.email">
                </el-input>
            </el-form-item>
            <el-form-item 
                label="密码" 
                prop="password">
                <el-input 
                    type="password" 
                    v-model="ruleForm2.password" 
                    autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item 
                label="确认密码" 
                prop="checkPass">
                <el-input 
                    type="password" 
                    v-model="ruleForm2.checkPass" 
                    autocomplete="off">
                </el-input>
            </el-form-item>
            <div class="tips">
                <nuxt-link 
                    to="/login">
                    已有账号？
                </nuxt-link>
            </div>
            <el-button 
                type="primary" 
                class="w-100"
                @click="submitForm('ruleForm2')">
                提交
            </el-button>
        </el-form>
    </div>
</template>
<script>
import api from "../request/api";
export default {
    data () {
        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    if (value < 18) {
                        callback(new Error('必须年满18岁'));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm2.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm2.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
      return {
            ruleForm2: {
                password: '',
                checkPass: '',
                age: '',
                account: '',
                sex: '',
                email: ''
            },
            rules2: {
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                age: [
                    { validator: checkAge, trigger: 'blur' }
                ]
            }
        };
    },      
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    let res = api.register(this.ruleForm2)
                    if (res.code === 200) {
                        this.$message({
                            message: '恭喜， 注册成功',
                            type: 'success'
                        })
                        setTimeout(() => {
                            this.$router.push('/login')
                        }, 300)
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
    .register-page {
        .el-form {
            width: 520px;
        }
    }
</style>

