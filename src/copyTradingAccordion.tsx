import React, {FC, useState} from 'react';


import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, {AccordionProps} from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Accordion, AccordionDetails, AccordionSummary, Button, Grid, Stack} from "@mui/material";
import NickName from "./shared/components/nickName";
import CustomAreaChart from "./entities/components/chart/customAreaChart";
import {chartData} from "./data/chart";
import CurrentValues from "./entities/components/currentValues";
import IconConnected from "./shared/assets/images/icons/iconConnected";
import HeaderChart from "./shared/components/headerChart";
import Chart from "./entities/components/chart/chart";

// const Accordion = styled((props: AccordionProps) => (
//     <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//     border: `1px solid ${theme.palette.divider}`,
//     '&:not(:last-child)': {
//         borderBottom: 0,
//     },
//     '&:before': {
//         display: 'none',
//     },
// }));
//
// const AccordionSummary = styled((props: AccordionSummaryProps) => (
//     <MuiAccordionSummary
//         expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//         {...props}
//     />
// ))(({ theme }) => ({
//     backgroundColor:
//         theme.palette.mode === 'dark'
//             ? 'rgba(255, 255, 255, .05)'
//             : 'rgba(0, 0, 0, .03)',
//     flexDirection: 'row-reverse',
//     '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//         transform: 'rotate(90deg)',
//     },
//     '& .MuiAccordionSummary-content': {
//         marginLeft: theme.spacing(1),
//     },
// }));
//
// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//     padding: theme.spacing(2),
//     borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));

interface IType {
    children?: any
}

const CopyTradingAccordion: FC<IType> = ({children}) => {
    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div>
            <Accordion
                sx={{p: `0 28px`, }}
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Grid container spacing={10} columns={12} wrap="wrap" alignItems="center">
                        <Grid item xs={3}>
                            <NickName name="NICKNAME_NICKNAME" number="18050009" direction="row-reverse"/>
                        </Grid>
                        <Grid item xs={5}>
                            {
                                expanded ==='panel1'?
                                    null
                                    : <CustomAreaChart height={64} data={chartData}
                                                       dataArea={[{
                                                           dataKey: "uv",
                                                           stroke: "#6FCF97",
                                                           fill: "#29312C"
                                                       },]}/>
                            }

                        </Grid>
                        <Grid item xs={4} flexDirection="row">
                            {
                                expanded ==='panel1' ?
                                    null
                                    :
                                    <Stack width='100%' direction="row" alignItems="center" justifyContent="space-between">
                                        <CurrentValues/>
                                        <IconConnected/>
                                    </Stack>
                            }


                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={10} columns={12} wrap="wrap">
                        <Grid item xs={4}>
                            <Stack
                                spacing={7}
                                sx={{height: '100%', border: `0.5px solid #3C3C3C`, borderRadius: 2.5}}
                                justifyContent="space-between"
                            >
                                <Stack spacing={7} p={7}>
                                    <HeaderChart title="Рост баланса" number="+22.49%"/>
                                </Stack>
                                <CustomAreaChart height={64} data={chartData}
                                                 dataArea={[{dataKey: "uv", stroke: "#6FCF97", fill: "#29312C"},]}/>
                            </Stack>

                        </Grid>
                        <Grid item xs={8}>
                            <Stack spacing={7}>
                                <Stack direction="row" spacing={7}>
                                    <Stack spacing={7}
                                           sx={{p: `14px`, border: `0.5px solid #3C3C3C`, borderRadius: 2.5}}>
                                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                                            <span className="white-90">Начало торгов</span>
                                            <span className="subHeadersBold">24.12.2019</span>
                                        </Stack>
                                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                                            <span className="white-90">Сделок за неделю</span>
                                            <span className="subHeadersBold">1 075</span>
                                        </Stack>
                                        <Stack flexWrap="wrap" direction="row" alignItems="center"
                                               justifyContent="space-between">
                                            <span className="white-90">Время последней сделки:</span>
                                            <span className="subHeadersBold">2022-12-24 10:58:48</span>
                                        </Stack>
                                    </Stack>
                                    <Stack spacing={7}
                                           sx={{p: `14px`, border: `0.5px solid #3C3C3C`, borderRadius: 2.5}}>
                                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                                            <span className="white-90">Начало торгов</span>
                                            <span className="subHeadersBold">24.12.2019</span>
                                        </Stack>
                                        <Stack flexWrap="wrap" direction="row" alignItems="center"
                                               justifyContent="space-between">
                                            <span className="white-90">Сделок за неделю</span>
                                            <span className="subHeadersBold">1 075</span>
                                        </Stack>
                                        <Stack flexWrap="wrap" direction="row" alignItems="center"
                                               justifyContent="space-between">
                                            <span className="white-90">Время последней сделки:</span>
                                            <span className="subHeadersBold">2022-12-24 10:58:48</span>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Button className="h1" color="neutral">Подробнее</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default CopyTradingAccordion;