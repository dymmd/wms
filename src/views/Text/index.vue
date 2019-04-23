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
        <!--    <el-table
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
            </el-table>-->
        <el-dropdown split-button type="primary">
            默认尺寸
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(it,i) of dropData" :key="i" @click="selectDrop(it)">{{ it }}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-table
                :data="tableData2"
                style="width: 100%"
                :row-class-name="tableRowClassName">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        data () {
            return {
                dropData:['丽丽','小丽','勇勇','小勇',],
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
                tableData2: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection : [] ,
                getIndex : [1,2,3]

            }
        } ,

        methods : {
            toggleSelection ( row ) {
                if ( this.getIndex.indexOf ( row.index ) > -1 ) {
                    delete this.getIndex[ this.getIndex.indexOf ( row.index ) ]
                } else {
                    this.getIndex.push ( row.index )
                }
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
                /*row.index = rowIndex;*/
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            } ,
            setCurrent ( row ) {
                this.$refs.singleTable.setCurrentRow ( row );
            } ,
            selectDropselectDrop(it){
                console.log(it)
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
        .el-table .warning-row {
            background: oldlace;
        }

        .el-table .success-row {
            background: #f0f9eb;
        }
    }
</style>
