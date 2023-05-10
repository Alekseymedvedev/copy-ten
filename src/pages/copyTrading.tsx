import MainLayout from "../widgets/mainLayout";
import CopyTradingTabs from "../widgets/copyTradingTabs";


const CopyTrading = () => {
    return (
        <MainLayout isSelect heading="Копитрейдинг">
            <CopyTradingTabs/>
        </MainLayout>
    );
};

export default CopyTrading;