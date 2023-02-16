import Components from "../../pages/components";
import Home from "../../pages/home";



export const routes = [
    {path: "/", element: <Home/>, name:'Мои счета',navigateClass:'navigationGreen',icon:true},
    {path: "/components", element: <Components/>, name:'Копитрейдинг',navigateClass:'navigationPurple',icon:false},
    {path: "/comp", element: <Components/>, name:'Тарифы',navigateClass:'navigationYellow',icon:''},
    {path: "/partner", element: <Components/>, name:'Партнерская программа',navigateClass:'navigationRed',icon:false},
    {path: "/settings", element: <Components/>, name:'Настройки',navigateClass:'navigationWhite',icon:''},
    {path: "/support", element: <Components/>, name:'Тех. поддержка',navigateClass:'',icon:''},
]