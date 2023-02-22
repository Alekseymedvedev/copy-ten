import Components from "../../pages/components";
import Home from "../../pages/home";
import ExchangeAccount from "../../pages/exchangeAccount";
import Tariff from "../../pages/tariff";
import CopyTrading from "../../pages/copyTrading";
import Partner from "../../pages/partner";
import Support from "../../pages/support";
import Settings from "../../pages/settings";



export const routes = [
    {path: "/", element: <Home/>},
    {path: "/copy-trading", element: <CopyTrading/>},
    {path: "/tariff", element: <Tariff/>},
    {path: "/exchange-account/:id", element: <ExchangeAccount/>},
    {path: "/partner", element: <Partner/>},
    {path: "/settings", element: <Settings/>},
    {path: "/support", element: <Support/>},
    {path: "/components", element: <Components/>},
]