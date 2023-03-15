import MainLayout from "../widgets/mainLayout";
import UsersList from "../widgets/usersList";


const AdminBrokerServers = () => {
    return (
        <MainLayout heading="Сервера брокера" isAdmin>
            <UsersList/>
        </MainLayout>
    );
};

export default AdminBrokerServers;