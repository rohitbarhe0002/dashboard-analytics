import React, { useRef, useEffect, useState } from 'react';
import { useThemeProvider } from '../utils/ThemeContext';

import { chartColors, chartAreaGradient } from './ChartjsConfig';
import {
  Chart as ChartJS,
  LineController, LineElement, Filler,
  BarController, BarElement,
  DoughnutController, ArcElement,
  ScatterController,
  PointElement, LinearScale, TimeScale, Tooltip, Legend,
  ChartData, ChartOptions, ChartArea,
} from 'chart.js';
import 'chartjs-adapter-moment';

import { formatValue, formatThousands, adjustColorOpacity, getCssVariable } from '../utils/Utils';
import { progressChartData } from '../utils/constants';
import { ChartType, ChartProps } from '../types/type';

ChartJS.register(
  LineController, LineElement, Filler,
  BarController, BarElement,
  DoughnutController, ArcElement,
  ScatterController,
  PointElement, LinearScale, TimeScale, Tooltip, Legend
);



const Chart: React.FC<ChartProps> = ({
  type,
  data,
  width,
  height,
  className = ''
}) => {
  const [chart, setChart] = useState<ChartJS | null>(null);
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const legend = useRef<HTMLUListElement | null>(null);
  const chartValue = useRef<HTMLSpanElement | null>(null);
  const chartDeviation = useRef<HTMLDivElement | null>(null);
  const { currentTheme } = useThemeProvider();
  const darkMode = currentTheme === 'dark';
  const { textColor, gridColor, tooltipTitleColor, tooltipBodyColor, tooltipBgColor, tooltipBorderColor, backdropColor } = chartColors;

  const [percentage, setPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(0);
  const targetValue = 18436;
  const startTime = useRef<any>(null);

  if (type === 'progress-bar') {
    return (
      <div className={className}>
        <div className="space-y-4">
          {progressChartData.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.value}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full transition-all duration-500 ease-out" 
                  style={{ 
                    width: `${item.value}%`, 
                    backgroundColor: item.color 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'progress-doughnut') {
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          startTime.current = Date.now();
          requestAnimationFrame(animateValue);
        }
      }, { threshold: 0.1 });
      
      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
      
      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, []);
  
    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          if (percentage < 92) {
            setPercentage(prev => prev + 1);
          }
        }, 20);
        return () => clearTimeout(timer);
      }
    }, [percentage, isVisible]);
  
    const animateValue = () => {
      if (!startTime.current) return;
      
      const elapsed = Date.now() - startTime.current;
      const duration = 2000;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = (progress: number) => 1 - Math.pow(1 - progress, 4);
      const easedProgress = easeOutQuart(progress);
      
      setCurrentValue(Math.floor(easedProgress * targetValue));
      
      if (progress < 1) {
        requestAnimationFrame(animateValue);
      }
    };
  
    const radius = 55;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className={className}>
        <div ref={cardRef} className="grow flex flex-col items-center justify-center p-2">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 160 160">
              <circle 
                cx="80" 
                cy="80" 
                r={radius} 
                stroke="#E2F6EE" 
                strokeWidth="10"
                fill="none" 
              />
              
              <circle 
                cx="80" 
                cy="80" 
                r={radius} 
                stroke="#16C47F" 
                strokeWidth="10"
                fill="none" 
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={isVisible ? offset : circumference}
                transform="rotate(-90 80 80)"
                style={{ transition: 'stroke-dashoffset 1s ease-out' }}
              />
              
              <text 
                x="80" 
                y="75" 
                textAnchor="middle" 
                fontSize="22"
                fontWeight="bold" 
                fill="#16C47F"
              >
                {percentage}%
              </text>
              
              <text 
                x="80" 
                y="95" 
                textAnchor="middle" 
                fontSize="11"
                fill="#6B7280"
              >
                Completion
              </text>
            </svg>
          </div>
          
          <div className="mt-2 text-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
              ${currentValue.toLocaleString()}
            </div>
            <div className="text-xs font-medium text-red-700 px-2 py-0.5 bg-red-500/20 rounded-full inline-block">
              -14% from last month
            </div>
            
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="text-center">
                <div className="text-base font-bold text-gray-800 dark:text-gray-100">
                  {isVisible ? '326' : '0'}
                </div>
                <div className="text-xs text-gray-500">Orders</div>
              </div>
              <div className="text-center">
                <div className="text-base font-bold text-gray-800 dark:text-gray-100">
                  {isVisible ? '18.2k' : '0'}
                </div>
                <div className="text-xs text-gray-500">Visitors</div>
              </div>
              <div className="text-center">
                <div className="text-base font-bold text-gray-800 dark:text-gray-100">
                  {isVisible ? '79%' : '0%'}
                </div>
                <div className="text-xs text-gray-500">Conversion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (!canvas.current) return;
    
    const ctx = canvas.current.getContext('2d');
    if (!ctx) return;
    
    const commonOptions: any = {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        tooltip: {
          bodyColor: darkMode ? tooltipBodyColor.dark : tooltipBodyColor.light,
          backgroundColor: darkMode ? tooltipBgColor.dark : tooltipBgColor.light,
          borderColor: darkMode ? tooltipBorderColor.dark : tooltipBorderColor.light,
        },
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: 'nearest',
      },
    };
    

    let chartOptions: any = {};
    let chartPlugins: any[] = [];
    
    switch (type) {
      case 'bar-1':
        chartOptions = {
          ...commonOptions,
          layout: {
            padding: {
              top: 12,
              bottom: 16,
              left: 20,
              right: 20,
            },
          },
          scales: {
            y: {
              border: {
                display: false,
              },
              ticks: {
                maxTicksLimit: 5,
                callback: (value: any) => formatValue(value),
                color: darkMode ? textColor.dark : textColor.light,
              },
              grid: {
                color: darkMode ? gridColor.dark : gridColor.light,
              },
            },
            x: {
              type: 'time',
              time: {
                parser: 'MM-DD-YYYY',
                unit: 'month',
                displayFormats: {
                  month: 'MMM YY',
                },
              },
              border: {
                display: false,
              },
              grid: {
                display: false,
              },
              ticks: {
                color: darkMode ? textColor.dark : textColor.light,
              },
            },
          },
          plugins: {
            ...commonOptions.plugins,
            tooltip: {
              ...commonOptions.plugins.tooltip,
              callbacks: {
                title: () => false,
                label: (context: any) => formatValue(context.parsed.y),
              },
            },
          },
          animation: {
            duration: 500,
          },
        };
        chartPlugins = [
          {
            id: 'htmlLegend',
            afterUpdate(c: any, args: any, options: any) {
              const ul = legend.current;
              if (!ul) return;
           
              while (ul.firstChild) {
                ul.firstChild.remove();
              }
             
              const items = c.options?.plugins?.legend?.labels?.generateLabels?.(c) || [];
              items.forEach((item: any) => {
                const li = document.createElement('li');
             
                const button = document.createElement('button');
                button.style.display = 'inline-flex';
                button.style.alignItems = 'center';
                button.style.opacity = item.hidden ? '.3' : '';
                button.onclick = () => {
                  c.setDatasetVisibility(item.datasetIndex, !c.isDatasetVisible(item.datasetIndex));
                  c.update();
                };
             
                const box = document.createElement('span');
                box.style.display = 'block';
                box.style.width = '12px';
                box.style.height = '12px';
                box.style.borderRadius = 'calc(infinity * 1px)';
                box.style.marginRight = '8px';
                box.style.borderWidth = '3px';
                box.style.borderColor = item.fillStyle;
                box.style.pointerEvents = 'none';
                
                const labelContainer = document.createElement('span');
                labelContainer.style.display = 'flex';
                labelContainer.style.alignItems = 'center';
                const value = document.createElement('span');
                value.classList.add('text-gray-800', 'dark:text-gray-100');
                value.style.fontSize = '30px';
                value.style.lineHeight = 'calc(2.25 / 1.875)';
                value.style.fontWeight = '700';
                value.style.marginRight = '8px';
                value.style.pointerEvents = 'none';
                const label = document.createElement('span');
                label.classList.add('text-gray-500', 'dark:text-gray-400');
                label.style.fontSize = '14px';
                label.style.lineHeight = 'calc(1.25 / 0.875)';

                const theValue = c.data.datasets[item.datasetIndex].data.reduce((a: any, b: any) => a + b, 0);
                const valueText = document.createTextNode(formatValue(theValue));
                const labelText = document.createTextNode(item.text);
                value.appendChild(valueText);
                label.appendChild(labelText);
                li.appendChild(button);
                button.appendChild(box);
                button.appendChild(labelContainer);
                labelContainer.appendChild(value);
                labelContainer.appendChild(label);
                ul.appendChild(li);
              });
            },
          },
        ];
        break;
        
      case 'bar-2':
        chartOptions = {
          ...commonOptions,
          layout: {
            padding: {
              top: 12,
              bottom: 16,
              left: 20,
              right: 20,
            },
          },
          scales: {
            y: {
              stacked: true,
              border: {
                display: false,
              },
              beginAtZero: true,
              ticks: {
                maxTicksLimit: 5,
                callback: (value: any) => formatValue(value),
                color: darkMode ? textColor.dark : textColor.light,
              },
              grid: {
                color: darkMode ? gridColor.dark : gridColor.light,
              },
            
        },
        x: {
          stacked: true,
          type: 'time',
          time: {
            parser: 'MM-DD-YYYY',
            unit: 'month',
            displayFormats: {
              month: 'MMM YY',
            },
          },
          border: {
            display: false,
          },
          grid: {
            display: false,
          },
          ticks: {
            autoSkipPadding: 48,
            maxRotation: 0,
            color: darkMode ? textColor.dark : textColor.light,
          },
        },
      },
      plugins: {
        ...commonOptions.plugins,
        tooltip: {
          ...commonOptions.plugins.tooltip,
          callbacks: {
            title: () => false,
            label: (context: any) => formatValue(context.parsed.y),
          },
        },
      },
      animation: {
        duration: 200,
      },
    };
    break;
    
  case 'bar-3':
    chartOptions = {
      ...commonOptions,
      layout: {
        padding: {
          top: 12,
          bottom: 16,
          left: 20,
          right: 20,
        },
      },
      scales: {
        y: {
          stacked: true,
          border: {
            display: false,
          },
          beginAtZero: true,
          ticks: {
            maxTicksLimit: 5,
            callback: (value: any) => formatThousands(value),
            color: darkMode ? textColor.dark : textColor.light,
          },
          grid: {
            color: darkMode ? gridColor.dark : gridColor.light,
          },
        },
        x: {
          stacked: true,
          type: 'time',
          time: {
            parser: 'MM-DD-YYYY',
            unit: 'month',
            displayFormats: {
              month: 'MMM',
            },
          },
          border: {
            display: false,
          },
          grid: {
            display: false,
          },
          ticks: {
            autoSkipPadding: 48,
            maxRotation: 0,
            color: darkMode ? textColor.dark : textColor.light,
          },
        },
      },
      plugins: {
        ...commonOptions.plugins,
        tooltip: {
          ...commonOptions.plugins.tooltip,
          callbacks: {
            title: () => false,
            label: (context: any) => formatThousands(context.parsed.y),
          },
        },
      },
      animation: {
        duration: 500,
      },
    };
    chartPlugins = [
      {
        id: 'htmlLegend',
        afterUpdate(c: any, args: any, options: any) {
          const ul = legend.current;
          if (!ul) return;
        
          while (ul.firstChild) {
            ul.firstChild.remove();
          }
          
          const items = c.options.plugins?.legend?.labels?.generateLabels?.(c) || [];
          items.forEach((item: any) => {
            const li = document.createElement('li');
          
            const button = document.createElement('button');
            button.style.display = 'inline-flex';
            button.style.alignItems = 'center';
            button.style.opacity = item.hidden ? '.3' : '';
            button.onclick = () => {
              c.setDatasetVisibility(item.datasetIndex, !c.isDatasetVisible(item.datasetIndex));
              c.update();
            };
           
            const box = document.createElement('span');
            box.style.display = 'block';
            box.style.width = '12px';
            box.style.height = '12px';
            box.style.borderRadius = 'calc(infinity * 1px)';
            box.style.marginRight = '8px';
            box.style.borderWidth = '3px';
            box.style.borderColor = item.fillStyle as string;
            box.style.pointerEvents = 'none';
        
            const label = document.createElement('span');
            label.classList.add('text-gray-500', 'dark:text-gray-400');
            label.style.fontSize = '14px';
            label.style.lineHeight = 'calc(1.25 / 0.875)';
            const labelText = document.createTextNode(item.text);
            label.appendChild(labelText);
            li.appendChild(button);
            button.appendChild(box);
            button.appendChild(label);
            ul.appendChild(li);
          });
        },
      },
    ];
    break;
    
  case 'line-1':
    chartOptions = {
      ...commonOptions,
      layout: {
        padding: 20,
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true,
        },
        x: {
          type: 'time',
          time: {
            parser: 'MM-DD-YYYY',
            unit: 'month',
          },
          display: false,
        },
      },
      plugins: {
        ...commonOptions.plugins,
        tooltip: {
          ...commonOptions.plugins.tooltip,
          callbacks: {
            title: () => false,
            label: (context: any) => formatValue(context.parsed.y),
          },
        },
      },
      resizeDelay: 200,
    };
    break;
    
  case 'line-2':
    chartOptions = {
      ...commonOptions,
      layout: {
        padding: 20,
      },
      scales: {
        y: {
          border: {
            display: false,
          },
          beginAtZero: true,
          ticks: {
            maxTicksLimit: 5,
            callback: (value: any) => formatValue(value),
            color: darkMode ? textColor.dark : textColor.light,
          },
          grid: {
            color: darkMode ? gridColor.dark : gridColor.light,
          },
        },
        x: {
          type: 'time',
          time: {
            parser: 'MM-DD-YYYY',
            unit: 'month',
            displayFormats: {
              month: 'MMM YY',
            },
          },
          border: {
            display: false,
          },
          grid: {
            display: false,
          },
          ticks: {
            autoSkipPadding: 48,
            maxRotation: 0,
            color: darkMode ? textColor.dark : textColor.light,
          },
        },
      },
      plugins: {
        ...commonOptions.plugins,
        tooltip: {
          ...commonOptions.plugins.tooltip,
          callbacks: {
            title: () => false,
            label: (context: any) => formatValue(context.parsed.y),
          },
        },
      },
      resizeDelay: 200,
    };
    chartPlugins = [
      {
        id: 'htmlLegend',
        afterUpdate(c: any, args: any, options: any) {
          const ul = legend.current;
          if (!ul) return;
         
          while (ul.firstChild) {
            ul.firstChild.remove();
          }
        
          const items = c.options.plugins?.legend?.labels?.generateLabels?.(c) || [];
          items.slice(0, 2).forEach((item: any) => {
            const li = document.createElement('li');
          
            const button = document.createElement('button');
            button.style.display = 'inline-flex';
            button.style.alignItems = 'center';
            button.style.opacity = item.hidden ? '.3' : '';
            button.onclick = () => {
              c.setDatasetVisibility(item.datasetIndex, !c.isDatasetVisible(item.datasetIndex));
              c.update();
            };
           
            const box = document.createElement('span');
            box.style.display = 'block';
            box.style.width = '12px';
            box.style.height = '12px';
            box.style.borderRadius = 'calc(infinity * 1px)';
            box.style.marginRight = '8px';
            box.style.borderWidth = '3px';
            box.style.borderColor = c.data.datasets[item.datasetIndex].borderColor as string;
            box.style.pointerEvents = 'none';
          
            const label = document.createElement('span');
            label.classList.add('text-gray-500', 'dark:text-gray-400');
            label.style.fontSize = '14px';
            label.style.lineHeight = 'calc(1.25 / 0.875)';
            const labelText = document.createTextNode(item.text);
            label.appendChild(labelText);
            li.appendChild(button);
            button.appendChild(box);
            button.appendChild(label);
            ul.appendChild(li);
          });
        },
      },
    ];
    break;
    
  case 'realtime':
    chartOptions = {
      ...commonOptions,
      layout: {
        padding: 20,
      },
      scales: {
        y: {
          border: {
            display: false,
          },
          suggestedMin: 30,
          suggestedMax: 80,
          ticks: {
            maxTicksLimit: 5,
            callback: (value: any) => formatValue(value),
            color: darkMode ? textColor.dark : textColor.light,
          },
          grid: {
            color: darkMode ? gridColor.dark : gridColor.light,
          },
        },
        x: {
          type: 'time',
          time: {
            parser: 'hh:mm:ss',
            unit: 'second',
            tooltipFormat: 'MMM DD, H:mm:ss a',
            displayFormats: {
              second: 'H:mm:ss',
            },
          },
          border: {
            display: false,
          },
          grid: {
            display: false,
          },
          ticks: {
            autoSkipPadding: 48,
            maxRotation: 0,
            color: darkMode ? textColor.dark : textColor.light,
          },
        },
      },
      plugins: {
        ...commonOptions.plugins,
        tooltip: {
          ...commonOptions.plugins.tooltip,
          titleFont: {
            weight: '600',
          },
          callbacks: {
            label: (context: any) => formatValue(context.parsed.y),
          },
          titleColor: darkMode ? tooltipTitleColor.dark : tooltipTitleColor.light,
        },
      },
      animation: false,
    };
    break;
 
