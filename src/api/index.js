import http from "@utils/http"

export const HOME_SWIPER = ()=>http.get("/api/home/index/slide?token=1ec949a15fb709370f")
export const HOME_NAV = ()=>http.get("/api/home/index/nav?token=1ec949a15fb709370f")
export const HOME_GOODSLEVEL = ()=>http.get("/api/home/index/goodsLevel?token=1ec949a15fb709370f")
export const HOME_FORYOU = ()=>http.get("/api/home/index/recom?token=1ec949a15fb709370f")