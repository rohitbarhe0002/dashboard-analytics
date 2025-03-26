import { LowerSectionProps } from '../../types/type';
import React from 'react';



const LowerSection: React.FC<LowerSectionProps> = ({ 
  title, 
  subtitle, 
  component: Component,
  componentProps,
  className = "col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-xs rounded-xl"
}) => {
  return (
    <div className={className}>
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
        {subtitle && <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mt-1">{subtitle}</div>}
      </header>
      <div className="p-3">
        <Component {...componentProps} />
      </div>
    </div>
  );
}

export default LowerSection;
