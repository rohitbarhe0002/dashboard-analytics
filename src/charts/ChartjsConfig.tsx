import { Chart, Tooltip, ChartArea } from 'chart.js';
import { adjustColorOpacity, getCssVariable } from '../utils/Utils';
import { ColorSet, ColorStop } from '../types/type';

Chart.register(Tooltip);

Chart.defaults.font.family = '"Inter", sans-serif';
Chart.defaults.font.weight = 500;
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.displayColors = false;
Chart.defaults.plugins.tooltip.mode = 'nearest';
Chart.defaults.plugins.tooltip.intersect = false;
Chart.defaults.plugins.tooltip.position = 'nearest';
Chart.defaults.plugins.tooltip.caretSize = 0;
Chart.defaults.plugins.tooltip.caretPadding = 20;
Chart.defaults.plugins.tooltip.cornerRadius = 8;
Chart.defaults.plugins.tooltip.padding = 8;

export const chartAreaGradient = (
  ctx: CanvasRenderingContext2D | null, 
  chartArea: ChartArea | undefined, 
  colorStops: ColorStop[]
): string | CanvasGradient => {
  if (!ctx || !chartArea || !colorStops || colorStops.length === 0) {
    return 'transparent';
  }
  const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
  colorStops.forEach(({ stop, color }) => {
    gradient.addColorStop(stop, color);
  });
  return gradient;
};


export const chartColors: {
  textColor: ColorSet;
  gridColor: ColorSet;
  backdropColor: ColorSet;
  tooltipTitleColor: ColorSet;
  tooltipBodyColor: ColorSet;
  tooltipBgColor: ColorSet;
  tooltipBorderColor: ColorSet;
} = {
  textColor: {
    light: getCssVariable('--color-gray-400'),
    dark: getCssVariable('--color-gray-500'),
  },
  gridColor: {
    light: getCssVariable('--color-gray-100'),
    dark: adjustColorOpacity(getCssVariable('--color-gray-700'), 0.6),
  },
  backdropColor: {
    light: getCssVariable('--color-white'),
    dark: getCssVariable('--color-gray-800'),
  },
  tooltipTitleColor: {
    light: getCssVariable('--color-gray-800'),
    dark: getCssVariable('--color-gray-100'),
  },
  tooltipBodyColor: {
    light: getCssVariable('--color-gray-500'),
    dark: getCssVariable('--color-gray-400')
  },
  tooltipBgColor: {
    light: getCssVariable('--color-white'),
    dark: getCssVariable('--color-gray-700'),
  },
  tooltipBorderColor: {
    light: getCssVariable('--color-gray-200'),
    dark: getCssVariable('--color-gray-600'),
  },
};
