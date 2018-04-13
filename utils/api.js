// ! api.js
// ! version : 1.0.0
// ! authors : lxs24sxl
// ! license : MIT
// ! time: 2018.04.13

const app = getApp();
const contentType = {
  json: "application/json",
  form: "application/x-www-form-urlencoded"
};
/**
 * 发送请求总方法
 * @params method 方法 {String}
 */
export const request = (method = 'GET') => (url, data, headerOrType = 'form' ) => new Promise((resolve, reject) => {
  let header = {'Content-Type': null};
  const type = Object.prototype.toString.call(headerOrType);
  switch( type ) {
    case '[object String]': 
      header['Content-Type'] = type.toLowerCase() === 'json' ? contentType.json : contentType.form;
      break;
    case '[object Object]':
      header = headerOrType;
      break;
  }
  wx.showNavigationBarLoading();
  wx.request({
    url,
    method,
    data,
    header: header,
    success:(res) => resolve(res),
    fail:(err) => reject(err),
    complete:() => {
      wx.hideNavigationBarLoading()
      wx.hideLoading();
    }
  });
});


/**
 * 发送请求子方法
 * url, data, headerOrType = 'form'
 * @param url 地址 {String}
 * @param data 数据 {Object|String|Number}
 * @param headerOrType 内容类型或请求头 {String|Object}
 */
export const get = request('GET');
export const post = request('POST');
export const put = request('PUT');
export const del = request('DELETE');