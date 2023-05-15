import MainLayout from "../widgets/mainLayout";
import Paper from "@mui/material/Paper";
import {Button, Stack} from "@mui/material";
import IconTg from "../shared/assets/images/icons/iconTg";
import {Link} from "react-router-dom";


const Support = () => {
    return (
        <MainLayout>
            <Paper>
                <Stack spacing={21}>
                    <span className="h2 white-90">Чтобы получить техническую помощь или задать вопрос,<br/> напишите оператору в Телеграмм </span>
                    <Button component={Link} to={`/`} variant="contained" color="info" startIcon={<IconTg/>} sx={{height:48}}>Тех.поддержка</Button>
                </Stack>
            </Paper>
        </MainLayout>
    )
        ;
};

export default Support;