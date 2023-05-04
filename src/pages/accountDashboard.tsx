import MainLayout from "../widgets/mainLayout";
import DashboardTabs from "../widgets/dashboardTabs";
import {useGetAccountDashboardQuery} from "../store/API/userApi";
import {useLocation} from "react-router-dom";
import {
    useGetChartBalanceGainQuery,
    useGetChartBalanceQuery,
    useGetChartDayQuery,
    useGetChartDrawdownAndGainQuery,
    useGetChartDrawdownQuery,
    useGetChartHoursQuery,
    useGetChartMonthsQuery,
    useGetChartSymbolQuery, useGetChartTradersQuery
} from "../store/API/chartApi";
import {useState} from "react";
import {useGetHistoryQuery} from "../store/API/tradersUserApi";


const AccountDashboard = () => {
    const location = useLocation()
    const id = location?.pathname?.split('/').pop()

    const [balanceChartUrl, setBalanceChartUrl] = useState('all')
    const [balanceGainChartUrl, setBalanceGainChartUrl] = useState('all')
    const [tradersChartUrl, setTradersChartUrl] = useState('all')
    const [dayChartUrl, setDayChartUrl] = useState('all')
    const [hoursChartUrl, setHoursChartUrl] = useState('all')
    const [drawdownChartUrl, setDrawdownChartUrl] = useState('all')
    const [drawdownAndGainChartUrl, setDrawdownAndGainChartUrl] = useState('all')


    const {data: dataAccount, isLoading: isLoadingAccount, error: errorAccount} = useGetAccountDashboardQuery(id)

    const {data, isLoading, error} = useGetChartBalanceQuery({id: `account/${id}`, url: balanceChartUrl})
    const {data: dataTradersChart} = useGetChartTradersQuery({id: `account/${id}`, url: balanceChartUrl})
    const {data: dataBalanceGain, isLoading: isLoadingBalanceGain} = useGetChartBalanceGainQuery({
        id: `account/${id}`,
        url: balanceGainChartUrl
    })
    const {data: dataSymbol, isLoading: isLoadingSymbol} = useGetChartSymbolQuery({id: `account/${id}`, url: 'all'})
    const {data: dataChartDay, isLoading: isLoadingChartDay} = useGetChartDayQuery({
        id: `account/${id}`,
        url: dayChartUrl
    })
    const {data: dataChartHours, isLoading: isLoadingChartHours} = useGetChartHoursQuery({
        id: `account/${id}`,
        url: hoursChartUrl
    })
    const {data: dataChartMonths, isLoading: isLoadingChartMonths} = useGetChartMonthsQuery({
        id: `account/${id}`,
        url: 'all'
    })
    const {data: dataChartDrawdown, isLoading: isLoadingChartDrawdown} = useGetChartDrawdownQuery({
        id: `account/${id}`,
        url: drawdownChartUrl
    })
    const {
        data: dataChartDrawdownAndGain,
        isLoading: isLoadingChartDrawdownAndGain
    } = useGetChartDrawdownAndGainQuery({id: `account/${id}`, url: drawdownAndGainChartUrl})
    const {data: dataHistory} = useGetHistoryQuery(`account/${id}`)

    return (
        <MainLayout isLink={true} heading="Дашборд" accountNumber={dataAccount?.data?.login}
                    typeAccount={dataAccount?.data?.product?.product_data?.title}>
            {
                dataAccount &&
                <DashboardTabs
                    dataDashboard={dataAccount?.data}
                    balanceChartData={data}
                    dataTradersChart={dataTradersChart}
                    dataSymbol={dataSymbol}
                    isLoadingSymbol={isLoadingSymbol}
                    dataChartDay={dataChartDay}
                    dataChartHours={dataChartHours}
                    dataChartDrawdown={dataChartDrawdown}
                    dataBalanceGain={dataBalanceGain}
                    dataChartDrawdownAndGain={dataChartDrawdownAndGain}
                    dataChartMonths={dataChartMonths}
                    dataHistory={dataHistory}

                    balanceChartUrl={setBalanceChartUrl}
                    tradersChartUrl={tradersChartUrl}
                    balanceGainChartUrl={setBalanceGainChartUrl}
                    dayChartUrl={setDayChartUrl}
                    hoursChartUrl={setHoursChartUrl}
                    drawdownChartUrl={setDrawdownChartUrl}
                    drawdownAndGainChartUrl={setDrawdownAndGainChartUrl}
                />
            }

        </MainLayout>
    );
};

export default AccountDashboard;