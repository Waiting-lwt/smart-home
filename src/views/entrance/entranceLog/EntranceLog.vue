<template>
  <div>
    <el-table
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      class="table-style">
      <el-table-column prop="id" label="id" width="50" align="center"></el-table-column>
      <el-table-column prop="device_id" label="设备ID" align="center"></el-table-column>
      <el-table-column prop="device_mac" label="设备MAC地址" align="center"></el-table-column>
      <el-table-column prop="event" label="开门事件类型" :formatter="eventFormatter" align="center"></el-table-column>
      <el-table-column prop="card_id" label="门卡ID" :formatter="unknowFormatter" align="center"></el-table-column>
      <el-table-column prop="card_label" label="门卡名称" :formatter="unknowFormatter" align="center"></el-table-column>
      <el-table-column prop="timestamp" label="时间" :formatter="timeFormatter" align="center"></el-table-column>
      <el-table-column prop="action" label="开门处理结果" align="center">
        <template slot-scope="scope">
            <el-tag v-if="scope.row.action == 'accept'" type="success">成功</el-tag>
            <el-tag v-else-if="scope.row.action == 'deny'" type="warning">拒绝</el-tag>
            <el-tag v-else-if="scope.row.action == 'expire'" type="info">过期</el-tag>
            <el-tag v-else-if="scope.row.action == 'alarm'" type="danger">报警</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-box">
      <el-pagination
        class="pagination"
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="totalCount"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getExtranceLog } from '@/api/index.js'
export default {
 data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 12,
      totalCount: 1,
    }
  },
  methods: {
    async init() {
      let res = await getExtranceLog()
      this.tableData = res.data
      this.totalCount = res.data.length
    },
    // 格式化处理开门事件类型
    eventFormatter(row, col, cellValue, index) {
      if(cellValue == 'card') {
        return '门卡开门'
      } else if(cellValue == 'button'){
        return '开门按钮开门'
      } else if(cellValue == 'remote'){
        return '远程开门'
      } else if(cellValue == 'unknow'){
        return '未知方式'
      }
    },
    // 格式化表格中的unknow
    unknowFormatter(row, col, cellValue, index) {
      if(cellValue == 'unknow' || cellValue == 'None') {
        return '未知'
      }
      return cellValue
    },
    timeFormatter(row, col, cellValue, index) {
      let timeIndex = cellValue.indexOf(',')
      cellValue = cellValue.substr(0, timeIndex)
      console.log(cellValue)
      return this.$moment(cellValue, 'X').format('YYYY年MM月DD日 HH:mm:ss')
    },
    handleCurrentChange(value) {
      this.currentPage = value
    }
  },
  created() {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.table-style{
  width: 100%;
}
.pagination-box{ 
  // position: relative;
  width: 100%;
  margin-top: 20px;
  .pagination {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
  }
}
</style>