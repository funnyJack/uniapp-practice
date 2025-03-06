const baseUrl = 'https://apifoxmock.com/m1/4728220-0-default/api'
type HttpMethodType ="GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT"
	

const request = (url:string,data:any={},method:HttpMethodType='GET')=>{
	 return uni.request({
		url:baseUrl+url,
		data,
		method,
		header:{
			'token':uni.getStorageSync('token') || ''
		}
	})
}
 
export const getBanner = ()=>{
	return request('/user/getBanner')
}

export const getHomeList = ()=>{
	return request('/user/getHomeList')
}
