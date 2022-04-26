<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column prop="card_id" label="门卡ID" :formatter="unknowFormatter" align="center"></el-table-column>
    <el-table-column prop="card_label" label="门卡名称" :formatter="unknowFormatter" align="center"></el-table-column>
    <el-table-column prop="expire" label="有效期"  align="center" :formatter="formatTime"></el-table-column>
  </el-table>
</template>

<script>
import { getExtranceUsers } from '@/api/index.js'
import { formatMoment } from '@/utils/moment.js'
export default {
 data() {
    return {
      tableData: [],
    }
  },
  methods: {
    async init() {
      let res = await getExtranceUsers()
      // this.tableData = res.data
      console.log('发送成功')
    },
    unknowFormatter(row, col, cellValue, index) {
      if(cellValue == 'unknow') {
        return '未知'
      }
      return cellValue
    },
    formatTime(row, col, cellValue, index) {
      return formatMoment(cellValue)
    }
  },
  created() {
    this.init()
  },
  sockets: {
    connect() {
      console.log('socket连接成功')
    },
    getExtranceUsers(res) {
      console.log(res)
      let data = JSON.parse(res).data
      this.tableData = data.users
    }
  }
}
</script>

<style>

</style>