import * as pro from './action-type'
import API from '../../api'

// 初始化 获取产品数据
export const getProData = () => {
  // 返回函数 异步dispatch
  return async dispatch => {
    try {
      let result = await API.getProduction()
      result.map(item => {
        item.selectStatus = true
        item.selectNum = 0
        return item
      })
      dispatch({
        type: pro.GETPRODUCTION,
        dataList: result
      })
    } catch (err) {
      console.log(err)
    }
  }
}

// 切换选择商品
export const togSelectPro = index => {
  return {
    type: pro.TOGGLESELECT,
    index
  }
}

// 编辑商品
export const editPro = (index, selectNum) => {
  return {
    type: pro.EITPRODUCTION,
    index,
    selectNum
  }
}

// 清除选中
export const clearSelected = () => {
  return {
    type: pro.CLEARSELECTED
  }
}
