import MainLayout from "../widgets/mainLayout";
import UsersList from "../widgets/usersList";


const AdminTraders = () => {
    return (
        <MainLayout heading="Трейдеры" isAdmin>
            <UsersList/>
        </MainLayout>
    );
};

export default AdminTraders;