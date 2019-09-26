import {
    Home,
    Login,
    Mine,
    Register,
    Search,
    Shoppingcar,
    Detail,
    Classify,
    SearchOne
} from "@pages"

import Right from "@components/right"
import Goods from "@components/goods"
import Detail0 from "@components/detail"
import Assess from "@components/assess"

export const tabBarRoutes = [
    {
        key:"/home",
        path:"/home",
        name:"首页",
        component:Home,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true,
            src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACXUlEQVRoQ+2Z7TEEQRCG34uADBABIkAEiAARIAMykAEiQASIABkQASKgHrWj5vZ2Znr29uOuauaPKrvb8z7dPTPdcxMt+ZgsuX71BbAq6UjSgeege0m3kr4iTuOb9cDzN0nYmBp9AGxJugsIeZV0Iom/9QH0ZyIjtuvfdg2A+EdJiAkNIrARiARgm5Fv9yQ9+c+7BED0SyQF/HkRiph6OmEDgSGI3gCYGM8TAetoA9FLCrUR7yBzIWYyZt4Umke8g2BnOQwsagDXvGedA1xLOrbmTOS9m2p3qr9CSrImVqoHnQJ0Jd6JjkEQJaLhnyt/37VNoa7FpyCCwWsD0Jd4J/Jc0pU1LXMByHcA+h6c1qRUcuQADCXeiTZBWAGGFm+GsACw8inOxhiUGpQPTcWfaReyFGd9g0UhYhFYBPHOOUGIEABNBZVlrCzu2/N1+41leAiALYzuaNEGHd1U6RICoDNaJO87R75XzdC/Y0MAqc5orMg8S9r1Jw8BcJSfjqUyMu+lpAsLQKq1G4ONWwm8P9WGxrZRIM68kO0YVBNiy8B2rHl3Npw9egKyYuZKxnISO2M/BmVWe3iSHjo1kvaSL3gzFADPGSUCzhklhWqr0OqQkkIlhQIbeEmh3DVl9Rh2y0FWDrKGhVdSKHfRZRSH35a2NicCXHHvR+rfh6br78j71PixHmOmgW+ylQNAE0JT7X5s8O3hLa5iYr8B1+fnfXrvJnsf1e9tSXs5AAgAgs6I60YmRjiRoXNLTtbgQSDocZ09hGOP/5ns5QKkOqjBnxeAwV0+x7Y3ttbG+X8BOYh+MbpF3bMAAAAASUVORK5CYII="
        }
    },
    {
        key:"/shoppingcar",
        path:"/shoppingcar",
        name:"购物车",
        component:Shoppingcar,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true,
            src:"data:image/png;base64,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"
        }
    },
    {
        key:"/mine",
        path:"/mine",
        name:"我的",
        component:Mine,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true,
            src:"data:image/png;base64,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"
        }
    }
]


export const noTabBarRoutes = [
    {
        key:"/login",
        path:"/login",
        name:"登录",
        component:Login,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true
        }
    },
    {
        key:"/register",
        path:"/register",
        name:"注册",
        component:Register,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false
        }
    },
    {
        key:"/search",
        path:"/search",
        name:"搜索",
        component:Search,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false
        },
        children:[
            {
                key:"/search/right",
                path:"/search/right",
                name:"右边",
                component:Right,
                exact:true,
                meta:{
                    requireAuth:false,
                    flag:false
                }
            }
        ]
    },
    {
        key:"/detail",
        path:"/detail",
        name:"详情",
        component:Detail,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false
        },
        children:[
            {
                key:'/detail/goods',
                path:"/detail/goods",
                name:"商品",
                component:Goods,
                exact:true,
                meta:{
                    requireAuth:false,
                    flag:false,
                }
            },
            {
                key:"/detail/detail0",
                path:"/detail/detail0",
                name:"详情0",
                component:Detail0,
                exact:true,
                meta:{
                    requireAuth:false,
                    flag:false
                }
            },
            {
                key:"/detail/assess",
                path:"/detail/assess",
                name:"评价",
                component:Assess,
                exact:true,
                meta:{
                    requireAuth:false,
                    flag:false
                }
            }
        ]
    },
    {
        key:"/classify",
        path:"/classify",
        name:"热门搜索",
        component:Classify,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false
        }
    },
    {
        key:"/searchone",
        path:"/searchone",
        name:"搜索详情",
        component:SearchOne,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false
        }
    }
]


export const baseRoutes =  tabBarRoutes.concat(noTabBarRoutes);


