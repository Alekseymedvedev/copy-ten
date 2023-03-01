import MainLayout from "../widgets/mainLayout";
import TarrifItem from "../entities/components/tarrifItem";
import MyProductsList from "../widgets/myProductsList";


const Tariff = () => {
    return (
        <MainLayout>
            <TarrifItem/>
            <MyProductsList/>
        </MainLayout>
    );
};

export default Tariff;