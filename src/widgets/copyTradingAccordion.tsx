import React, {FC, useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Button,  Grid, Stack, useMediaQuery} from "@mui/material";
import NickName from "../shared/components/nickName";
import CustomAreaChart from "../entities/components/chart/customAreaChart";
import {chartData} from "../data/chart";
import CurrentValues from "../entities/components/currentValues";
import IconConnected from "../shared/assets/images/icons/iconConnected";
import HeaderChart from "../shared/components/headerChart";
import CopyTradingModal from "../entities/components/modal/copyTradingModal";
import {Link} from "react-router-dom";


interface IType {
    children?: any
}

const CopyTradingAccordion: FC<IType> = ({children}) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    const [expanded, setExpanded] = useState<string | false>('panel1');
    const [openModal, setOpenModal] = useState(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };
    const handleOpenModal = (event: React.SyntheticEvent) => {
        event.stopPropagation()
        setOpenModal(true)
    };

    return (
        <div>
            <Accordion
                sx={{p: `0 28px`, mb: 7}}
                expanded={mediaQuery ? expanded === 'panel1' : false}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Grid container spacing={10} columns={12} wrap="wrap" alignItems="center">
                        <Grid item xs={12} md={3}>
                            <NickName name="NICKNAME_NICKNAME" number="18050009" direction="row-reverse"
                                      justifyContent="flex-end"/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            {
                                (expanded !== 'panel1' || !mediaQuery) ?
                                    <CustomAreaChart
                                        height={64}
                                        data={chartData}
                                        dataArea={[{
                                            dataKey: "uv",
                                            stroke: "#6FCF97",
                                            fill: "#29312C"
                                        },]}/>
                                    : null
                            }
                        </Grid>

                        <Grid item xs={12} md={6} flexDirection="row" justifyContent="flex-end">
                            <Stack width='100%' direction={mediaQuery ?"row": "column"} alignItems="center"
                                   justifyContent="flex-end" spacing={7}>
                                <Stack
                                    className="subHeaders yellow"
                                    alignItems="center"
                                    justifyContent="center"
                                    sx={{
                                        width: 34,
                                        height: 34,
                                        border: ` 0.5px solid #3C3C3C`,
                                        borderRadius: `50%`,
                                        position: !mediaQuery ?'absolute':'static',
                                        right:14,
                                        top:14,
                                    }}
                                >10%</Stack>
                                {(expanded !== 'panel1' || !mediaQuery) ? <CurrentValues/> : null}
                                {
                                    (expanded === 'panel1' || !mediaQuery) ?
                                        <Button
                                            fullWidth={!mediaQuery}
                                            onClick={(e) => handleOpenModal(e)}
                                            variant="gardient"
                                            color="warning"
                                            startIcon={<IconConnected/>}
                                            sx={{ml: 'auto', mb: 7}}
                                        >
                                            Подключение
                                        </Button>
                                        : <IconConnected/>
                                }
                                {
                                    !mediaQuery &&
                                    <Button fullWidth={!mediaQuery} color="neutral" component={Link} to="/trader-dashboard">
                                        <span className="h2">Подробнее</span>
                                    </Button>
                                }
                            </Stack>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails sx={{mb: 7}}>
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
                                            <span className="subHeaders white-90">Начало торгов</span>
                                            <span className="subHeadersBold">24.12.2019</span>
                                        </Stack>
                                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                                            <span className="subHeaders white-90">Сделок за неделю</span>
                                            <span className="subHeadersBold">1 075</span>
                                        </Stack>
                                        <Stack flexWrap="wrap" direction="row" alignItems="center"
                                               justifyContent="space-between">
                                            <span className="subHeaders white-90">Время последней сделки:</span>
                                            <span className="subHeadersBold">2022-12-24 10:58:48</span>
                                        </Stack>
                                    </Stack>
                                    <Stack spacing={7}
                                           sx={{p: `14px`, border: `0.5px solid #3C3C3C`, borderRadius: 2.5}}>
                                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                                            <span className="subHeaders white-90">Начало торгов</span>
                                            <span className="subHeadersBold">24.12.2019</span>
                                        </Stack>
                                        <Stack flexWrap="wrap" direction="row" alignItems="center"
                                               justifyContent="space-between">
                                            <span className="subHeaders white-90">Сделок за неделю</span>
                                            <span className="subHeadersBold">1 075</span>
                                        </Stack>
                                        <Stack flexWrap="wrap" direction="row" alignItems="center"
                                               justifyContent="space-between">
                                            <span className="subHeaders white-90">Время последней сделки:</span>
                                            <span className="subHeadersBold">2022-12-24 10:58:48</span>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Button color="neutral" component={Link} to="/trader-dashboard">
                                    <span className="h2">Подробнее</span>
                                </Button>
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
            <CopyTradingModal openModal={openModal} closeModal={setOpenModal}/>
        </div>
    );
}

export default CopyTradingAccordion;