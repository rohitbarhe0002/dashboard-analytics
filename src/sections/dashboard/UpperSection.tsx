import { DashboardCardProps } from '../../types/type';
import React from 'react';

const DashboardCard: React.FC<DashboardCardProps> = ({ title, amount, percentageChange,  component: Component, subtitle, componentProps }) => {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h2>
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">{subtitle}</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">{amount}</div>
          <div className="text-sm font-medium text-[#16C47F] px-1.5 bg-[#16C47F]/20 rounded-full">{percentageChange}</div>
        </div>
      </div>
      
      <div className="grow px-5 pt-3">
        <div className="space-y-4">
        <Component {...componentProps}/>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
