# 个人收藏及编写的微信小程序工具类
- 简化冗余的js代码
- 解决常用的逻辑

### 1. api

#### 参数说明
```javascript
/**
 * 请求
 * @param url 地址 {String}
 * @param params 地址 {String}
 * @param headerOrType 内容类型或请求头 {String|Object}
 */
```

#### 使用 (get/post/del/put)
```javascript
/* 1. 引入js文件 */
const api = require('../../utils/api.js');

/* 2. 使用 */
// - then方法意味着请求成功(success)
// - catch方法意味着请求失败(fail)

//2.1 
api.post(url, params, 'form')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      });

//2.1
const header = { 'token': 'daga5441', 'Content-Type': 'application/json'};
api.post(url, params, header)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      });
```


### 2. cache

#### 参数说明
```javascript
/**
 * 缓存的各种方法
 * @param key 键名 {String}
 * @param data 数据 {String}
 * @param isSync 是否是异步操作 {Boolean}
 */
```


### 使用
```javascript
/* 1. 引入js文件 */
const cache = require('../../utils/cache.js');

/* 2. 使用 */
const isSync = false;
const key = 'lxs';
const data = '24';

/*设置缓存数据*/
cache.set( key, data ).then( res => console.log( res )).catch( err => console.log( err ));
cache.set( key, data, isSync ).then( res => console.log( res )).catch( err => console.log( err ));

/*获得指定数据*/
cache.get( key ).then( res => console.log( res )).catch( err => console.log( err ));
cache.get( key, isSync ).then( res => console.log( res )).catch( err => console.log( err ));

/*获得所有的缓存数据*/
cache.getAll().then( res => console.log( res )).catch( err => console.log( err ));
cache.getAll( isSync ).then( res => console.log( res )).catch( err => console.log( err ));

/*移除指定缓存*/
cache.remove( key ).then( res => console.log( res )).catch( err => console.log( err ));
cache.remove( key, isSync ).then( res => console.log( res )).catch( err => console.log( err ));

/*清空缓存*/
cache.clear().then( res => console.log( res )).catch( err => console.log( err ));
cache.clear( isSync ).then( res => console.log( res )).catch( err => console.log( err ));
```