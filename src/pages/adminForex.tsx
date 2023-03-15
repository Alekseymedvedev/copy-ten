import MainLayout from "../widgets/mainLayout";
import ForexList from "../widgets/forexList";


const AdminForex = () => {
    return (
        <MainLayout heading="Forex счета" isAdmin>
            <ForexList/>
        </MainLayout>
    );
};

export default AdminForex;