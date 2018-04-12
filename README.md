# 个人收藏及编写的微信小程序工具类
- 简化冗余的js代码
- 解决常用的逻辑

### api

#### 参数说明

- 参数1: url地址
- 参数2: 数据
- 参数3: 内容格式 json => application/json; form => application/x-www-form-urlencoded; 默认为form格式


#### 使用 (get/post/del/put)
```javascript
// 1. 引入js文件
const api = require('../../utils/api.js');

// 2. 使用
// then方法意味着请求成功(success)
// catch方法意味着请求失败(fail)
api.post(url, params, 'form')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
```