case 'doughnut':
    chartOptions = {
      ...commonOptions,
      cutout: '80%',
      layout: {
        padding: 24,
      },
      plugins: {
        ...commonOptions.plugins,
        tooltip: {
          ...commonOptions.plugins.tooltip,
          titleColor: darkMode ? tooltipTitleColor.dark : tooltipTitleColor.light,
        },
      },
      animation: {
        duration: 500,
      },
      resizeDelay: 200,
    };
    chartPlugins = [
      {
        id: 'htmlLegend',
        afterUpdate(c: any, args: any, options: any) {
          const ul = legend.current;
          if (!ul) return;

          while (ul.firstChild) {
            ul.firstChild.remove();
          }

          const items = c.options.plugins?.legend?.labels?.generateLabels?.(c) || [];
          items.forEach((item: any) => {
            const li = document.createElement('li');
            li.style.margin = '4px';

            const button = document.createElement('button');
            button.classList.add('btn-xs', 'bg-white', 'dark:bg-gray-700', 'text-gray-500', 'dark:text-gray-400', 'shadow-xs', 'shadow-black/[0.08]', 'rounded-full');
            button.style.opacity = item.hidden ? '.3' : '';
            button.onclick = () => {
              c.toggleDataVisibility(item.index);
              c.update();
            };

            const box = document.createElement('span');
            box.style.display = 'block';
            box.style.width = '8px';
            box.style.height = '8px';
            box.style.backgroundColor = item.fillStyle as string;
            box.style.borderRadius = '4px';
            box.style.marginRight = '4px';
            box.style.pointerEvents = 'none';

            const label = document.createElement('span');
            label.style.display = 'flex';
            label.style.alignItems = 'center';
            const labelText = document.createTextNode(item.text);
            label.appendChild(labelText);
            li.appendChild(button);
            button.appendChild(box);
            button.appendChild(label);
            ul.appendChild(li);
          });
        },
      },
    ];
    break;
    case 'scatter':
    chartOptions = { 
        ...commonOptions,
            layout: {
              padding: {
                top: 12,
                bottom: 16,
                left: 20,
                right: 20,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  drawTicks: false,
                },
                border: {
                  display: false,
                },
                ticks: {
                  maxTicksLimit: 5,
                  color: getCssVariable('--color-gray-400'),
                },
              },
              x: {
                grid: {
                  display: false,
                },
                border: {
                  display: false,
                },
                ticks: {
                  maxTicksLimit: 5,
                  color: getCssVariable('--color-gray-400'),
                },
              },
            },
            plugins: {
              legend: {
                display: true,
                position: 'top',
                labels: {
                  boxWidth: 12,
                  boxHeight: 12,
                  color: getCssVariable('--color-gray-400'),
                },
              },
              tooltip: {
                callbacks: {
                  title: function() { return ''; },
                 
                },
                bodyColor: getCssVariable('--color-gray-100'),
                backgroundColor: getCssVariable('--color-gray-900'),
                borderColor: getCssVariable('--color-gray-200'),
                borderWidth: 1,
                cornerRadius: 4,
                displayColors: false,
                padding: 8,
              },
            },
            interaction: {
              intersect: false,
              mode: 'nearest',
            },
            animation: {
              duration: 500,
            },
            maintainAspectRatio: false,
            resizeDelay: 200,
          };
    break
}

