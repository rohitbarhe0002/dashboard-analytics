import { BarChartCardProps } from "../../types/type";
import React from "react";

const BarChartCard: React.FC<BarChartCardProps> = ({ title, summary,  component: Component,
    componentProps }) => {
      return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
      </header>

    
      {summary && (
  <div className="px-5 py-3">
    <div className="flex items-start">
      <div 
        className={`font-bold text-gray-800 dark:text-gray-100 mr-2 ${
          summary?.value === "Spending vs. Satisfaction" ? "text-xl" : "text-3xl"
        }`}
      >
        {summary?.value}
      </div>
      <div
        className={`text-sm font-medium px-1.5 rounded-full ${
          summary?.isNegative ? "text-red-700 bg-red-500/20" : "text-green-700 bg-green-500/20"
        }`}
      >
        {summary?.percentage}
      </div>
    </div>
  </div>
)}

      <div className="grow">
      <Component {...componentProps}/>
      </div>
    </div>
  );
};

export default BarChartCard;
