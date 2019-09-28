import http from "@utils/http"
//home页面
export const HOME_SWIPER = ()=>http.get("/api/home/index/slide?token=1ec949a15fb709370f")
export const HOME_NAV = ()=>http.get("/api/home/index/nav?token=1ec949a15fb709370f")
export const HOME_GOODSLEVEL = ()=>http.get("/api/home/index/goodsLevel?token=1ec949a15fb709370f")
export const HOME_FORYOU = ()=>http.get("/api/home/index/recom?token=1ec949a15fb709370f")


//search页面
export const SEARCH_LEFT = ()=>http.get("/api/home/category/menu?token=1ec949a15fb709370f")


//classify页面

export const CLASSIFY_HOTSEATCH = ()=>http.get("/api/home/public/hotwords?token=1ec949a15fb709370f")


//详情页

export const DETAIL_INFO = (gid)=>http.get('/api/home/goods/info?gid='+gid+'&type=details&token=1ec949a15fb709370f')
export const DETAIL_ASSESS = (gid)=>http.get("/api/home/reviews/index/gid/"+gid+"?token=1ec949a15fb709370f")
export const COLORANDSIZE = (gid)=>http.get("/api/home/goods/info/gid/"+gid+"/type/spec?token=1ec949a15fb709370f")