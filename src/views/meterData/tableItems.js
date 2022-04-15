// 表格数组
export default [
  {
    label: '设备编号',
    prop: 'id',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return cellValue
    }
  },
  {
    label: 'A相电压',
    prop: 'voltageA',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (parseFloat(cellValue) * 0.1).toFixed(1) + 'V'
    }
  },
  {
    label: 'B相电压',
    prop: 'voltageB',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (parseFloat(cellValue) * 0.1).toFixed(1) + 'V'
    }
  },
  {
    label: 'C相电压',
    prop: 'voltageC',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (parseFloat(cellValue) * 0.1).toFixed(1) + 'V'
    }
  },
  {
    label: 'A相电流',
    prop: 'currentA',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (parseFloat(cellValue) * 0.001).toFixed(3) + 'A'
    }
  },
  {
    label: 'B相电流',
    prop: 'currentB',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (parseFloat(cellValue) * 0.001).toFixed(3) + 'A'
    }
  },
  {
    label: 'C相电流',
    prop: 'currentC',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (parseFloat(cellValue) * 0.001).toFixed(3) + 'A'
    }
  },
  {
    label: '瞬时有功功率总和',
    prop: 'activeTotalPower',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (parseFloat(cellValue) * 0.1).toFixed(1) + 'W'
    },
  },
  {
    label: 'A相瞬时有功功率',
    prop: 'activePowerA',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (parseFloat(cellValue) * 0.1).toFixed(1) + 'W'
    },
  },
  {
    label: 'B相瞬时有功功率',
    prop: 'activePowerB',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (parseFloat(cellValue) * 0.1).toFixed(1) + 'W'
    },
  },
  {
    label: 'C相瞬时有功功率',
    prop: 'activePowerC',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (parseFloat(cellValue) * 0.1).toFixed(1) + 'W'
    },
  },
  {
    label: '瞬时无功功率总和',
    prop: 'reactiveTotalPower',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (parseFloat(cellValue) * 0.0001).toFixed(4) + 'kvar'
    },
    width: '110px',
  },
  {
    label: 'A相瞬时无功功率',
    prop: 'reactivePowerA',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (parseFloat(cellValue) * 0.0001).toFixed(4) + 'kvar'
    },
    width: '110px',
  },
  {
    label: 'B相瞬时无功功率',
    prop: 'reactivePowerB',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (parseFloat(cellValue) * 0.0001).toFixed(4) + 'kvar'
    },
    width: '110px',
  },
  {
    label: 'C相瞬时无功功率',
    prop: 'reactivePowerC',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (parseFloat(cellValue) * 0.0001).toFixed(4) + 'kvar'
    },
    width: '110px',
  },
  {
    label: '瞬时视在功率总和',
    prop: 'apparentTotalPower',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (parseFloat(cellValue) * 0.0001).toFixed(4) + 'kVA'
    },
    width: '110px',
  },
  {
    label: 'A相瞬时视在功率',
    prop: 'apparentPowerA',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return  (parseFloat(cellValue) * 0.0001).toFixed(4) + 'kVA'
    },
    width: '110px',
  },
  {
    label: 'B相瞬时视在功率',
    prop: 'apparentPowerB',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return  (parseFloat(cellValue) * 0.0001).toFixed(4) + 'kVA'
    },
    width: '110px',
  },
  {
    label: 'C相瞬时视在功率',
    prop: 'apparentPowerC',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return  (parseFloat(cellValue) * 0.0001).toFixed(4) + 'kVA'
    },
    width: '110px',
  },
  {
    label: '总功率因数',
    prop: 'factorTotal',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (cellValue * 0.001).toFixed(3)
    }
  },
  {
    label: 'A相功率因数',
    prop: 'factorA',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (cellValue * 0.001).toFixed(3)
    }
  },
  {
    label: 'B相功率因数',
    prop: 'factorB',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (cellValue * 0.001).toFixed(3)
    }
  },
  {
    label: 'C相功率因数',
    prop: 'factorC',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (cellValue * 0.001).toFixed(3)
    }
  },
  {
    label: 'A相角',
    prop: 'angleA',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (cellValue * 0.1).toFixed(1) + '度'
    }
  },
  {
    label: 'B相角',
    prop: 'angleB',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (cellValue * 0.1).toFixed(1) + '度'
    }
  },
  {
    label: 'C相角',
    prop: 'angleC',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (cellValue * 0.1).toFixed(1) + '度'
    }
  },
  {
    label: '零线电流',
    prop: 'neutral',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (cellValue * 0.001).toFixed(3) + 'A'
    }
  },
  {
    label: '电网频率',
    prop: 'frequency',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (cellValue * 0.01).toFixed(2) + 'Hz'
    }
  },
  {
    label: '表内温度',
    prop: 'temperature',
    formatter: (row, column, cellValue, index) => {
      if(cellValue == '暂未接收到数据') {
        return cellValue
      }
      return (cellValue * 0.1).toFixed(1) + '℃'
    }
  }

]

{/* <el-table-column label="A相电压" prop="">{{ props.row.voltageA }}</el-table-column>
<el-table-column label="B相电压">{{ props.row.voltageB }}</el-table-column>
<el-table-column label="C相电压" span="2">{{ props.row.voltageC }}</el-table-column>
<el-table-column label="A相电流">苏州市</el-table-column>
<el-table-column label="B相电流">苏州市</el-table-column>
<el-table-column label="C相电流" span="2">苏州市</el-table-column>
<el-table-column label="瞬时有功功率总和">苏州市</el-table-column>
<el-table-column label="A相瞬时有功功率">苏州市</el-table-column>
<el-table-column label="B相瞬时有功功率">苏州市</el-table-column>
<el-table-column label="C相瞬时有功功率">苏州市</el-table-column>
<el-table-column label="瞬时无功功率总和">苏州市</el-table-column>
<el-table-column label="A相瞬时无功功率">苏州市</el-table-column>
<el-table-column label="B相瞬时无功功率">苏州市</el-table-column>
<el-table-column label="C相瞬时无功功率">苏州市</el-table-column>
<el-table-column label="瞬时视在功率总和">苏州市</el-table-column>
<el-table-column label="A相瞬时视在功率">苏州市</el-table-column>
<el-table-column label="B相瞬时视在功率">苏州市</el-table-column>
<el-table-column label="C相瞬时视在功率">苏州市</el-table-column>
<el-table-column label="总功率因素">苏州市</el-table-column>
<el-table-column label="A相功率因素">苏州市</el-table-column>
<el-table-column label="B相功率因素">苏州市</el-table-column>
<el-table-column label="C相功率因素">苏州市</el-table-column>
<el-table-column label="A相角">苏州市</el-table-column>
<el-table-column label="B相角">苏州市</el-table-column>
<el-table-column label="C相角" span="2">苏州市</el-table-column>
<el-table-column label="零线电流" span="4">苏州市</el-table-column>
<el-table-column label="电网频率" span="4">苏州市</el-table-column>
<el-table-column label="表内温度" span="4">苏州市</el-table-column>         */}