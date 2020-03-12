import axios from 'axios'

export default async (url = "", data = {}, method = "POST") => { // 封装了一个网路请求的方法体, 别人调用此方法时, 会得到一个网络请求的Promise对象
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      data: ['POST', "PUT", "DELETE"].indexOf(method.toUpperCase()) > -1 ? data : {}, // post/put/delete发送参数, 要使用data
      params: "GET" === method.toUpperCase() ? data : {}, // get方式 发送参数, 必须要用params
    }).then(resObj => {
      resolve(resObj['data']);
    }).catch(error => {
      reject(error);
    })
  });
}
// async 修饰的函数始终会返回一个Promise对象
