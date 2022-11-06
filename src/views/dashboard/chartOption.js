// 电压表初始化
export const voltageData = [
  {
    value: 0,
    name: 'A相电压',
    title: {
      offsetCenter: ['-40%', '80%']
    },
    detail: {
      offsetCenter: ['-40%', '95%']
    }
  },
  {
    value: 0,
    name: 'B相电压',
    title: {
      offsetCenter: ['0%', '80%']
    },
    detail: {
      offsetCenter: ['0%', '95%']
    }
  },
  {
    value: 0,
    name: 'C相电压',
    title: {
      offsetCenter: ['40%', '80%']
    },
    detail: {
      offsetCenter: ['40%', '95%']
    }
  }
];

export const currentData = [
  {
    value: 0,
    name: 'A相电流',
    title: {
      offsetCenter: ['-40%', '80%']
    },
    detail: {
      offsetCenter: ['-40%', '95%']
    }
  },
  {
    value: 0,
    name: 'B相电流',
    title: {
      offsetCenter: ['0%', '80%']
    },
    detail: {
      offsetCenter: ['0%', '95%']
    }
  },
  {
    value: 0,
    name: 'C相电流',
    title: {
      offsetCenter: ['40%', '80%']
    },
    detail: {
      offsetCenter: ['40%', '95%']
    }
  }
];

export const powerData = [
  {
    value: 0,
    name: 'A相功率',
    title: {
      offsetCenter: ['-40%', '80%']
    },
    detail: {
      offsetCenter: ['-40%', '95%']
    }
  },
  {
    value: 0,
    name: 'B相功率',
    title: {
      offsetCenter: ['0%', '80%']
    },
    detail: {
      offsetCenter: ['0%', '95%']
    }
  },
  {
    value: 0,
    name: 'C相功率',
    title: {
      offsetCenter: ['40%', '80%']
    },
    detail: {
      offsetCenter: ['40%', '95%']
    }
  }
];

const createSeries = (data, formatter, min, max) => {
  return [
    {
      type: 'gauge',
      anchor: {
        show: true,
        showAbove: true,
        size: 18,
        itemStyle: {
          color: '#FAC858'
        }
      },
      max,
      min,
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 8,
        length: '80%',
        offsetCenter: [0, '8%']
      },
      progress: {
        show: true,
        overlap: true,
        roundCap: true
      },
      axisLine: {
        roundCap: true
      },
      data: data,
      title: {
        fontSize: 14
      },
      detail: {
        width: 40,
        height: 14,
        fontSize: 14,
        color: '#fff',
        backgroundColor: 'auto',
        borderRadius: 3,
        // formatter: '{value}V'
        formatter: formatter
      }
    }
  ]
}

export const voltageOption = {
  series: createSeries(voltageData, '{value}V', 215, 225)
}

export const currentOption ={
  series: createSeries(currentData, '{value}A', 0, 1.3)
}

export const powerOption ={
  series: createSeries(powerData, '{value}W', 0, 800)
}
// export const voltageOption = {
