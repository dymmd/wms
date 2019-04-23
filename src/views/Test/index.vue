<template>
    <div class="test1">
        <!--<el-table
                ref="moviesTable"
                :data="tableData3"
                tooltip-effect="dark"
                style="width: 100%"
                :row-class-name="tableRowClassName"
                :row-style="selectedHighlight"
                @row-click="toggleSelection">
            <el-table-column
                    label="日期"
                    width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    show-overflow-tooltip>
            </el-table-column>
        </el-table>-->
        <el-dropdown split-button type="primary">
            {{ showSpan }}
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(it,i) of dropData" :key="i"><a @click="selectDrop(it)">{{ it }}</a></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-table
                :data="tableData"
                style="width: 100%"
                :row-class-name="tableRowClassName"
                :row-style="selectedHighlight"
                :highlight-current-row="false"
                setCurrentRow="3"
                @row-click="toggleSelection">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="100"
                    style="background: none">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="100"
                    style="background: none">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    style="background: none">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                dropData:['丽丽','小丽','勇勇','小勇',],
                showSpan:'嘻嘻',
                tableData3 : [ {
                    date : '2016-05-03' ,
                    name : '王小虎' ,
                    address : '上海市普陀区金沙江路 1518 弄'
                } , {
                    date : '2016-05-02' ,
                    name : '王小虎' ,
                    address : '上海市普陀区金沙江路 1518 弄'
                } , {
                    date : '2016-05-04' ,
                    name : '王小虎' ,
                    address : '上海市普陀区金沙江路 1518 弄'
                } , {
                    date : '2016-05-01' ,
                    name : '王小虎' ,
                    address : '上海市普陀区金沙江路 1518 弄'
                } , {
                    date : '2016-05-08' ,
                    name : '王小虎' ,
                    address : '上海市普陀区金沙江路 1518 弄'
                } , {
                    date : '2016-05-06' ,
                    name : '王小虎' ,
                    address : '上海市普陀区金沙江路 1518 弄'
                } , {
                    date : '2016-05-07' ,
                    name : '王小虎' ,
                    address : '上海市普陀区金沙江路 1518 弄'
                } ] ,
                tableData : [ {
                    date : '2016-05-02' ,
                    name : '王小虎' ,
                    address : '上海市普陀区金沙江路 1518 弄'
                } , {
                    date : '2016-05-04' ,
                    name : '王小虎' ,
                    address : '上海市普陀区金沙江路 1517 弄'
                } , {
                    date : '2016-05-01' ,
                    name : '王小虎' ,
                    address : '上海市普陀区金沙江路 1519 弄'
                } , {
                    date : '2016-05-03' ,
                    name : '王小虎' ,
                    address : '上海市普陀区金沙江路 1516 弄'
                } ] ,
                multipleSelection : [] ,
                getIndex : []

            }
        } ,

        methods : {
            toggleSelection ( row ) {
                if ( this.getIndex.indexOf ( row.index ) > -1 ) {
                    delete this.getIndex[ this.getIndex.indexOf ( row.index ) ]
                } else {
                    this.getIndex.push ( row.index )
                }
                setTimeout(function(){
                    var ele = document. getElementsByTagName('tr')[0];
                    var reg = new RegExp("(\\s|^)" + "current-row" + "(\\s|$)");
                    ele.className = ele.className.replace(reg, "");
                },500)
            } ,
            selectedHighlight ( { row , rowIndex } ) {
                if ( this.getIndex.indexOf ( rowIndex ) > -1 ) {
                    console.log ( this.getIndex )
                    return {
                        background : '#000000'
                    };
                }
            } ,
            tableRowClassName ( { row , rowIndex } ) {
                row.index = rowIndex;
            } ,
            setCurrent ( row ) {
                this.$refs.singleTable.setCurrentRow ( row );
            } ,
            selectDrop(it){
               this.showSpan=it
            }
        }
    }
</script>

<style lang="scss">
    .test1 {
        width: 100%;
        .current-row {
            td {
                background: none;
                background-color: #ffffff;
            }
        }
        td {
            background: none;
        }
    }
</style>
