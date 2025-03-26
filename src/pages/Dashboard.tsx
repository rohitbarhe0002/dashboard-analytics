import React from "react";
import UpperSection from "../sections/dashboard/UpperSection";
import DashboardCard from "../sections/dashboard/DashboardCard";
import LowerSection from "../sections/dashboard/LowerSection";
import TopAccountsTable from "../charts/TopAccountsTable";
import MiddileSection from "../sections/dashboard/MiddileSection";
import { profitPulseChartData, salesRefundsChartData, saleOvetTimeChartData, DirectVsIndirectChartData, topCountriesChartData, scatterChartData, customerList, topAccountsList } from "../utils/constants";
import Chart from "../charts/Chart";
import Layout from "../components/Layout";
import RealTimeChart from "../charts/RealTimeChart";

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="py-8 px-6">
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
              Dashboard
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <UpperSection title={"Core Performance"} amount={"$32,590"} percentageChange={"+35%"} component={Chart} componentProps={{ type: 'progress-bar', data: profitPulseChartData, width: 389, height: 128 }} subtitle={"sales"} />
          <UpperSection title={"Profit Pulse"} amount={"$7,875"} percentageChange={"+42%"} component={Chart} componentProps={{ type: 'line-1', data: profitPulseChartData, width: 389, height: 128 }} subtitle={"sales"} />
          <UpperSection title={"Pinnacle Insights"} component={Chart} componentProps={{ type: 'progress-doughnut' }} subtitle={"Sales Performance"} />

          <RealTimeChart />

          <MiddileSection title="Direct VS Indirect" component={Chart} componentProps={{ type: 'bar-1', data: DirectVsIndirectChartData, width: 595, height: 248 }} />
          <MiddileSection title="Sales VS Refunds" summary={{
            value: "+$6,796",
            percentage: "-34%",
            isNegative: true
          }} component={Chart} componentProps={{ type: 'bar-2', data: salesRefundsChartData, width: 595, height: 248 }} />
          <MiddileSection title="Sales Over Time (all stores)" component={Chart} componentProps={{ type: 'line-2', data: saleOvetTimeChartData, width: 595, height: 248 }} />

          <LowerSection title="Top Accounts" component={TopAccountsTable} componentProps={topAccountsList} />
          <LowerSection title="Top Countries" className='flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl' component={Chart} componentProps={{ type: 'doughnut', data: topCountriesChartData, width: 389, height: 260 }} />
          <LowerSection title="Customers" className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl" component={TopAccountsTable} componentProps={customerList} />

          <MiddileSection title="Customer Insights" summary={{
            value: "Spending vs. Satisfaction",
            percentage: "+15%",
            isNegative: false
          }} component={Chart} componentProps={{ type: 'scatter', data: scatterChartData, width: 595, height: 248 }} />

          <LowerSection className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl" title="Recent Activity" component={DashboardCard} componentProps={{ type: 'activity' }} />
          <LowerSection className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl" title="Income/Expenses" component={DashboardCard} componentProps={{ type: 'expense' }} />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
