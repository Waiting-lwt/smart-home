import moment from 'moment'; //导入模块
moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn'); 


export const formatMoment = (dataStr) => {
  return moment(dataStr, 'X').format('YYYY年MM月DD日HH时')
}