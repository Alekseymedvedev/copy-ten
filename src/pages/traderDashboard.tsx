import MainLayout from "../widgets/mainLayout";
import DashboardTabs from "../widgets/dashboardTabs";

import {useLocation} from "react-router-dom";
import {useGetHistoryQuery, useGetTraderQuery} from "../store/API/tradersUserApi";
import {
    useGetChartBalanceGainQuery, useGetChartBalanceQuery, useGetChartDayQuery,
    useGetChartDrawdownAndGainQuery, useGetChartDrawdownQuery,
    useGetChartHoursQuery, useGetChartMonthsQuery,
    useGetChartSymbolQuery
} from "../store/API/chartApi";
import React, {useState} from "react";
import {Skeleton} from "@mui/material";


const TraderDashboard = () => {
    const location = useLocation()
    const id = location?.pathname?.split('/').pop()

    const {data:dataTrader, isLoading:isLoadingTrader,} = useGetTraderQuery(id)
    const [page, setPage] = useState(1);
    const {data, isLoading, error} = useGetChartBalanceQuery({id:`trader/${id}`,url:'all'})
    const {data:dataBalanceGain, isLoading:isLoadingBalanceGain} = useGetChartBalanceGainQuery({id:`trader/${id}`,url:'all'})
    const {data:dataSymbol, isLoading:isLoadingSymbol} = useGetChartSymbolQuery({id:`trader/${id}`,url:'all'})
    const {data:dataChartDay, isLoading:isLoadingChartDay} = useGetChartDayQuery({id:`trader/${id}`,url:'all'})
    const {data:dataChartHours, isLoading:isLoadingChartHours} = useGetChartHoursQuery({id:`trader/${id}`,url:'all'})
    const {data:dataChartMonths, isLoading:isLoadingChartMonths} = useGetChartMonthsQuery({id:`trader/${id}`,url:'all'})
    const {data:dataChartDrawdown, isLoading:isLoadingChartDrawdown} = useGetChartDrawdownQuery({id:`trader/${id}`,url:'all'})
    const {data:dataChartDrawdownAndGain, isLoading:isLoadingChartDrawdownAndGain} = useGetChartDrawdownAndGainQuery({id:`trader/${id}`,url:'all'})
    const {data: dataHistory, isLoading:isLoadingHistory} = useGetHistoryQuery({id:`trader/${id}`,page})
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    return (
        <MainLayout isSelect heading={`Трейдер ${dataTrader?.data?.name}`}>
            {
                (
                    !isLoadingTrader  &&
                    !isLoading &&
                    !isLoadingBalanceGain &&
                    !isLoadingSymbol &&
                    !isLoadingChartDay &&
                    !isLoadingChartHours &&
                    !isLoadingChartMonths &&
                    !isLoadingChartDrawdown &&
                    !isLoadingChartDrawdownAndGain &&
                    !isLoadingHistory
                ) ?
                <DashboardTabs
                    traderDashboard
                    dataTrader={dataTrader?.data}
                    balanceChartData={data}
                    dataSymbol={dataSymbol}
                    isLoadingSymbol={isLoadingSymbol}
                    dataChartDay={dataChartDay}
                    dataChartHours={dataChartHours}
                    dataChartDrawdown={dataChartDrawdown}
                    dataBalanceGain={dataBalanceGain}
                    dataChartDrawdownAndGain={dataChartDrawdownAndGain}
                    dataChartMonths={dataChartMonths}
                    dataHistory={dataHistory}
                    isTrader
                    changePage={handleChangePage} page={page}
                />
                    :  <Skeleton variant="rounded" width={`100%`} height={433}/>
            }

        </MainLayout>
    );
};

export default TraderDashboard;