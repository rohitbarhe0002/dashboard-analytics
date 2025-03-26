
import { chartAreaGradient } from '../charts/ChartjsConfig';
import { adjustColorOpacity, getCssVariable } from './Utils';
export const profitPulseChartData = {
    labels: [
        '12-01-2022', '01-01-2023', '02-01-2023',
        '03-01-2023', '04-01-2023', '05-01-2023',
        '06-01-2023', '07-01-2023', '08-01-2023',
        '09-01-2023', '10-01-2023', '11-01-2023',
        '12-01-2023', '01-01-2024', '02-01-2024',
        '03-01-2024', '04-01-2024', '05-01-2024',
        '06-01-2024', '07-01-2024', '08-01-2024',
        '09-01-2024', '10-01-2024', '11-01-2024',
        '12-01-2024', '01-01-2025',
    ],
    datasets: [
        {
            data: [
                540, 466, 540, 466, 385, 432, 334,
                334, 289, 289, 200, 289, 222, 289,
                289, 403, 554, 304, 289, 270, 134,
                270, 829, 344, 388, 364,
            ],
            fill: true,
            backgroundColor: function (context: any) {
                const chart = context.chart;
                const { ctx, chartArea } = chart;
                return chartAreaGradient(ctx, chartArea, [
                    { stop: 0, color: adjustColorOpacity('#16C47F', 0) },
                    { stop: 1, color: adjustColorOpacity('#16C47F', 0.2) }
                ]);
            },
            borderColor: '#16C47F',
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: '#16C47F',
            pointHoverBackgroundColor: '#16C47F',
            pointBorderWidth: 0,
            pointHoverBorderWidth: 0,
            clip: 20,
            tension: 0.2,
        },
        {
            data: [
                689, 562, 477, 477, 477, 477, 458,
                314, 430, 378, 430, 498, 642, 350,
                145, 145, 354, 260, 188, 188, 300,
                300, 282, 364, 660, 554,
            ],
            borderColor: adjustColorOpacity('#16C47F', 0.4),
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: adjustColorOpacity('#16C47F', 0.4),
            pointHoverBackgroundColor: adjustColorOpacity('#16C47F', 0.4),
            pointBorderWidth: 0,
            pointHoverBorderWidth: 0,
            clip: 20,
            tension: 0.2,
        },
    ],
};
export const topCountriesChartData = {
    labels: ['United States', 'Italy', 'Other'],
    datasets: [
        {
            label: 'Top Countries',
            data: [
                35, 30, 35,
            ],
            backgroundColor: [
                '#16C47F',
                getCssVariable('--color-sky-500'),
                getCssVariable('--color-violet-800'),
            ],
            hoverBackgroundColor: [
                '#13A66B',
                getCssVariable('--color-sky-600'),
                getCssVariable('--color-violet-900'),
            ],
            borderWidth: 0,
        },
    ],
};
export const salesRefundsChartData = {
    labels: [
        '12-01-2022', '01-01-2023', '02-01-2023',
        '03-01-2023', '04-01-2023', '05-01-2023',
    ],
    datasets: [
        {
            label: 'Stack 1',
            data: [
                6200, 9200, 6600, 8800, 5200, 9200,
            ],
            backgroundColor: '#16C47F',
            hoverBackgroundColor: '#13A66B',
            barPercentage: 0.7,
            categoryPercentage: 0.7,
            borderRadius: 4,
        },
        {
            label: 'Stack 2',
            data: [
                -4000, -2600, -5350, -4000, -7500, -2000,
            ],
            backgroundColor: '#6A5ACD',
            hoverBackgroundColor: '#5A4CB8',
            barPercentage: 0.7,
            categoryPercentage: 0.7,
            borderRadius: 4,
        },
    ],
};
export const saleOvetTimeChartData = {
    labels: [
        '12-01-2022',
        '01-01-2023',
        '02-01-2023',
        '03-01-2023',
        '04-01-2023',
        '05-01-2023',
        '06-01-2023',
        '07-01-2023',
        '08-01-2023',
        '09-01-2023',
        '10-01-2023',
        '11-01-2023',
        '12-01-2023',
        '01-01-2024',
        '02-01-2024',
        '03-01-2024',
        '04-01-2024',
        '05-01-2024',
        '06-01-2024',
        '07-01-2024',
        '08-01-2024',
        '09-01-2024',
        '10-01-2024',
        '11-01-2024',
        '12-01-2024',
        '01-01-2025',
    ],
    datasets: [
        {
            label: 'Current',
            data: [73, 64, 73, 69, 104, 104, 164, 164, 120, 120, 120, 148, 142, 104, 122, 110, 104, 152, 166, 233, 268, 252, 284, 284, 333, 323],
            borderColor: getCssVariable('--color-violet-500'),
            fill: false,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: getCssVariable('--color-violet-500'),
            pointHoverBackgroundColor: getCssVariable('--color-violet-500'),
            pointBorderWidth: 0,
            pointHoverBorderWidth: 0,
            clip: 20,
            tension: 0.2,
        },
        {
            label: 'Previous',
            data: [184, 86, 42, 378, 42, 243, 38, 120, 0, 0, 42, 0, 84, 0, 276, 0, 124, 42, 124, 88, 88, 215, 156, 88, 124, 64],
            borderColor: getCssVariable('--color-sky-500'),
            fill: false,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: getCssVariable('--color-sky-500'),
            pointHoverBackgroundColor: getCssVariable('--color-sky-500'),
            pointBorderWidth: 0,
            pointHoverBorderWidth: 0,
            clip: 20,
            tension: 0.2,
        },
        {
            label: 'Average',
            data: [122, 170, 192, 86, 102, 124, 115, 115, 56, 104, 0, 72, 208, 186, 223, 188, 114, 162, 200, 150, 118, 118, 76, 122, 230, 268],
            borderColor: getCssVariable('--color-green-500'),
            fill: false,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: getCssVariable('--color-green-500'),
            pointHoverBackgroundColor: getCssVariable('--color-green-500'),
            pointBorderWidth: 0,
            pointHoverBorderWidth: 0,
            clip: 20,
            tension: 0.2,
        },
    ],
};
export const DirectVsIndirectChartData = {
    labels: [
        '12-01-2022', '01-01-2023', '02-01-2023',
        '03-01-2023', '04-01-2023', '05-01-2023',
    ],
    datasets: [
        {
            label: 'Direct',
            data: [
                800, 1600, 900, 1300, 1950, 1700,
            ],
            backgroundColor: getCssVariable('--color-sky-500'),
            hoverBackgroundColor: getCssVariable('--color-sky-600'),
            barPercentage: 0.7,
            categoryPercentage: 0.7,
            borderRadius: 4,
        },
        {
            label: 'Indirect',
            data: [
                4900, 2600, 5350, 4800, 5200, 4800,
            ],
            backgroundColor: '#16C47F',
            hoverBackgroundColor: '#13A66B',
            barPercentage: 0.7,
            categoryPercentage: 0.7,
            borderRadius: 4,
        },
    ],
};
export const progressChartData = [
    { label: 'Revenue', value: 78, color: '#16C47F' },
    { label: 'Sales', value: 65, color: '#13A66B' },
    { label: 'Customers', value: 82, color: '#0D8C59' }
];