const newChart = new ChartJS(ctx, {
    type: type === 'doughnut' 
      ? 'doughnut' 
      : (type === 'scatter' 
        ? 'scatter' 
        : (type.startsWith('bar') 
          ? 'bar' 
          : 'line')),
    data: data,
    options: chartOptions as ChartOptions,
    plugins: chartPlugins,
  });

setChart(newChart);

if (type === 'realtime' && data.datasets?.[0]?.data && data.datasets[0].data.length >= 2) {
  updateRealtimeChartHeader(data);
}

return () => {
  newChart.destroy();
  setChart(null);
};
}, []);

useEffect(() => {
if (!chart) return;

chart.data = data;
chart.update('none');

if (type === 'realtime' && data.datasets?.[0]?.data && data.datasets[0].data.length >= 2) {
  updateRealtimeChartHeader(data);
}
}, [chart, data, type]);

useEffect(() => {
if (!chart) return;

if (darkMode) {
  if (chart.options.scales?.x?.ticks) {
    chart.options.scales.x.ticks.color = textColor.dark;
  }
  if (chart.options.scales?.y?.ticks) {
    chart.options.scales.y.ticks.color = textColor.dark;
  }
  if (chart.options.scales?.y?.grid) {
    chart.options.scales.y.grid.color = gridColor.dark;
  }
  if (chart.options.plugins?.tooltip) {
    chart.options.plugins.tooltip.titleColor = tooltipTitleColor?.dark;
    chart.options.plugins.tooltip.bodyColor = tooltipBodyColor.dark;
    chart.options.plugins.tooltip.backgroundColor = tooltipBgColor.dark;
    chart.options.plugins.tooltip.borderColor = tooltipBorderColor.dark;
  }
} else {
  if (chart.options.scales?.x?.ticks) {
    chart.options.scales.x.ticks.color = textColor.light;
  }
  if (chart.options.scales?.y?.ticks) {
    chart.options.scales.y.ticks.color = textColor.light;
  }
  if (chart.options.scales?.y?.grid) {
    chart.options.scales.y.grid.color = gridColor.light;
  }
  if (chart.options.plugins?.tooltip) {
    chart.options.plugins.tooltip.titleColor = tooltipTitleColor?.light;
    chart.options.plugins.tooltip.bodyColor = tooltipBodyColor.light;
    chart.options.plugins.tooltip.backgroundColor = tooltipBgColor.light;
    chart.options.plugins.tooltip.borderColor = tooltipBorderColor.light;
  }
}

try {
  chart.update('none');
} catch (error) {
  console.error('Error updating chart:', error);
}
}, [currentTheme, chart, darkMode, textColor, gridColor, tooltipTitleColor, tooltipBodyColor, tooltipBgColor, tooltipBorderColor]);

