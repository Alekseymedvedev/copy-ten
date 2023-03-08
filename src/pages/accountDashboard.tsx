import MainLayout from "../widgets/mainLayout";
import AccountDashboardTabs from "../widgets/accountDashboardTabs";
import React from "react";


const AccountDashboard = () => {
    return (
        <MainLayout heading="Дашборд" accountNumber="18050009" typeAccount="copytrad">
            <AccountDashboardTabs />
        </MainLayout>
    );
};

export default AccountDashboard;