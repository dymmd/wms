<template>
    <div class="home">
        <div class="home-head">
            <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 80%;margin-left: 10px">
                <el-tab-pane label="用户管理" name="first"></el-tab-pane>
                <el-tab-pane label="配置管理" name="second"></el-tab-pane>
                <el-tab-pane label="角色管理" name="third"></el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
            </el-tabs>
            <el-button slot="label" style="height: 30px;position: absolute;top: 5px;right: 20px;line-height: 0">122</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeName: 'second'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>
<style lang="scss" scoped>
.home{
    width: 100%;
    &-head{
        width: 100%;
        height: 40px;
        border-bottom: #333333 solid 1px;
        position: relative;
    }
}
</style>