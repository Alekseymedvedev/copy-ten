import MainLayout from "../widgets/mainLayout";
import DashboardTabs from "../widgets/dashboardTabs";


const AccountDashboard = () => {

    return (
        <MainLayout heading="Дашборд" accountNumber="18050009" typeAccount="copytrad">
            <DashboardTabs />
        </MainLayout>
    );
};

export default AccountDashboard;