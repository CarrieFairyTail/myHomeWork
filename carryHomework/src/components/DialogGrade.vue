<template>
    <div class="dialog">
        <el-dialog 
        title="等级评估"
        :visible.sync="show"
        @close="close"
        width="50%">
        <div>
            <!-- 右边评估规则弹出框 -->
            <div class="fr">
                <el-popover
                    placement="left-start"
                    width="200"
                    trigger="hover">
                    <table class="dialogHover">
                        <tr>
                            <th>
                                <div class="out">
                                    <b>影响度</b>
                                    <em>可能性</em>
                                </div>
                            </th>
                            <th>高</th>
                            <th>中</th>
                            <th>低</th>
                        </tr>
                        <tr>
                            <td style="width:100px">高</td>
                            <td>重大</td>
                            <td>较大</td>
                            <td>一般</td>
                        </tr>
                        <tr>
                            <td>中</td>
                            <td>较大</td>
                            <td>较大</td>
                            <td>一般</td>
                        </tr>
                        <tr>
                            <td>低</td>
                            <td>一般</td>
                            <td>一般</td>
                            <td>一般</td>
                        </tr>
                    </table>
                    <el-button type="text" slot="reference" class="fr">评估规则</el-button>
                </el-popover>
            </div>
            <div class="fl" style="display:block">请按照实际情况，依次完成各个维度的选择，最终的风险等级将自动生成</div><br>
        </div>    
        <div class="beijin">
            <div class="fl">
                <div>可能性：</div>
                <el-select v-model="value1" placeholder="请选择可能性" @change="huoqu1">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="fl" style="margin-left:10px;">
                <div>影响度：</div>
                <el-select v-model="value2" placeholder="请选择影响度" @change="huoqu2">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <hr>
        <div>
            <span>风险等级：{{this.gradeList.label}}</span>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button type="text" @click="changeActive" class="quxiao">取 消</el-button>
            <el-button type="primary" @click="modify" round class="queren">确 定</el-button>
        </div>
        </el-dialog>
    </div>
</template>
<script>
import bus from '../assets/eventBus'
export default {
    name: 'DialogGrade',
    props: {
        gradeVisible:'',
    },
    data() {
        return {
            show:false,
            jieguo:'',
            zhouqi:[],
            risk1:'',
            risk2:'',
            gradeList:'',
            // 风险等级
           options: [{
                value: '1',
                label: '高'
                }, {
                value: '2',
                label: '中'
                }, {
                value: '3',
                label: '低'
            }],
            value1: [],
            value2: [],
            option2:[{
                value: '1',
                label: '一般'
            },{
                value: '2',
                label: '较大'
            },{
                value: '3',
                label: '重大'
            }],
            option3:[{
                value:'1',
                label:'周',
            },{
                value:'2',
                label:'季',
            },{
                value:'3',
                label:'月'
            }]
        };
    },
    watch:{
        'value1':function(newValue,oldValue){
            this.value2='';
        },
        gradeVisible(val){
            this.show = val
        }
    },
    computed:{
        modifylist() {
            return this.list;
        }
    },
    methods:{
        changeActive(){
            this.$emit('changeGrade')
        },
        modify(){
            this.$emit('modifyGrade',this.modifyGrade);
            if(this.value1===''||this.value2===''){
                this.$message({
                    type: 'info',
                    message: '请填写必填选项！'
                });    
            }
        },
        // 更新传给父组件的可见值
        close(){
        this.$emit('update:gradeVisible',false)
        },
        huoqu1(log){
            // console.log(log);
            this.risk1 = log;
        },
        huoqu2(log){
            this.risk2 = log;
            if(this.risk1 == 1&&this.risk2 == 1){
                this.gradeList = this.option2[2];
                // console.log(this.option2[2]);
                // this.jieguo = "重大";
            }else if(
                this.risk1 == 1&&this.risk2 == 2||
                this.risk1 == 2&&this.risk2 == 1||
                this.risk1 == 2&&this.risk2 == 2){
                    this.gradeList = this.option2[0];
            }else if(
                this.risk1 == 1&&this.risk2 == 3||
                this.risk1 == 2&&this.risk2 == 3||
                this.risk1 == 3&&this.risk2 == 1||
                this.risk1 == 3&&this.risk2 == 2||
                this.risk1 == 3&&this.risk2 == 3){
                    this.gradeList = this.option2[1];
            };

            // bus.$emit("dengji",this.gradeList);
            this.$emit("dengji",this.gradeList);

            if(this.gradeList.label=="一般"){
                this.zhouqi = this.option3[1];
            }else if(this.gradeList.label=="较大"){
                this.zhouqi = this.option3[2]
            }else if(this.gradeList.label=="重大"){
                this.zhouqi = this.option3[0]
            };
            this.$emit("zhouqi",this.zhouqi);
        }
    }
}
</script>
<style>
@import "../components/dialog.css";
.fl{float: left;}
.fr{float: right;}
.beijin{
    height: 92px;
    background-color: rgb(242, 242, 242);
    margin-top: 5px;
    padding: 10px 20px;
}
.dialogHover  th{
    background-color: #ccc
}
.dialogHover{
    border: 1px solid #ddd;
    border-collapse:collapse;
    border-spacing:0;
    text-align:center;
}
.dialogHover td{
    width: 100px;
    height: 40px;
    border: 1px solid #ddd;
    padding: 10px;
}
/* table th{
    
}
table{
    
}
table td{
    
} */

</style>
