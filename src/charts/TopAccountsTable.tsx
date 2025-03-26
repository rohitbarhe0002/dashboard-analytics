import { TableProps } from '../types/type';
import React from 'react';


const TopAccountsTable: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="p-2 whitespace-nowrap">
                <div className={`font-semibold text-${index === 0 ? 'left' : 'center'}`}>
                  {column.header}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="p-2 whitespace-nowrap">
                  <div className={`text-${column.align || 'left'} ${column.className || ''}`}>
                    {column.render
                      ? column.render(row[column.accessor], row)
                      : row[column.accessor]}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopAccountsTable;