const updateRealtimeChartHeader = (chartData: ChartData) => {
if (!chartValue.current || !chartDeviation.current || !chartData.datasets?.[0]?.data || chartData.datasets[0].data.length < 2) return;

const currentValue = chartData.datasets[0].data[chartData.datasets[0].data.length - 1] as number;
const previousValue = chartData.datasets[0].data[chartData.datasets[0].data.length - 2] as number;

if (typeof currentValue !== 'number' || typeof previousValue !== 'number') return;

const diff = ((currentValue - previousValue) / previousValue) * 100;
chartValue.current.innerHTML = String(currentValue);

if (diff < 0) {
  chartDeviation.current.style.backgroundColor = adjustColorOpacity(getCssVariable('--color-red-500'), 0.2);
  chartDeviation.current.style.color = getCssVariable('--color-red-700');
} else {
  chartDeviation.current.style.backgroundColor = adjustColorOpacity(getCssVariable('--color-green-500'), 0.2);
  chartDeviation.current.style.color = getCssVariable('--color-green-700');
}
chartDeviation.current.innerHTML = `${diff > 0 ? '+' : ''}${diff.toFixed(2)}%`;
};

const renderChartWrapper = () => {
  switch (type) {
    case 'bar-1':
      return (
        <React.Fragment>
          <div className="px-5 py-3">
            <ul ref={legend} className="flex flex-wrap gap-x-4"></ul>
          </div>
          <div className="grow">
            <canvas ref={canvas} width={width} height={height}></canvas>
          </div>
        </React.Fragment>
      );
      
    case 'bar-3':
      return (
        <React.Fragment>
          <div className="px-5 py-4">
            <div className="grow mb-1">
              <ul ref={legend} className="flex flex-wrap gap-x-4"></ul>
            </div>
          </div>
          <div className="grow">
            <canvas ref={canvas} width={width} height={height}></canvas>
          </div>
        </React.Fragment>
      );
      
    case 'line-2':
      return (
        <React.Fragment>
          <div className="px-5 py-3">
            <div className="flex flex-wrap justify-between items-end gap-y-2 gap-x-4">
              <div className="flex items-start">
                <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">$1,482</div>
                <div className="text-sm font-medium text-red-700 px-1.5 bg-red-500/20 rounded-full">-22%</div>
              </div>
              <div className="grow mb-1">
                <ul ref={legend} className="flex flex-wrap gap-x-4 sm:justify-end"></ul>
              </div>
            </div>
          </div>
          <div className="grow">
            <canvas ref={canvas} width={width} height={height}></canvas>
          </div>
        </React.Fragment>
      );
      
    case 'realtime':
      return (
        <React.Fragment>
          <div className="px-5 py-3">
            <div className="flex items-start">
              <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2 tabular-nums">$<span ref={chartValue}>57.81</span></div>
              <div ref={chartDeviation} className="text-sm font-medium px-1.5 rounded-full"></div>
            </div>
          </div>
          <div className="grow">
            <canvas ref={canvas} width={width} height={height}></canvas>
          </div>
        </React.Fragment>
      );
      case 'doughnut':
  return (
    <div className="grow flex flex-col justify-center">
      <div>
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
      <div className="px-5 pt-2 pb-6">
        <ul ref={legend} className="flex flex-wrap justify-center -m-1"></ul>
      </div>
    </div>
  );

  case 'scatter':
    return (
      <div className="grow flex flex-col justify-center">
        <div>
          <canvas ref={canvas} width={width} height={height}></canvas>
        </div>
        <div className="px-5 pt-2 pb-6">
          <ul ref={legend} className="flex flex-wrap justify-center -m-1"></ul>
        </div>
      </div>
    );
      
    case 'bar-2':
    case 'line-1':
    default:
      return (
        <canvas ref={canvas} width={width} height={height}></canvas>
      );
  }
};

return (
  <div className={className}>
    {renderChartWrapper()}
  </div>
);
};

export default Chart;
