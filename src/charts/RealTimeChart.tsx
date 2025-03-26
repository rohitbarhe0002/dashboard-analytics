import MiddileSection from "../sections/dashboard/MiddileSection";
import { useEffect, useState } from "react";
import { chartAreaGradient } from "./ChartjsConfig";
import { adjustColorOpacity } from "../utils/Utils";
import Chart from "./Chart";

export const RealTimeChart = () => {
    const [counter, setCounter] = useState(0);
    const [increment, setIncrement] = useState(0);
    const [range, setRange] = useState(35);
    
    const data = [
        57.81, 57.75, 55.48, 54.28, 53.14, 52.25, 51.04, 52.49, 55.49, 56.87,
        53.73, 56.42, 58.06, 55.62, 58.16, 55.22, 58.67, 60.18, 61.31, 63.25,
        65.91, 64.44, 65.97, 62.27, 60.96, 59.34, 55.07, 59.85, 53.79, 51.92,
        50.95, 49.65, 48.09, 49.81, 47.85, 49.52, 50.21, 52.22, 54.42, 53.42,
        50.91, 58.52, 53.37, 57.58, 59.09, 59.36, 58.71, 59.42, 55.93, 57.71,
        50.62, 56.28, 57.37, 53.08, 55.94, 55.82, 53.94, 52.65, 50.25,
    ];
  
    const [slicedData, setSlicedData] = useState<any>(data.slice(0, range));
  
    const generateDates = () => {
      const now:any = new Date();
      const dates:any = [];
      data.forEach((v, i) => {
        dates.push(new Date(now - 2000 - i * 2000));
      });
      return dates;
    };
  
    const [slicedLabels, setSlicedLabels] = useState<any>(generateDates().slice(0, range).reverse());

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter(counter + 1);
      }, 2000);
      return () => clearInterval(interval);
    }, [counter]);
  
    useEffect(() => {
      setIncrement(increment + 1);
      if (increment + range < data.length) {
        setSlicedData(([x, ...slicedData]:any) => [...slicedData, data[increment + range]]);
      } else {
        setIncrement(0);
        setRange(0);
      }
      setSlicedLabels(([x, ...slicedLabels]:any) => [...slicedLabels, new Date()]);
      return () => setIncrement(0)
    }, [counter]);
  
    const chartData5 = {
      labels: slicedLabels,
      datasets: [
        {
          data: slicedData,
          fill: true,
          backgroundColor: function(context:any) {
            const chart = context.chart;
            const {ctx, chartArea} = chart;
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
      ],
    };
  
    return (
      <MiddileSection title="Real Time Value" component={Chart} componentProps={{ type:'realtime', data: chartData5, width: 595, height: 248 }} />
    );
  };

  export default RealTimeChart;