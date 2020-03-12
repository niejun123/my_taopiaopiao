import request from '@/utils/request'

 
export const getVideoData =(data,loadingStr)=> request("http://127.0.0.1:3000/video");
//=获取视频数据
export const getVideoDetalis = (data,loadingStr)=>request("http://127.0.0.1:3000/videoDetalis",data)
//=获取视频详情
export const getUserInfo = (data,loadingStr)=>request("http://127.0.0.1:3000/userinfo",data)
//=获取用户登录信息