export const scatterChartData = {
    datasets: [
        {
            label: 'Customer Satisfaction',
            data: [
                { x: 120, y: 85 },
                { x: 135, y: 92 },
                { x: 155, y: 78 },
                { x: 175, y: 88 },
                { x: 195, y: 81 },
                { x: 215, y: 94 },
                { x: 235, y: 83 },
                { x: 255, y: 90 },
                { x: 275, y: 79 },
                { x: 295, y: 87 },
                { x: 310, y: 93 },
                { x: 330, y: 84 }
            ],
            backgroundColor: '#16C47F',
            pointRadius: 6,
            pointHoverRadius: 8
        },
        {
            label: 'Customer Spending',
            data: [
                { x: 45, y: 65 },
                { x: 60, y: 73 },
                { x: 75, y: 62 },
                { x: 90, y: 78 },
                { x: 105, y: 68 },
                { x: 120, y: 75 },
                { x: 135, y: 64 },
                { x: 150, y: 79 },
                { x: 165, y: 71 },
                { x: 180, y: 67 },
                { x: 195, y: 76 },
                { x: 210, y: 70 }
            ],
            backgroundColor: getCssVariable('--color-sky-500'),
            pointRadius: 6,
            pointHoverRadius: 8
        }
    ]
};


export const customerList = {
    columns: [
        { header: 'Name', accessor: 'name', align: 'left' },
        { header: 'Email', accessor: 'email', align: 'center' },
        { header: 'Spent', accessor: 'spent', align: 'center', className: 'text-green-500' },
        { header: 'Country', accessor: 'location', align: 'center', className: 'text-lg' }
    ],
    data: [
        { name: 'Alex Shatov', email: 'alexshatov@gmail.com', location: '🇺🇸', spent: '$2,890.66' },
        { name: 'Philip Harbach', email: 'philip.h@gmail.com', location: '🇩🇪', spent: '$2,767.04' },
        { name: 'Mirko Fisuk', email: 'mirkofisuk@gmail.com', location: '🇫🇷', spent: '$2,996.00' },
        { name: 'Olga Semklo', email: 'olga.s@cool.design', location: '🇮🇹', spent: '$1,220.66' },
        { name: 'Burak Long', email: 'longburak@gmail.com', location: '🇬🇧', spent: '$1,890.66' },
        { name: 'White Siku', email: 'sikuWhite@gmail.com', location: '🇺🇸', spent: '$3,190.00' }
    ]
}
export const topAccountsList =
{
    columns: [
        { header: 'Source', accessor: 'name', align: 'left' },
        { header: 'Visitors', accessor: 'visitors', align: 'center' },
        { header: 'Revenues', accessor: 'revenues', align: 'center', className: 'text-green-500' },
        { header: 'Sales', accessor: 'sales', align: 'center' },
        { header: 'Conversion', accessor: 'conversion', align: 'center', className: 'text-sky-500' }
    ],
    data: [
        { name: 'John Smith', visitors: '2.4K', revenues: '$3,877', sales: '267', conversion: '4.7%' },
        { name: 'Sarah Johnson', visitors: '2.2K', revenues: '$3,426', sales: '249', conversion: '4.4%' },
        { name: 'Michael Brown', visitors: '2.0K', revenues: '$2,444', sales: '224', conversion: '4.2%' },
        { name: 'Emily Davis', visitors: '1.9K', revenues: '$2,236', sales: '220', conversion: '4.2%' },
        { name: 'Robert Wilson', visitors: '1.7K', revenues: '$2,034', sales: '204', conversion: '3.9%' },
        { name: 'John Doe', visitors: '1.5K', revenues: '$3,360', sales: '330', conversion: '9.2%' },
        { name: 'Max Well', visitors: '1.4K', revenues: '$1,134', sales: '104', conversion: '2.9%' }
    ]
}
