import MainLayout from "../widgets/mainLayout";
import TariffItem from "../entities/components/tariffItem";
import MyProductsList from "../widgets/myProductsList";
import {Stack} from "@mui/material";


const Tariff = () => {
    return (
        <MainLayout>
            <Stack spacing={7}>
                <TariffItem/>
                <MyProductsList/>
            </Stack>
        </MainLayout>
    );
};

export default Tariff;