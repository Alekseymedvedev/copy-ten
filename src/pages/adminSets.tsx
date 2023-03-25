import MainLayout from "../widgets/mainLayout";
import Set from "../widgets/set";


const AdminSets = () => {
    return (
        <MainLayout heading="Сеты" isAdmin>
            <Set adminSet/>
        </MainLayout>
    );
};

export default AdminSets;