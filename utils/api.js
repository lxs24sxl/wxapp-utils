const app = getApp();
const contentType = {
  json: "application/json",
  form: "application/x-www-form-urlencoded"
};
// 发送请求
export const request = (method = 'GET') => (url, data) => new Promise((resolve, reject) => {
  wx.request({
    url,
    method,
    data,
    header: {
      "Content-Type": contentType.form
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