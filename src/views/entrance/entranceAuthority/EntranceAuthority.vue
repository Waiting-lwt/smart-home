<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column prop="id" label="id" width="50" align="center"></el-table-column>
    <el-table-column prop="card_id" label="门卡ID" :formatter="unknowFormatter" align="center"></el-table-column>
    <el-table-column prop="card_label" label="门卡名称" :formatter="unknowFormatter" align="center"></el-table-column>
  </el-table>
</template>

<script>
import { getExtranceUsers } from '@/api/index.js'
export default {
 data() {
    return {
      tableData: [],
    }
  },
  methods: {
    async init() {
      let res = await getExtranceUsers()
      this.tableData = res.data
    },
    unknowFormatter(row, col, cellValue, index) {
      if(cellValue == 'unknow') {
        return '未知'
      }
      return cellValue
    }
  },
  created() {
    this.init()
  }
}
</script>

<style>

</style>