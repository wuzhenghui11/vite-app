import mockJS from 'mockjs'
// mockjs 生成多数据
const userList = mockJS.Random({
  "data|10": [{
    name: '@name',
    ename: '@name',
    "id|+1": 1,
    time: '@time',
  }]
})
module.exports = [
  {
    method: 'post',
    // 请求本地 会涉及跨域
    api: 'aip/getData',
    response: ({ body }) => {
      return {
        status: 200,
        msg: 'success',
        data: userList
      }
    }
  }
]