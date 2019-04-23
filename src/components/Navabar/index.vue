<template>
    <div class="navabar">

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name : 'home' ,
        data () {
            return {}
        } ,
        methods : {

        },
        computed : {
            ...mapState ( [ 'loginState' ] )
        } ,
        created(){
            if(!this.loginState){
                this.$router.replace('/login')
            }else{
                console.log(this.loginState)
            }
        }
    }
</script>

<style lang="scss">
    .navabar {
        width: 100%;
        .el-submenu__title{
            text-align: left;
            font-size: 20px;
        }
        li{
            font-size: 15px;
        }
    }
</style>
