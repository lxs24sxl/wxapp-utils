const app = getApp();
const contentType = {
  json: "application/json",
  form: "application/x-www-form-urlencoded"
};
// 发送请求
export const request = (method = 'GET') => (url, data, type) => new Promise((resolve, reject) => {
  let reqType = type ? type : "";
  reqType = reqType.toLowerCase() === 'json' ? contentType.json : contentType.form;
  wx.request({
    url,
    method,
    data,
    header: {
      "Content-Type": reqType
    },
    success(res) {
      resolve(res);
    },
    fail(err) {
      reject(err);
    },
    complete() {
      app.hideLoading();
    }
  });
});

export const get = request('GET');
export const post = request('POST');
export const put = request('PUT');
export const del = request('DELETE');