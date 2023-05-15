import React, {FC, useState} from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Grid,
    Pagination, Skeleton,
    Stack,
    useMediaQuery
} from "@mui/material";
import NickName from "../shared/components/nickName";
import CustomAreaChart from "../entities/components/chart/customAreaChart";
import {chartData} from "../data/chart";
import CurrentValues from "../entities/components/currentValues";
import IconConnected from "../shared/assets/images/icons/iconConnected";
import HeaderChart from "../shared/components/headerChart";
import CopyTradingModalSettings from "../entities/components/modal/copyTradingModalSettings";
import {Link} from "react-router-dom";
import {useGetAllUserTradersQuery} from "../store/API/tradersUserApi";
import imgStrategyGrid from "../shared/assets/images/strategy.png";
import imgStrategyStopLoss from "../shared/assets/images/strategys-stop-loss.png";
import {useAppSelector} from "../hooks/useRedux";


interface IType {
    children?: any
}

const CopyTradingAccordion: FC<IType> = ({children}) => {
    const mediaQuery = useMediaQuery('(min-width:980px)');
    const [page, setPage] = useState(1);
    const {data, isLoading, error} = useGetAllUserTradersQuery(page)
    const {accountId} = useAppSelector(state => state.accountIdReducer)
    const [expanded, setExpanded] = useState<string | false>('panel1');
    const [openModal, setOpenModal] = useState(false);
    const [idTrader, setIdTrader] = useState('');
    console.log(accountId)
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };
    const handleOpenModal = (event: React.SyntheticEvent, id: any) => {
        event.stopPropagation()
        setOpenModal(true)
        setIdTrader(id)

    };
    if (isLoading) {
        return (
            <Skeleton variant="rounded" width={`100%`} height={315}/>
        )
    }
    return (
        <>
            {
                data &&
                data?.data?.map((item: any, index: any) =>
                    <Accordion
                        key={item.id}
                        sx={{
                            mb: 7,
                            "@media (min-width:980px)": {
                                p: `7px  28px`,
                            }
                        }}
                        expanded={mediaQuery ? expanded === `panel${index + 1}` : false}
                        onChange={handleChange(`panel${index + 1}`)}
                    >
                        <AccordionSummary>
                            <Grid container spacing={10} columns={12} wrap="wrap" alignItems="center">
                                <Grid item xs={12} md={2}>
                                    <NickName
                                        notMb
                                        name={item.name}
                                        number={item.id}
                                        avatar={item.strategy === 'grid' ? imgStrategyGrid : imgStrategyStopLoss}
                                        direction="row-reverse"
                                        justifyContent="flex-end"/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    {
                                        (expanded !== `panel${index + 1}` || !mediaQuery) ?
                                            <CustomAreaChart height={52} data={item.graph}/>
                                            : null
                                    }
                                </Grid>

                                <Grid item xs={12} md={7} flexDirection="row" justifyContent="flex-end">
                                    <Stack width='100%' direction={mediaQuery ? "row" : "column"} alignItems="center"
                                           justifyContent="flex-end" spacing={7}>

                                        {
                                            (expanded !== `panel${index + 1}` || !mediaQuery) &&
                                            <CurrentValues
                                                dropdown={item?.stats?.dropdown}
                                                gainAll={item?.stats?.gain?.all}
                                                gainCurrentMonth={item?.stats?.gain?.current_month}
                                                balance={item?.stats?.balance}
                                                depositLoad={item?.deposit_load?.for_forex_accounts[accountId]}
                                            />
                                        }
                                        {
                                            (expanded === `panel${index + 1}` || !mediaQuery) ?
                                                <Button
                                                    fullWidth={!mediaQuery}
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        if (item.subscribed_forex_accounts.find((item: any) => item.forex_account.id === accountId)) {
                                                            return
                                                        } else {
                                                            handleOpenModal(e, item.id)
                                                        }
                                                    }}
                                                    variant="gardient"
                                                    color={item.subscribed_forex_accounts.find((item: any) => item.forex_account.id === accountId) ? "success" : "warning"}
                                                    startIcon={<IconConnected
                                                        connected={item.subscribed_forex_accounts.find((item: any) => item.forex_account.id === accountId)}/>}
                                                    sx={{ml: 'auto', mb: 7}}
                                                >
                                                    {item.subscribed_forex_accounts.find((item: any) => item.forex_account.id === accountId) ? "Подключено" : "Подключение"}
                                                </Button>

                                                : <IconConnected
                                                    connected={item.subscribed_forex_accounts.find((item: any) => item.forex_account.id === accountId)}/>
                                        }
                                        {
                                            !mediaQuery &&
                                            <Button fullWidth={!mediaQuery} color="neutral" component={Link}
                                                    to={`/trader-dashboard/${item.id}`}>
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
                                        sx={{
                                            height: '100%',
                                            border: `0.5px solid #3C3C3C`,
                                            borderRadius: 2.5,
                                            overflow: 'hidden'
                                        }}
                                        justifyContent="space-between"
                                    >
                                        <Stack spacing={7} p={7}>
                                            <HeaderChart title="Рост баланса" number="+22.49%"/>
                                        </Stack>
                                        <CustomAreaChart height={64} data={item.graph}/>
                                    </Stack>
                                </Grid>
                                <Grid item xs={8}>
                                    <Stack spacing={7}>
                                        <Stack direction="row" spacing={7}>
                                            <Stack spacing={7}
                                                   sx={{
                                                       width: `100%`,
                                                       p: `14px`,
                                                       border: `0.5px solid #3C3C3C`,
                                                       borderRadius: 2.5
                                                   }}>
                                                <Stack direction="row" alignItems="center"
                                                       justifyContent="space-between">
                                                    <span className="subHeaders white-90">Начало торгов</span>
                                                    <span
                                                        className="subHeadersBold">{item.stats.start_trading_at}</span>
                                                </Stack>
                                                <Stack direction="row" alignItems="center"
                                                       justifyContent="space-between">
                                                    <span className="subHeaders white-90">Сделок за неделю</span>
                                                    <span className="subHeadersBold">{item.stats.deals_per_week}</span>
                                                </Stack>
                                                <Stack flexWrap="wrap" direction="row" alignItems="center"
                                                       justifyContent="space-between">
                                                    <span className="subHeaders white-90">Время последней сделки:</span>
                                                    <span className="subHeadersBold">{item.stats.last_deal_at}</span>
                                                </Stack>
                                            </Stack>
                                            <Stack spacing={7}
                                                   sx={{
                                                       width: `100%`,
                                                       p: `14px`,
                                                       border: `0.5px solid #3C3C3C`,
                                                       borderRadius: 2.5
                                                   }}>
                                                <Stack direction="row" alignItems="center"
                                                       justifyContent="space-between">
                                                    <span className="subHeaders white-90">Всего сделок</span>
                                                    <span className="subHeadersBold">{item.stats.deals_count}</span>
                                                </Stack>
                                                <Stack flexWrap="wrap" direction="row" alignItems="center"
                                                       justifyContent="space-between">
                                                    <span className="subHeaders white-90">Доходные сделки</span>
                                                    <span
                                                        className="subHeadersBold green">{item.stats.profitable_deals_count}</span>
                                                </Stack>
                                                <Stack flexWrap="wrap" direction="row" alignItems="center"
                                                       justifyContent="space-between">
                                                    <span className="subHeaders white-90">Убыточные сделки</span>
                                                    <span
                                                        className="subHeadersBold red">{item.stats.losing_deals_count}</span>
                                                </Stack>
                                                <Stack flexWrap="wrap" direction="row" alignItems="center"
                                                       justifyContent="space-between">
                                                    <span className="subHeaders white-90">Средняя прибыль PIP</span>
                                                    <span
                                                        className="subHeadersBold green">{item.stats.median_profit_in_pip}</span>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                        <Button color="neutral" component={Link} to={`/trader-dashboard/${item.id}`}>
                                            <span className="h2">Подробнее</span>
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                )
            }
            {
                data?.meta?.pagination?.total_pages > 1 &&
                <Pagination
                    page={page}
                    onChange={handleChangePage}
                    color="primary"
                    count={data?.meta?.pagination?.total_pages}
                    variant="outlined"
                    shape="rounded"
                    sx={{mr: 'auto'}}
                />
            }
            {
                openModal &&
                <CopyTradingModalSettings skip idTraderSubscribe={idTrader} idTrader={idTrader} idAccount={accountId}
                                          openModal={openModal}
                                          closeModal={setOpenModal}/>
            }

        </>
    );
}

export default CopyTradingAccordion;