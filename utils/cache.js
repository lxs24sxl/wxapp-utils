// ! cache.js
// ! version : 1.0.0
// ! authors : lxs24sxl
// ! license : MIT
// ! time: 2018.04.13

/**
 * 设置指定缓存
 * @param key 键名 {String }
 * @param data 值 {String} 
 * @param isSync 是否为异步 {Boolean}
 */
export const set = (key, data, isSync = true) => new Promise((resolve, reject) => {
  if (isSync) {
    wx.setStorage({
      key,
      data,
      success: (res) => resolve(res),
      fail: (err) => reject(err)
    });
  } else {
    try {
      wx.setStorageSync(key, data);
      resolve();
    } catch (err) {
      reject(err);
    }
  }
});

/**
 * 获得指定缓存
 * @param key 键名 {String }
 * @param isSync 是否为异步 {Boolean}
 */
export const get = (key, isSync = true) => new Promise((resolve, reject) => {
  if (isSync) {
    wx.getStorage({
      key,
      success: (res) => resolve(res),
      fail: (err) => reject(err)
    });
  } else {
    try {
      wx.getStorageSync(key);
      resolve();
    } catch (err) {
      reject(err);
    }
  }
});

/**
 * 清除缓存
 * @param key 键名 {String }
 * @param isSync 是否为异步 {Boolean}
 */
export const remove = (key, isSync = true) => new Promise((resolve, reject) => {
  if (isSync) {
    wx.removeStorage({
      key,
      success: (res) => resolve(res),
      fail: (err) => reject(err)
    });
  } else {
    try {
      wx.removeStorageSync(key);
      resolve();
    } catch (err) {
      reject(err)
    }
  }
});

/**
 * 获得当前storage的相关信息
 * @param isSync 是否为异步 {Boolean}
 */
export const getAll = ( isSync = true ) => new Promise(( resolve, reject) => {
  if ( isSync ) {
    wx.getStorageInfo({
      success:(res) => resolve( res ),
      fail: ( err ) => reject( err )
    });
  } else {
    try {
      const res = wx.getStorageInfoSync();
      resolve( res );
    } catch(err){
      reject( err );
    }
  }
});
/**
 * 清楚本地数据的缓存
 * @param isSync 是否为异步 {Boolean}
 */
export const clear = (isSync = true) => new Promise((resolve, reject) => {
  if (isSync) {
    wx.clearStorage({
      success: (res) => resolve(res),
      fail: (err) => reject(err)
    });
  } else {
    try {
      wx.clearStorageSync();
      resolve();
    } catch (err) {
      reject(err);
    }
  }
});