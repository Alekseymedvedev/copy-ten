import Home from "../../pages/home";
import AccountDashboard from "../../pages/accountDashboard";
import Tariff from "../../pages/tariff";
import CopyTrading from "../../pages/copyTrading";
import Partner from "../../pages/partner";
import Support from "../../pages/support";
import Settings from "../../pages/settings";
import TraderDashboard from "../../pages/traderDashboard";



export const routes = [
    {path: "/", element: <Home/>},
    {path: "/copy-trading", element: <CopyTrading/>},
    {path: "/tariff", element: <Tariff/>},
    {path: "/exchange-account/:id", element: <AccountDashboard/>},
    {path: "/partner", element: <Partner/>},
    {path: "/settings", element: <Settings/>},
    {path: "/support", element: <Support/>},
    {path: "/trader-dashboard", element: <TraderDashboard/>},
]