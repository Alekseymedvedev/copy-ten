import MainLayout from "../widgets/mainLayout";
import TarrifItem from "../entities/components/tarrifItem";
import MyProductsList from "../widgets/myProductsList";
import {Stack} from "@mui/material";


const Tariff = () => {
    return (
        <MainLayout>
            <Stack spacing={7}>
                <TarrifItem/>
                <MyProductsList/>
            </Stack>
        </MainLayout>
    );
};

export default Tariff;