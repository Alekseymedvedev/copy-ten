import MainLayout from "../widgets/mainLayout";
import TransactionAccordion from "../widgets/transactionAccordion";


const AdminTransaction = () => {
    return (
        <MainLayout heading="Трейдеры" isAdmin>
            <TransactionAccordion/>
        </MainLayout>
    );
};

export default AdminTransaction;