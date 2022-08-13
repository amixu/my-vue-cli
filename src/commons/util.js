/*
 * @Author: amixu
 * @Date: 2022-08-13 22:39:41
 * @LastEditors: amixu
 * @LastEditTime: 2022-08-13 23:18:17
 * @Description: 工具函数
 */
import axios from 'axios';
/**
 * @description: 接口请求函数
 * @param {object} config
 * @return {promise}
 */
export const httpReq = config => {
  const { url, method = 'get', params = {}, data = {}, successMsg } = config;
  return new Promise((resolve, reject) => {
    axios({
      method,
      url,
      params,
      data,
      timeout: 600 * 1000,
      withCredentials: true,
      headers: {
        common: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    }).then(
      response => {
        const res = response.data;
        const { code, result } = res;
        if (code === 1) {
          if (successMsg) {
            console.log(successMsg);
          }
          resolve(result);
        } else {
          reject(res);
        }
      },
      error => {
        const errStatus = error?.response?.status;
        switch (errStatus) {
          case 401: {
            console.log('无权限');
            break;
          }
          default:
            console.log('请求异常');
        }
      }
    );
  });
};
