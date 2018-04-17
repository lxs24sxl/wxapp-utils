
let modalInfo = {
  title: '默认标题',
  content: '我是默认内容',
  showCancel: true,
  cancelText: '取消',
  cancelColor: '#000000',
  confirmText: '确定',
  confirmColor: '#3cc51f'
};
export const modal = (modalInfo = modalInfo) => new Promise((resolve, reject) => {
  
  wx.showModal({
    title: modalInfo.title ? modalInfo.title : '默认标题',
    content: modalInfo.content ? modalInfo.content : '我是默认内容',
    showCancel: modalInfo.showCancel ? modalInfo.showCancel : true,
    cancelText: modalInfo.cancelText ? modalInfo.cancelText : '取消',
    cancelColor: modalInfo.cancelColor ? modalInfo.cancelColor : '#000000',
    confirmText: modalInfo.confirmText ? modalInfo.confirmText : '确定',
    confirmColor: modalInfo.confirmColor ? modalInfo.confirmColor : '#3cc51f',
    success: (res) => {
      if (res.confirm) {
        resolve();
      } else if (res.cancel) {
        reject();
      }
    },
    fail: (err) => reject(err)
  })
})