import MainLayout from "../widgets/mainLayout";
import DashboardTabs from "../widgets/dashboardTabs";
import {useGetProductQuery} from "../store/productApi";


const AccountDashboard = () => {
    const{data,error,isLoading}=useGetProductQuery('coins')
    console.log(data)
    console.log(error)
    console.log(isLoading)
    return (
        <MainLayout heading="Дашборд" accountNumber="18050009" typeAccount="copytrad">
            <DashboardTabs />
        </MainLayout>
    );
};

export default AccountDashboard;