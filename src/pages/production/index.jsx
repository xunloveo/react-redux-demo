import React, { Component } from 'react'
import { is, fromJS } from 'immutable'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PublicHeader from '../../components/header/header'
import {
  getProData,
  togSelectPro,
  editPro
} from '../../store/production/action'
import './index.less'

class Production extends Component {
  static propTypes = {
    proData: PropTypes.object.isRequired,
    getProData: PropTypes.func.isRequired,
    togSelectPro: PropTypes.func.isRequired,
    editPro: PropTypes.func.isRequired
  }

  // 选择商品
  togSelectPro = index => {
    this.props.togSelectPro(index)
  }

  /**
   * 添加或删减商品，交由redux进行数据处理，作为全局变量
   * @param  {int} index 编辑的商品索引
   * @param  {int} num   添加||删减的商品数量
   */
  handleEdit = (index, num) => {
    let currentNum = this.props.proData.dataList[index].selectNum + num
    if (currentNum < 0) return
    this.props.editPro(index, currentNum)
  }

  componentDidMount() {
    if (!this.props.proData.dataList.length) {
      this.props.getProData()
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    )
  }

  render() {
    return (
      <main className="common-con-top">
        <PublicHeader title="首页" confirm />
        <section className="pro-list-con">
          <ul className="pro-list-ul">
            {this.props.proData.dataList.map((item, index) => {
              return (
                <li className="pro-item" key={index}>
                  <div
                    className="pro-item-select"
                    onClick={this.togSelectPro.bind(this, index)}
                  >
                    <span
                      className={`icon-xuanze1 pro-select-status ${
                        item.selectStatus ? 'pro-selected' : ''
                      }`}
                    />
                    <span className="pro-name">{item.product_name}</span>
                  </div>
                  <div className="pro-item-edit">
                    <span
                      className={`icon-jian ${
                        item.selectNum > 0 ? 'edit-active' : ''
                      }`}
                      onClick={this.handleEdit.bind(this, index, -1)}
                    />
                    <span className="pro-num">{item.selectNum}</span>
                    <span
                      className="icon-jia"
                      onClick={this.handleEdit.bind(this, index, 1)}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    )
  }
}

export default connect(
  state => ({ proData: state.proData }),
  {
    getProData,
    togSelectPro,
    editPro
  }
)(Production)
