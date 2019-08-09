import Server from './server'

class API extends Server {
  /**
   *上传图片
   *
   * @param {*} [params={}]
   * @returns
   * @memberof API
   */
  async uploadImg(params = {}) {
    try {
      let result = await this.fetch(
        'post',
        '//elm.cangdu.org/v1/addimg/shop',
        params
      )
      if (result && result.status === 1) {
        return result
      } else {
        let err = {
          tip: '上传图片失败',
          response: result,
          data: params,
          url: '//elm.cangdu.org/v1/addimg/shop'
        }
        throw err
      }
    } catch (err) {
      throw err
    }
  }

  /**
   *获取记录数据
   *
   * @param {*} [params={}]
   * @returns
   * @memberof API
   */
  async getRecord(params = {}) {
    try {
      let result = await this.fetch('get', `/shopro/data/record/${params.type}`)
      if (result && result.data instanceof Object && result.http_code === 200) {
        return result.data
      } else {
        let err = {
          tip: '获取记录数据失败',
          response: result,
          data: params,
          url: 'https://api.cangdu.org/shopro/data/record'
        }
        throw err
      }
    } catch (err) {
      throw err
    }
  }

  /**
   *获取产品数据
   *
   * @param {*} [params={}]
   * @returns
   * @memberof API
   */
  async getProduction(params = {}) {
    try {
      let result = await this.fetch('get', '/shopro/data/products', params)
      if (result && result.data instanceof Object && result.http_code === 200) {
        return result.data.data || []
      } else {
        let err = {
          tip: '获取商品数据失败',
          response: result,
          data: params,
          url: 'https://api.cangdu.org/shopro/data/products'
        }
        throw err
      }
    } catch (err) {
      throw err
    }
  }

  async getBanlance(params = {}) {
    try {
      let result = await this.fetch('get', '/shopro/data/balance', params)
      if (result && result.data instanceof Object && result.http_code === 200) {
        return result.data.data || {}
      } else {
        let err = {
          tip: '获取佣金数据失败',
          response: result,
          data: params,
          url: 'https://api.cangdu.org/shopro/data/balance'
        }
        throw err
      }
    } catch (err) {
      throw err
    }
  }
}

export default new API()
