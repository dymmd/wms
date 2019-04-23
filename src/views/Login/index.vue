<template>
    <div class="login" v-loading="loading">
        <div style="height:300px;background: #545c64"></div>
        <span>武义县企业户籍式管理平台</span><br/><br/><br/>
        <div class="login-userInfo" id="loginUserInfo" :style="{height: height+'px'}">
            <el-form :label-position="labelPosition" label-width="80px">
                <el-form-item label="账户">
                    <el-input v-model="username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="password" auto-complete="off"></el-input>
                </el-form-item>
                <el-button type="primary" @click="loginByusername" style="font-size: 20px">登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                username : 'admin' ,
                labelPosition:'left',
                password:'admin',
                loading:false,
                height:0
            }
        },
        methods:{
            loginByusername(){
                let that=this
                this.loading=true
                setTimeout(function(){
                    that.$store.commit ( 'loginTrue' )
                    that.$router.replace('/')
                },"500")
            }
        },
        created(){
            document.body.style.height=window.screen.height+'px'
            document.body.style.background="#545c64"
            this.height=window.screen.height-300
        }
    }
</script>

<style lang="scss">
    .login {
        span{
            font-size: 40px;
            color: #ffffff;
        }
        width: 100%;
        &-userInfo{
            width: 20%;
            margin-left: 40%;
            .el-form-item__label{
                color: #ffffff;
                font-size: 20px;
            }
            button{
                width: 50%;
                span{
                    font-size:20px;
                }
            }
        }
    }
</style>
