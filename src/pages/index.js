import loadable from "react-loadable"
import Loading from "@common/loading"

const Home = loadable({
    loader:()=>import("@pages/home"),
    loading:Loading
})
const Login = loadable({
    loader:()=>import("@pages/login"),
    loading:Loading
})
const Mine = loadable({
    loader:()=>import("@pages/mine"),
    loading:Loading
})
const Register = loadable({
    loader:()=>import("@pages/register"),
    loading:Loading
})
const Search = loadable({
    loader:()=>import("@pages/search"),
    loading:Loading
})
const Shoppingcar = loadable({
    loader:()=>import("@pages/shoppingcar"),
    loading:Loading
})
const Detail = loadable({
    loader:()=>import("@pages/detail"),
    loading:Loading
})

// const Goods = loadable({
//     loader:()=>import("@components/goods"),
//     loading:Loading
// })

const Classify = loadable({
    loader:()=>import("@pages/classify"),
    loading:Loading
})

const SearchOne = loadable({
    loader:()=>import('@pages/searchone'),
    loading:Loading
})

export {
    Home,
    Login,
    Mine,
    Register,
    Search,
    Shoppingcar,
    Detail,
    Classify,
    SearchOne
    // Goods
}



