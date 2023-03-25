import Home from "../../pages/home";
import AccountDashboard from "../../pages/accountDashboard";
import Tariff from "../../pages/tariff";
import CopyTrading from "../../pages/copyTrading";
import Partner from "../../pages/partner";
import Support from "../../pages/support";
import Settings from "../../pages/settings";
import TraderDashboard from "../../pages/traderDashboard";
import Auth from "../../pages/auth";
import Admin from "../../pages/admin";
import AdminForex from "../../pages/adminForex";
import AdminBankRequisites from "../../pages/adminBankRequisites";
import AdminSets from "../../pages/adminSets";
import AdminTraders from "../../pages/adminTraders";
import AdminBrokerServers from "../../pages/adminBrokerServers";
import AdminTransaction from "../../pages/adminTransaction";


export const routes = [
    {path: "/", element: <Home/>},
    {path: "/auth", element: <Auth/>},
    {path: "/copy-trading", element: <CopyTrading/>},
    {path: "/tariff", element: <Tariff/>},
    {path: "/exchange-account/:id", element: <AccountDashboard/>},
    {path: "/partner", element: <Partner/>},
    {path: "/settings", element: <Settings/>},
    {path: "/support", element: <Support/>},
    {path: "/trader-dashboard", element: <TraderDashboard/>},
    {path: "/admin", element: <Admin/>},
    {path: "/admin/forex", element: <AdminForex/>},
    {path: "/admin/bank-requisites", element: <AdminBankRequisites/>},
    {path: "/admin/sets", element: <AdminSets/>},
    {path: "/admin/transaction", element: <AdminTransaction/>},
    {path: "/admin/traders", element: <AdminTraders/>},
    {path: "/admin/broker-servers", element: <AdminBrokerServers/>},
]